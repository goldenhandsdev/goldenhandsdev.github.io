sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
    "use strict";

    return UIComponent.extend("projectlist.Component", {
        metadata: {
            manifest: "json"
        },

        /**
         * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
         * @public
         * @override
         */
        init: function () {
            // Call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // Set language from URL parameter if provided
            this._setLanguageFromURL();

            // Set up the data model with hardcoded project data
            this._setDataModel();

            // Set up the resource model for i18n
            this._setResourceModel();

            // Create the views based on the url/hash
            this.getRouter().initialize();
        },

        /**
         * Creates the content of the component
         * @public
         * @override
         */
        createContent: function () {
            // Create the App view as the root view
            return sap.ui.view({
                viewName: "projectlist.view.App",
                type: "XML",
                id: "app"
            });
        },

        /**
         * Sets up the hardcoded project data model
         * @private
         */
        _setDataModel: function () {
            var oData = {
                projects: [
  {
    "id": "1",
    "projectStartDate": "02/2023",
    "projectEndDate": "05/2023",
    "projectTitle": "UI5 Application for Personnel Master Data",
    "location": "Zürich + Remote",
    "projectStart": "February 2023",
    "projectEnd": "May 2023",
    "customerIndustry": "Energy Supply and Transport Technology; Building Technology",
    "role": "Developer",
    "projectDescription": "Development of a UI5 application for capturing personnel master data, including creation of personnel master data, validation checks, and review of master data by the specialist department with storage in the personnel master upon approval.",
    "projectLanguage": "German",
    "projectStatus": "Success",
    "projectStatusDescription": "Project completed."
  },
  {
    "id": "2",
    "projectStartDate": "10/2022",
    "projectEndDate": "07/2023",
    "projectTitle": "Fiori Service Tool for PM Service Orders",
    "location": "Bern + Remote",
    "projectStart": "October 2022",
    "projectEnd": "July 2023",
    "customerIndustry": "Energy Sector, Infrastructure",
    "role": "Developer",
    "projectDescription": "Development of a custom 'Fiori Service Tool' application for managing PM service orders with mobile conception and design in direct consultation with the customer. Features include creating/editing service orders (IW51/IW52) via Fiori, changing statuses (user and system status), selecting partners, notification types, technical locations, customer signature function, and automatic PDF dispatch of service notifications upon completion.",
    "projectLanguage": "German",
    "projectStatus": "Success",
    "projectStatusDescription": "Project completed."
  },
  {
    "id": "3",
    "projectStartDate": "02/2020",
    "projectEndDate": "12/2022",
    "projectTitle": "UI5 Applications for BW Forecasting",
    "location": "Zürich + Remote",
    "projectStart": "February 2020",
    "projectEnd": "December 2022",
    "customerIndustry": "Energy Supply and Transport Technology; Building Technology",
    "role": "Developer",
    "projectDescription": "Development of multiple custom UI5 applications, including one for forecasting plan values in the BW system. Tasks included reading data from the BW system, posting plan values to PSP elements via RFC call to ERP, using CDS Views and Smart Controls for data display, developing additional UI5 applications for status change requests, and enabling Excel download/upload of projects to/from ERP.",
    "projectLanguage": "German",
    "projectStatus": "Success",
    "projectStatusDescription": "Project completed."
  },
  {
    "id": "4",
    "projectStartDate": "01/2023",
    "projectEndDate": "05/2023",
    "projectTitle": "Fiori Applications for Material and Employee Management",
    "location": "Remote",
    "projectStart": "January 2023",
    "projectEnd": "May 2023",
    "customerIndustry": "Public Sector / Metrology",
    "role": "Developer",
    "projectDescription": "Design and development of two Fiori applications: one for creating and adjusting purchase requisitions in material management, and another for managing employee qualifications and training.",
    "projectLanguage": "German",
    "projectStatus": "Success",
    "projectStatusDescription": "Project completed."
  },
  {
    "id": "5",
    "projectStartDate": "01/2022",
    "projectEndDate": "12/2022",
    "projectTitle": "S/4HANA Greenfield Implementation",
    "location": "St. Gallen",
    "projectStart": "January 2022",
    "projectEnd": "December 2022",
    "customerIndustry": "IT Service and Consulting",
    "role": "Developer / Technical Consultant",
    "projectDescription": "Greenfield implementation of S/4HANA, including data migration from legacy systems using Migration Cockpit (LTMC), creation of custom migration objects via LTMOM, rollout and implementation of a custom time recording solution, new developments and enhancements for time recording, employee and performance reporting, customization of solutions (SAP GUI, UI5, Web Dynpro) to customer needs, and creation of various ABAP ALV reports for customer orders, prices, and conditions, along with form development for invoices and time records.",
    "projectLanguage": "German",
    "projectStatus": "Success",
    "projectStatusDescription": "Project completed."
  },
  {
    "id": "6",
    "projectStartDate": "04/2020",
    "projectEndDate": "07/2020",
    "projectTitle": "ECC to S/4HANA Migration and Planning Tool",
    "location": "Zürich",
    "projectStart": "April 2020",
    "projectEnd": "July 2020",
    "customerIndustry": "Auditing, Fiduciary, and Consulting",
    "role": "Developer, Technical Consultant",
    "projectDescription": "Support for migration from ECC 6.0 to S/4HANA, and design and development of a planning tool using Web Dynpro.",
    "projectLanguage": "German",
    "projectStatus": "Success",
    "projectStatusDescription": "Project completed."
  },
  {
    "id": "7",
    "projectStartDate": "07/2017",
    "projectEndDate": "02/2018",
    "projectTitle": "Time Recording Solution Rollout",
    "location": "Zürich",
    "projectStart": "July 2017",
    "projectEnd": "February 2018",
    "customerIndustry": "Public Sector / Canton of Zürich",
    "role": "Developer",
    "projectDescription": "Rollout and implementation of a custom time recording solution, including new developments and enhancements for time recording, employee, and performance reporting, and customization of solutions (SAP GUI, UI5, Web Dynpro) to customer needs.",
    "projectLanguage": "German",
    "projectStatus": "Success",
    "projectStatusDescription": "Project completed."
  },
  {
    "id": "8",
    "projectStartDate": "04/2017",
    "projectEndDate": "04/2017",
    "projectTitle": "SRM UI Addon Rollout",
    "location": "Neckarsulm",
    "projectStart": "April 2017",
    "projectEnd": "April 2017",
    "customerIndustry": "Food Retail",
    "role": "SAP SRM Consultant and Developer",
    "projectDescription": "Rollout of internal SRM UI Addon solution components, coordination of transports, importing solution components into the customer system, customization and testing of implemented solutions, and creation of training materials and documentation.",
    "projectLanguage": "German",
    "projectStatus": "Success",
    "projectStatusDescription": "Project completed."
  },
  {
    "id": "9",
    "projectStartDate": "03/2017",
    "projectEndDate": "04/2017",
    "projectTitle": "Fiori Application Extension for Goods Receipt",
    "location": "Ludwigsburg",
    "projectStart": "March 2017",
    "projectEnd": "April 2017",
    "customerIndustry": "Automotive Supplier, Filtration",
    "role": "SAP SRM Fiori Consultant and Developer",
    "projectDescription": "Implementation of an extension for the Fiori application 'Confirm Goods Receipt,' including configuration and commissioning of the application on the customer system, customization of approval emails for Fiori application navigation, and support for functional and acceptance testing, as well as production deployment.",
    "projectLanguage": "German",
    "projectStatus": "Success",
    "projectStatusDescription": "Project completed."
  },
  {
    "id": "10",
    "projectStartDate": "01/2017",
    "projectEndDate": "03/2017",
    "projectTitle": "Fiori Application Extension for Source Determination",
    "location": "Ingolstadt",
    "projectStart": "January 2017",
    "projectEnd": "March 2017",
    "customerIndustry": "Automotive Industry",
    "role": "SAPUI5 Developer",
    "projectDescription": "Implementation of an extension for the Fiori application 'Perform Source Determination,' including configuration and commissioning of an SAP WEB IDE installation on the customer system, creation of an extension application, implementation of customer-specific extensions, and coordination between external and internal project team members and project management.",
    "projectLanguage": "German",
    "projectStatus": "Success",
    "projectStatusDescription": "Project completed."
  },
  {
    "id": "11",
    "projectStartDate": "11/2016",
    "projectEndDate": "04/2017",
    "projectTitle": "SAP Business Workflow Implementation",
    "location": "Baden-Württemberg",
    "projectStart": "November 2016",
    "projectEnd": "April 2017",
    "customerIndustry": "Internet Service Provider",
    "role": "SAP SRM Consultant and Developer",
    "projectDescription": "Implementation of an SAP Business Workflow, including support for proposal creation, conducting workshops for requirement gathering, creating a technical specification, coordinating with external consultants, performing workflow customizing, creating a process schema, implementing workflow logic, and supporting functional and acceptance tests.",
    "projectLanguage": "German",
    "projectStatus": "Success",
    "projectStatusDescription": "Project completed."
  },
  {
    "id": "12",
    "projectStartDate": "11/2016",
    "projectEndDate": "12/2016",
    "projectTitle": "SAP Contract Management Enhancements",
    "location": "Remote",
    "projectStart": "November 2016",
    "projectEnd": "December 2016",
    "customerIndustry": "Food Industry",
    "role": "SAP SRM Developer",
    "projectDescription": "Enhancements in SAP Contract Management, including creation of a custom POWL, Excel upload of contracts, and extension of CM reporting.",
    "projectLanguage": "English",
    "projectStatus": "Success",
    "projectStatusDescription": "Project completed."
  },
  {
    "id": "13",
    "projectStartDate": "10/2016",
    "projectEndDate": "11/2016",
    "projectTitle": "XML Message Output for ECC Purchase Orders",
    "location": "Remote",
    "projectStart": "October 2016",
    "projectEnd": "November 2016",
    "customerIndustry": "Automotive Supplier",
    "role": "SAP ECC Developer",
    "projectDescription": "Implementation of XML message output for ECC purchase orders, including MM customizing for message output, implementation of XML transformation and email output, and coordination of requirements with the specialist department and end customers.",
    "projectLanguage": "German",
    "projectStatus": "Success",
    "projectStatusDescription": "Project completed."
  },
  {
    "id": "14",
    "projectStartDate": "09/2016",
    "projectEndDate": "11/2016",
    "projectTitle": "Central Data Maintenance and Distribution",
    "location": "Austria",
    "projectStart": "September 2016",
    "projectEnd": "November 2016",
    "customerIndustry": "Oil and Gas",
    "role": "SAP SRM Consultant and Developer",
    "projectDescription": "Implementation of central data maintenance and automatic distribution to multiple ECC systems in Contract Management, including creation of a concept for data storage and automatic distribution, implementation of customer validation, and message output.",
    "projectLanguage": "English",
    "projectStatus": "Success",
    "projectStatusDescription": "Project completed."
  },
  {
    "id": "15",
    "projectStartDate": "06/2016",
    "projectEndDate": "09/2016",
    "projectTitle": "Hybrid SAPUI5 Application with Barcode Scanner",
    "location": "Baden-Württemberg",
    "projectStart": "June 2016",
    "projectEnd": "September 2016",
    "customerIndustry": "Internal",
    "role": "SAP Fiori/SAPUI5 Developer",
    "projectDescription": "Development of a hybrid SAPUI5 application with a barcode scanner for purchase order creation, including creation of a technical concept and feasibility analysis, implementation using SAP Web IDE, testing and development on the Hana Cloud Platform, functional testing with the Hybrid App Toolkit Plugin, and support for marketing and customer proposals.",
    "projectLanguage": "English",
    "projectStatus": "Success",
    "projectStatusDescription": "Project completed."
  },
  {
    "id": "16",
    "projectStartDate": "06/2016",
    "projectEndDate": "08/2016",
    "projectTitle": "Einkaufswagen and Sourcing Cockpit Enhancements",
    "location": "Remote",
    "projectStart": "June 2016",
    "projectEnd": "August 2016",
    "customerIndustry": "Mechanical Engineering",
    "role": "SAP SRM Consultant and Developer",
    "projectDescription": "Customer-specific enhancements in the shopping cart and sourcing cockpit, including implementation of custom fields, search criteria, texts, and extension of search help criteria and POWL display.",
    "projectLanguage": "German",
    "projectStatus": "Success",
    "projectStatusDescription": "Project completed."
  },
  {
    "id": "17",
    "projectStartDate": "04/2016",
    "projectEndDate": "06/2016",
    "projectTitle": "Transfer of External Purchase Requisitions",
    "location": "North Rhine-Westphalia",
    "projectStart": "April 2016",
    "projectEnd": "June 2016",
    "customerIndustry": "Research Center",
    "role": "SAP SRM/ECC Consultant and Developer",
    "projectDescription": "Transfer of external purchase requisitions from SAP PM, including implementation of RFC transfer with data validation and mapping, transfer of customer-specific fields, and implementation of document locking, release, and status updates in respective systems.",
    "projectLanguage": "German",
    "projectStatus": "Success",
    "projectStatusDescription": "Project completed."
  },
  {
    "id": "18",
    "projectStartDate": "03/2016",
    "projectEndDate": "06/2016",
    "projectTitle": "SAP Fiori Application for Freitext Shopping Cart",
    "location": "Baden-Württemberg",
    "projectStart": "March 2016",
    "projectEnd": "June 2016",
    "customerIndustry": "Internal",
    "role": "SAP Fiori/SAPUI5 Developer",
    "projectDescription": "Development of an SAP Fiori application based on SAPUI5 for creating 'freitext' shopping carts, using SAP Web IDE and Hana Cloud Platform.",
    "projectLanguage": "English",
    "projectStatus": "Success",
    "projectStatusDescription": "Project completed."
  },
  {
    "id": "19",
    "projectStartDate": "01/2016",
    "projectEndDate": "04/2016",
    "projectTitle": "Contract Management System Enhancements",
    "location": "Austria",
    "projectStart": "January 2016",
    "projectEnd": "April 2016",
    "customerIndustry": "Oil and Gas",
    "role": "SAP SRM and ECC Developer",
    "projectDescription": "Enhancement of an existing contract management system, including implementation of additional Web Dynpro elements for data maintenance (partner roles), implementation of data distribution to ECC contracts in a multi-ERP environment, and creation of Dynpros for displaying additional data in the ECC system.",
    "projectLanguage": "English",
    "projectStatus": "Success",
    "projectStatusDescription": "Project completed."
  },
  {
    "id": "20",
    "projectStartDate": "11/2015",
    "projectEndDate": "12/2015",
    "projectTitle": "Fiori Application Configuration in SRM",
    "location": "Bavaria",
    "projectStart": "November 2015",
    "projectEnd": "December 2015",
    "customerIndustry": "IT Services",
    "role": "SAP Fiori Consultant",
    "projectDescription": "Configuration of a Fiori application in the SRM environment, including identification of necessary system components and prerequisites, configuration and commissioning of the application, and support for functional tests.",
    "projectLanguage": "English",
    "projectStatus": "Success",
    "projectStatusDescription": "Project completed."
  },
  {
    "id": "21",
    "projectStartDate": "08/2015",
    "projectEndDate": "11/2015",
    "projectTitle": "Multi-Level BRF Workflow Implementation",
    "location": "Bavaria",
    "projectStart": "August 2015",
    "projectEnd": "November 2015",
    "customerIndustry": "Media, Film, and Music",
    "role": "SAP SRM Developer",
    "projectDescription": "Implementation of a multi-level BRF workflow, including workflow customizing and creation of a process schema and implementation of workflow logic.",
    "projectLanguage": "English",
    "projectStatus": "Success",
    "projectStatusDescription": "Project completed."
  },
  {
    "id": "22",
    "projectStartDate": "04/2015",
    "projectEndDate": "08/2015",
    "projectTitle": "Internal Demo System Enhancements",
    "location": "Baden-Württemberg",
    "projectStart": "April 2015",
    "projectEnd": "August 2015",
    "customerIndustry": "Internal Project",
    "role": "SAP SRM Developer",
    "projectDescription": "Enhancements and implementations for internal demo systems, including extension of the internal workflow framework for process-oriented BRF workflows, extension of the internal Web Dynpro UI framework, and support and coordination for rollouts of internal solutions.",
    "projectLanguage": "English",
    "projectStatus": "Success",
    "projectStatusDescription": "Project completed."
  },
  {
    "id": "23",
    "projectStartDate": "03/2015",
    "projectEndDate": "04/2015",
    "projectTitle": "Fiori Application for Travel Request Approval",
    "location": "Berlin",
    "projectStart": "March 2015",
    "projectEnd": "April 2015",
    "customerIndustry": "Oil and Gas",
    "role": "SAP Fiori Consultant and Developer",
    "projectDescription": "Extension and configuration of a Fiori application for travel request approval, including identification of necessary system components and prerequisites, creation of functional and technical concepts for commissioning and extension, implementation of extensions for displaying additional customer fields, and support for functional and acceptance tests and production deployment.",
    "projectLanguage": "German",
    "projectStatus": "Success",
    "projectStatusDescription": "Project completed."
  }
]
            };

            var oModel = new JSONModel(oData);
            this.setModel(oModel);
        },

        /**
         * Sets language from URL parameter
         * @private
         */
        _setLanguageFromURL: function () {
            // Get URL parameters
            var oUriParams = new URLSearchParams(window.location.search);
            var sLanguage = oUriParams.get("lang");
            
            // Set language if provided and valid
            if (sLanguage && (sLanguage === "en" || sLanguage === "de")) {
                sap.ui.getCore().getConfiguration().setLanguage(sLanguage);
            }
        },

        /**
         * Sets up the resource model for internationalization
         * @private
         */
        _setResourceModel: function () {
            var oResourceModel = new ResourceModel({
                bundleName: "projectlist.i18n.i18n"
            });
            this.setModel(oResourceModel, "i18n");
        }
    });
});
