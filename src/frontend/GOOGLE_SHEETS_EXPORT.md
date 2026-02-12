# Google Sheets Export Setup Guide

This guide explains how to configure the Solar Sparkle application to export form submissions to Google Sheets.

## Overview

The application can automatically export Expert Consultancy, Trusted Partner, and AMC Enquiry form submissions to Google Sheets after they are successfully saved to the Internet Computer backend. This feature is **optional and non-blocking**—if not configured, the app works normally without Google Sheets integration.

## Prerequisites

1. A Google account with access to Google Sheets
2. The email `solarsparklesolution@gmail.com` should have edit access to your target Google Sheet
3. Basic familiarity with Google Apps Script (for setting up the write endpoint)

## Step 1: Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet or open an existing one
3. Share the sheet with `solarsparklesolution@gmail.com` with **Editor** permissions

### Recommended Sheet Structure

#### For Expert Consultancy Form (Sheet 1 or Tab 1):
| Timestamp | Form Type | Name | Phone Number | Email | Location | Requirement Message |
|-----------|-----------|------|--------------|-------|----------|---------------------|

#### For Trusted Partner Form (Sheet 2 or Tab 2):
| Timestamp | Form Type | Name | Company Name | Phone Number | Email | Location | Business Details |
|-----------|-----------|------|--------------|--------------|-------|----------|------------------|

#### For AMC Enquiry Form (Sheet 3 or Tab 3):
| Timestamp | Form Type | Client Name | Phone Number | Email | Location | System Details |
|-----------|-----------|-------------|--------------|-------|----------|----------------|

## Step 2: Create a Google Apps Script Web App

You need to create a Google Apps Script that receives POST requests and writes data to your sheet.

### 2.1 Open Apps Script Editor

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any default code in the editor

### 2.2 Add the Script Code

Paste the following code into the Apps Script editor:

