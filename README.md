# Checkbox Selection React App

## Overview
This project is a simple React-based web application that allows users to select multiple pages from a list using checkboxes. The application includes a "Select All" checkbox to toggle all pages at once. The selected state of each checkbox is dynamically updated, and users can view the state of the selections via a "Done" button that shows an alert with the current state.

## Features
- **Page List**: A list of pages with checkboxes.
- **Select All**: A checkbox to toggle the selection of all pages at once.
- **Individual Checkbox Control**: Toggle each page's checkbox individually.
- **State Display**: View the current selection state of all pages with a formatted alert when the "Done" button is clicked.

## Components
- **App**: The root component that manages the page list and selection states.
- **Card**: Displays the list of pages with checkboxes and includes the "Select All" functionality.
- **CheckItem**: Represents a single checkbox item (page) with a label.
- **CheckBox**: A reusable checkbox component using SVGs for checked/unchecked states.

## Dependencies
- React
- CSS (for basic styling)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/checkbox-selection-react-app.git
