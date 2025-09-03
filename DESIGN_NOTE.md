# iReporter Design System & MUI Refactor

This document outlines the integration of the iReporter design system into the TFDN ImpactHub application, achieved by extending Material UI (MUI) with a custom theme and a set of reusable UI primitive components.

## 1. Theming

The core of the design system is defined in `src/lib/theme.ts`. This file establishes a centralized theme that provides consistent colors, typography, and spacing across the application.

### Color Palette

The theme includes the following color categories:

- **Primary**: The main brand color used for primary actions, links, and highlights.
- **Secondary**: The secondary brand color used for accents and less prominent actions.
- **Status**: A dedicated palette for semantic states, ensuring consistent user feedback:
  - `resolved`: Indicates success or completion (e.g., green).
  - `review`: Indicates a pending or in-progress state (e.g., orange).
  - `pending`: Indicates a waiting or neutral state (e.g., yellow).

### Typography

The theme sets a default font family and consistent typographic scale (`h1`, `h2`, `body1`, etc.) to maintain a clear visual hierarchy.

## 2. UI Primitive Components

To ensure consistency and streamline development, we have created a set of custom UI primitives located in `src/components/ui/`. These components wrap standard MUI components and apply the iReporter theme by default.

### `AppButton`

- **File**: `src/components/ui/AppButton.tsx`
- **Purpose**: A themed replacement for MUI's `Button`.
- **Variants**:
  - `primary`: A solid button for primary calls-to-action.
  - `secondary`: An outlined button for secondary actions.
  - `text`: A button with no background or border, for tertiary actions.

### `AppCard`

- **File**: `src/components/ui/AppCard.tsx`
- **Purpose**: A themed replacement for MUI's `Card` and `Paper`.
- **Features**: Provides a consistent container with predefined shadows, border-radius, and padding, aligning with the iReporter design language.

### `StatusBadge`

- **File**: `src/components/ui/StatusBadge.tsx`
- **Purpose**: A themed replacement for MUI's `Chip`.
- **Features**: Designed to display status information using the `status` color palette from the theme. It accepts a `status` prop (`resolved`, `review`, `pending`) to automatically apply the correct color.

## 3. Refactoring Summary

The following pages and components have been refactored to adopt the iReporter design system:

- `AICareerPage.tsx` and its child components (`CareerQuiz`, `CareerResults`).
- `FrameworkPage.tsx` and its child components (`PillarCard`, `InteractiveTimeline`).
- `PillarDetailPage.tsx`
- `ResearchPage.tsx`
- `GetInvolvedPage.tsx`

During the refactor, standard MUI components (`Button`, `Card`, `Chip`) were replaced with their corresponding UI primitives (`AppButton`, `AppCard`, `StatusBadge`), and all hardcoded colors were updated to use the centralized theme palette. This ensures that future design changes can be made efficiently by updating the theme in one place.
