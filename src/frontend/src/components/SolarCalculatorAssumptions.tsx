import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Info } from 'lucide-react';
import type { SolarAssumptions } from '@/lib/solarCalculator';

interface SolarCalculatorAssumptionsProps {
  assumptions: SolarAssumptions;
}

export function SolarCalculatorAssumptions({ assumptions }: SolarCalculatorAssumptionsProps) {
  return (
    <Card className="border-sky-primary/20 bg-sky-primary/5">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Info className="h-4 w-4 text-sky-primary" />
          <CardTitle className="text-lg">Calculation Assumptions</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Electricity Tariff:</span>
            <Badge variant="secondary" className="font-mono">
              ₹{assumptions.electricityTariff}/kWh
            </Badge>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Annual Generation:</span>
            <Badge variant="secondary" className="font-mono">
              {assumptions.annualGenerationPerKW} kWh/kW
            </Badge>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Space Required:</span>
            <Badge variant="secondary" className="font-mono">
              {assumptions.sqftPerKW} sq ft/kW
            </Badge>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Self-Consumption:</span>
            <Badge variant="secondary" className="font-mono">
              {Math.round(assumptions.selfConsumptionRate * 100)}%
            </Badge>
          </div>
        </div>
        
        <p className="text-xs text-muted-foreground pt-2 border-t">
          These estimates are based on typical Indian solar installations and average conditions. 
          Actual results may vary based on location, weather, and system quality.
        </p>
      </CardContent>
    </Card>
  );
}
