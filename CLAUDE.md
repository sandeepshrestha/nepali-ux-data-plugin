# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Figma plugin project built with TypeScript for generating authentic Nepali placeholder content. The plugin provides localized data (names, addresses, phone numbers, images) for UI/UX designers working on apps and websites for the Nepali market.

## Architecture

- **code.ts**: Main plugin logic with data generators and Figma API integration
- **ui.html**: Tabbed interface for different content categories (Names, Addresses, Dates, Contact, Images)
- **manifest.json**: Figma plugin configuration and metadata
- **code.js**: Compiled JavaScript output (generated from code.ts)

### Plugin Structure
- **Data Generation Modules**: NepaliNameGenerator, NepaliAddressGenerator, NepaliPhoneGenerator, NepaliDateGenerator
- **Message Types**: generate-name, generate-address, generate-phone, generate-currency, generate-date, generate-nepali-date, insert-image
- **UI Categories**: Names (Roman/Devanagari), Addresses (Province/District/Ward), Dates (BS/AD formats), Contact (Phone/Currency/Date), Images (AI faces)
- **Smart Generation**: Generate button automatically updates selected text layers or creates new ones

The plugin follows Figma's standard architecture with separation between the main thread (code.ts) and UI thread (ui.html), communicating via postMessage.

## Development Commands

```bash
# Build TypeScript to JavaScript
npm run build

# Watch mode for development (rebuilds on file changes)
npm run watch

# Lint TypeScript files
npm run lint

# Auto-fix linting issues
npm run lint:fix
```

## Development Workflow

1. Use `npm run watch` during development for automatic TypeScript compilation
2. The main plugin code goes in `code.ts` (compiles to `code.js`)
3. UI modifications go in `ui.html`
4. Always run `npm run lint` before committing changes

## Key Files

- **manifest.json**: Contains plugin metadata, capabilities, and network permissions
- **tsconfig.json**: TypeScript configuration targeting ES6
- **package.json**: Contains ESLint configuration with Figma-specific rules

## Figma Plugin Idea - Nepali UX Data (Figma Plugin)

Goal:
Build a Figma plugin that provides authentic Nepali placeholder content for UI/UX designers working on apps and websites for the Nepali market. The plugin should make it easy to insert Nepali-specific user data directly into Figma designs.

Core Features:

AI-Generated Nepali Faces

Library of diverse Nepali faces (different ethnicities, age groups, genders).

Images are royalty-free and AI-generated to avoid privacy issues.

Option for photo-realistic and avatar styles.

Nepali Name Generator

Realistic Nepali names (Male, Female, Neutral).

Output in Romanized (Sandeep Shrestha) or Devanagari (सन्दीप श्रेष्ठ).

Address & Location Generator

Realistic Nepali addresses:
Baneshwor-10, Kathmandu
Pokhara-6, Lakeside

Includes ward numbers, districts, and provinces.

Phone, Currency & Date Formatting

Phone numbers in Nepali format (+977-9812345678).

Prices in NPR (e.g., Rs. 1,250 / रु १,२५०).

Dates in both Nepali (Bikram Sambat) and English format.

Smart Generation & Direct Updates

Simple, intuitive content generation that adapts to your workflow:

**How it works:**
- **No text selected**: Creates a new text layer with generated content
- **Text layers selected**: Updates each selected layer with unique content
- **Multiple layers**: Each gets different content (no duplicates)
- **Preserves fonts**: Maintains existing font settings when updating

**Usage**: Simply select text layers you want to update (or select nothing to create new), choose your content type (Names, Addresses, Dates), configure settings, and click "Generate". The plugin intelligently handles the rest.

Perfect for both populating new designs and refreshing existing mockups with authentic Nepali content.

Advanced Features (Future):

Avatar styles (illustrated, minimal).

Dynamic e-commerce or fintech data (product names, prices).

API integration for real-time Nepali datasets.

Target Audience:

UI/UX designers, freelancers, and agencies working on Nepali or South Asian products.

Startups building local apps and websites.

Monetization Plan:

Free tier: Basic names, limited faces.

Pro tier ($5–$10/month): Unlimited assets, bulk generation, API support.

One-time lifetime plan for early adopters.

Tech Requirements:

Built as a Figma plugin using TypeScript + React.

Use Figma Plugin API for UI and node manipulation.

AI images stored on cloud (AWS S3, Firebase, or similar).

Random data generation logic for names and addresses.

Vision:
This plugin will make it easier to design Nepali products with realistic, localized data, improving the UX design process and eliminating reliance on Western placeholder content.