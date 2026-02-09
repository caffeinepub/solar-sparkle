/**
 * Solar Calculator Module
 * Provides improved solar system sizing, cost estimation, and savings calculations
 * with explicit assumptions and roof-area feasibility checks.
 */

export interface SolarCalculatorInputs {
  monthlyBill: number;
  propertyType: 'residential' | 'commercial' | 'industrial';
  roofArea?: number;
}

export interface SolarCalculatorResult {
  // System sizing
  idealSystemSize: number; // kW
  feasibleSystemSize: number; // kW (roof-limited if applicable)
  isRoofLimited: boolean;
  roofLimitMessage?: string;
  
  // Financial
  estimatedCost: number; // INR
  annualSavings: number; // INR
  paybackPeriod: number; // years
  
  // Environmental
  co2Reduction: number; // tons per year
  
  // Metadata
  assumptions: SolarAssumptions;
}

export interface SolarAssumptions {
  electricityTariff: number; // INR per kWh
  annualGenerationPerKW: number; // kWh per kW installed
  sqftPerKW: number; // square feet required per kW
  costPerKW: number; // INR per kW
  selfConsumptionRate: number; // percentage (0-1)
  co2PerKWh: number; // kg CO2 per kWh
}

export interface ValidationError {
  field: string;
  message: string;
}

// Property-specific cost baselines (INR per kW)
const COST_PER_KW: Record<string, number> = {
  residential: 50000, // ₹50,000 per kW
  commercial: 48000,  // ₹48,000 per kW (slight economy of scale)
  industrial: 45000,  // ₹45,000 per kW (better economy of scale)
};

// Default assumptions for Indian solar installations
const BASE_ASSUMPTIONS = {
  electricityTariff: 7.5, // INR per kWh (average for India)
  annualGenerationPerKW: 1400, // kWh per kW per year (conservative for India)
  sqftPerKW: 100, // square feet required per kW installed
  selfConsumptionRate: 0.75, // 75% self-consumption assumption
  co2PerKWh: 0.82, // kg CO2 per kWh (India grid average)
};

/**
 * Validates calculator inputs and returns any validation errors
 */
export function validateInputs(inputs: Partial<SolarCalculatorInputs>): ValidationError[] {
  const errors: ValidationError[] = [];
  
  if (!inputs.monthlyBill || inputs.monthlyBill <= 0) {
    errors.push({
      field: 'monthlyBill',
      message: 'Please enter a valid monthly electricity bill amount',
    });
  }
  
  if (inputs.monthlyBill && inputs.monthlyBill > 1000000) {
    errors.push({
      field: 'monthlyBill',
      message: 'Monthly bill seems unusually high. Please verify the amount',
    });
  }
  
  if (!inputs.propertyType) {
    errors.push({
      field: 'propertyType',
      message: 'Please select a property type',
    });
  }
  
  if (inputs.roofArea !== undefined && inputs.roofArea < 0) {
    errors.push({
      field: 'roofArea',
      message: 'Roof area cannot be negative',
    });
  }
  
  return errors;
}

/**
 * Calculates solar system recommendations based on user inputs
 */
export function calculateSolarSystem(
  inputs: SolarCalculatorInputs
): SolarCalculatorResult {
  // Get property-specific assumptions
  const assumptions: SolarAssumptions = {
    ...BASE_ASSUMPTIONS,
    costPerKW: COST_PER_KW[inputs.propertyType] || COST_PER_KW.residential,
  };
  
  // Step 1: Calculate annual consumption from monthly bill
  const annualBillAmount = inputs.monthlyBill * 12;
  const estimatedAnnualConsumption = annualBillAmount / assumptions.electricityTariff; // kWh
  
  // Step 2: Calculate ideal system size based on consumption and generation
  const idealSystemSize = estimatedAnnualConsumption / assumptions.annualGenerationPerKW;
  
  // Step 3: Check roof area constraints
  let feasibleSystemSize = idealSystemSize;
  let isRoofLimited = false;
  let roofLimitMessage: string | undefined;
  
  if (inputs.roofArea && inputs.roofArea > 0) {
    const maxSystemSizeFromRoof = inputs.roofArea / assumptions.sqftPerKW;
    
    if (maxSystemSizeFromRoof < idealSystemSize) {
      feasibleSystemSize = maxSystemSizeFromRoof;
      isRoofLimited = true;
      roofLimitMessage = `Your roof area (${inputs.roofArea} sq ft) can accommodate up to ${roundToDecimal(maxSystemSizeFromRoof, 1)} kW. The ideal system size for your consumption would be ${roundToDecimal(idealSystemSize, 1)} kW, but we've adjusted the recommendation to fit your available space.`;
    }
  }
  
  // Round system sizes consistently
  const roundedIdealSize = roundToDecimal(idealSystemSize, 1);
  const roundedFeasibleSize = roundToDecimal(feasibleSystemSize, 1);
  
  // Step 4: Calculate cost based on feasible system size
  const estimatedCost = roundedFeasibleSize * assumptions.costPerKW;
  
  // Step 5: Calculate annual savings
  const expectedAnnualGeneration = roundedFeasibleSize * assumptions.annualGenerationPerKW;
  const savingsFromGeneration = expectedAnnualGeneration * assumptions.electricityTariff * assumptions.selfConsumptionRate;
  
  // Cap savings at annual bill amount (cannot save more than you spend)
  const annualSavings = Math.min(savingsFromGeneration, annualBillAmount);
  
  // Step 6: Calculate payback period safely
  let paybackPeriod: number;
  if (annualSavings > 0) {
    paybackPeriod = estimatedCost / annualSavings;
  } else {
    paybackPeriod = Infinity;
  }
  
  // Step 7: Calculate environmental impact
  const co2Reduction = (expectedAnnualGeneration * assumptions.co2PerKWh) / 1000; // Convert kg to tons
  
  return {
    idealSystemSize: roundedIdealSize,
    feasibleSystemSize: roundedFeasibleSize,
    isRoofLimited,
    roofLimitMessage,
    estimatedCost: Math.round(estimatedCost),
    annualSavings: Math.round(annualSavings),
    paybackPeriod: roundToDecimal(paybackPeriod, 1),
    co2Reduction: roundToDecimal(co2Reduction, 1),
    assumptions,
  };
}

/**
 * Helper function to round numbers to specified decimal places
 */
function roundToDecimal(value: number, decimals: number): number {
  const multiplier = Math.pow(10, decimals);
  return Math.round(value * multiplier) / multiplier;
}
