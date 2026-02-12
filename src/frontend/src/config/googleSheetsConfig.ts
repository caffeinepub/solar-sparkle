/**
 * Google Sheets Export Configuration
 * 
 * This module provides centralized configuration for Google Sheets export functionality.
 * Configuration can be set via runtime window config or build-time environment variables.
 */

interface GoogleSheetsConfig {
  consultancyEndpoint?: string;
  partnerEndpoint?: string;
  amcEndpoint?: string;
  sharedSecret?: string;
}

/**
 * Get Google Sheets configuration from window config or environment variables
 */
export function getGoogleSheetsConfig(): GoogleSheetsConfig {
  // Check for runtime window configuration first
  const windowConfig = (window as any).GOOGLE_SHEETS_CONFIG;
  
  if (windowConfig) {
    return {
      consultancyEndpoint: windowConfig.consultancyEndpoint,
      partnerEndpoint: windowConfig.partnerEndpoint,
      amcEndpoint: windowConfig.amcEndpoint,
      sharedSecret: windowConfig.sharedSecret,
    };
  }

  // Fallback to build-time environment variables
  return {
    consultancyEndpoint: import.meta.env.VITE_GOOGLE_SHEETS_CONSULTANCY_URL,
    partnerEndpoint: import.meta.env.VITE_GOOGLE_SHEETS_PARTNER_URL,
    amcEndpoint: import.meta.env.VITE_GOOGLE_SHEETS_AMC_URL,
    sharedSecret: import.meta.env.VITE_GOOGLE_SHEETS_SECRET,
  };
}

/**
 * Check if Google Sheets export is configured for consultancy forms
 */
export function isConsultancyExportConfigured(): boolean {
  const config = getGoogleSheetsConfig();
  return !!config.consultancyEndpoint;
}

/**
 * Check if Google Sheets export is configured for partner registrations
 */
export function isPartnerExportConfigured(): boolean {
  const config = getGoogleSheetsConfig();
  return !!config.partnerEndpoint;
}

/**
 * Check if Google Sheets export is configured for AMC enquiries
 */
export function isAmcExportConfigured(): boolean {
  const config = getGoogleSheetsConfig();
  return !!config.amcEndpoint;
}
