# SAPUI5 Project List Application

A master-detail SAPUI5 application that displays a list of projects with detailed information.

## Features

- **Master View**: Displays a list of projects with start date, end date, title, and location
- **Detail View**: Shows comprehensive project information including description, role, customer/industry, and technologies
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Navigation**: Router-based navigation between master and detail views
- **Hardcoded Data**: Contains 3 sample projects as specified in the PRD

## Project Structure

```
projectportui5/
├── webapp/
│   ├── index.html          # Application entry point
│   ├── index.js            # Bootstrap script
│   ├── Component.js        # Main application component
│   ├── manifest.json       # Application descriptor
│   ├── controller/         # Controllers for views
│   │   ├── App.controller.js
│   │   ├── Master.controller.js
│   │   └── Detail.controller.js
│   ├── view/              # XML views
│   │   ├── App.view.xml
│   │   ├── Master.view.xml
│   │   └── Detail.view.xml
│   ├── css/               # Custom styles
│   │   └── style.css
│   └── i18n/              # Internationalization
│       └── i18n.properties
├── ui5.yaml               # UI5 tooling configuration
├── package.json           # Node.js dependencies
└── README.md              # This file
```

## Sample Data

The application includes 3 hardcoded projects:

1. **ERP Implementation** (Berlin, Germany) - Manufacturing industry
2. **CRM Upgrade** (London, UK) - Retail industry  
3. **Inventory Management** (New York, USA) - Logistics industry

## Technologies Used

- SAPUI5 1.120.0
- sap.m library for mobile controls
- sap.ui.layout for responsive layouts
- Fiori 3 theme
- JSON Model for data binding
- Router for navigation

## Running the Application

1. Open `webapp/index.html` in a modern web browser
2. The application will load with the master view showing the project list
3. Click on any project to view its details
4. Use the back button to return to the master view

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Edge (latest)
- Safari (latest)

## Development Notes

- Code is modular and well-commented for AI code editor compatibility
- Follows SAPUI5 Fiori design guidelines
- Uses responsive controls for cross-device compatibility
- Implements master-detail pattern as per SAPUI5 template
