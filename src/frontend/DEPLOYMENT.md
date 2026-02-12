# Solar Sparkle - Production Deployment Guide

This guide covers deploying the Solar Sparkle application to the Internet Computer mainnet.

## Prerequisites

1. **DFX CLI installed** (version 0.15.0 or higher)
   ```bash
   sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"
   ```

2. **Node.js and pnpm** installed
   ```bash
   node --version  # Should be v18 or higher
   pnpm --version
   ```

3. **Cycles wallet** with sufficient cycles for deployment
   - Minimum recommended: 2-3 TC (trillion cycles)
   - Get cycles at: https://internetcomputer.org/docs/current/developer-docs/setup/cycles/

## Local Verification

Before deploying to mainnet, verify the build works locally:

