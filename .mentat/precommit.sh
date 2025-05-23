#!/bin/bash
# Ensure pnpm lockfile is in sync with package.json
pnpm install --lockfile-only

# Install missing TypeScript Jest dependencies for testing
pnpm add -D ts-jest @types/jest

# Install missing TypeScript ESLint dependencies  
pnpm add -D -w @typescript-eslint/eslint-plugin @typescript-eslint/parser
