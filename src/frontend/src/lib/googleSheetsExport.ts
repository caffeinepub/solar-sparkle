/**
 * Google Sheets Export Utility
 * 
 * Provides functionality to export form submissions to Google Sheets via a configured endpoint.
 * Supports Expert Consultancy, Trusted Partner, and AMC Enquiry forms.
 */

import { getGoogleSheetsConfig } from '@/config/googleSheetsConfig';

export interface ConsultancyFormData {
  name: string;
  phoneNumber: string;
  email: string;
  location: string;
  requirementMessage: string;
}

export interface PartnerFormData {
  name: string;
  companyName: string;
  phoneNumber: string;
  email: string;
  location: string;
  businessDetails: string;
}

export interface AmcEnquiryData {
  clientName: string;
  phoneNumber: string;
  email: string;
  location: string;
  systemDetails: string;
}

export interface ExportResult {
  success: boolean;
  error?: string;
  configMissing?: boolean;
}

/**
 * Export consultancy form data to Google Sheets
 */
export async function exportConsultancyToSheets(
  data: ConsultancyFormData,
  onProgress?: (percentage: number) => void
): Promise<ExportResult> {
  const config = getGoogleSheetsConfig();

  if (!config.consultancyEndpoint) {
    return {
      success: false,
      configMissing: true,
      error: 'Google Sheets export URL not configured',
    };
  }

  try {
    if (onProgress) onProgress(10);

    const payload = {
      formType: 'consultancy',
      timestamp: new Date().toISOString(),
      name: data.name,
      phoneNumber: data.phoneNumber,
      email: data.email,
      location: data.location,
      requirementMessage: data.requirementMessage,
    };

    if (onProgress) onProgress(30);

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    if (config.sharedSecret) {
      headers['X-Sheets-Secret'] = config.sharedSecret;
    }

    if (onProgress) onProgress(50);

    const response = await fetch(config.consultancyEndpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
    });

    if (onProgress) onProgress(80);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    if (onProgress) onProgress(100);

    return { success: true };
  } catch (error) {
    console.error('Failed to export consultancy form to Google Sheets:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

/**
 * Export partner registration data to Google Sheets
 */
export async function exportPartnerToSheets(
  data: PartnerFormData,
  onProgress?: (percentage: number) => void
): Promise<ExportResult> {
  const config = getGoogleSheetsConfig();

  if (!config.partnerEndpoint) {
    return {
      success: false,
      configMissing: true,
      error: 'Google Sheets export URL not configured',
    };
  }

  try {
    if (onProgress) onProgress(10);

    const payload = {
      formType: 'partner',
      timestamp: new Date().toISOString(),
      name: data.name,
      companyName: data.companyName,
      phoneNumber: data.phoneNumber,
      email: data.email,
      location: data.location,
      businessDetails: data.businessDetails,
    };

    if (onProgress) onProgress(30);

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    if (config.sharedSecret) {
      headers['X-Sheets-Secret'] = config.sharedSecret;
    }

    if (onProgress) onProgress(50);

    const response = await fetch(config.partnerEndpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
    });

    if (onProgress) onProgress(80);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    if (onProgress) onProgress(100);

    return { success: true };
  } catch (error) {
    console.error('Failed to export partner registration to Google Sheets:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

/**
 * Export AMC enquiry data to Google Sheets
 */
export async function exportAmcEnquiryToSheets(
  data: AmcEnquiryData,
  onProgress?: (percentage: number) => void
): Promise<ExportResult> {
  const config = getGoogleSheetsConfig();

  if (!config.amcEndpoint) {
    return {
      success: false,
      configMissing: true,
      error: 'Google Sheets export URL not configured',
    };
  }

  try {
    if (onProgress) onProgress(10);

    const payload = {
      formType: 'amc',
      timestamp: new Date().toISOString(),
      clientName: data.clientName,
      phoneNumber: data.phoneNumber,
      email: data.email,
      location: data.location,
      systemDetails: data.systemDetails,
    };

    if (onProgress) onProgress(30);

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    if (config.sharedSecret) {
      headers['X-Sheets-Secret'] = config.sharedSecret;
    }

    if (onProgress) onProgress(50);

    const response = await fetch(config.amcEndpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
    });

    if (onProgress) onProgress(80);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    if (onProgress) onProgress(100);

    return { success: true };
  } catch (error) {
    console.error('Failed to export AMC enquiry to Google Sheets:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}
