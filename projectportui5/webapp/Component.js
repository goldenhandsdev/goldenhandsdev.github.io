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
                        id: "1",
                        projectStartDate: "01/2023",
                        projectEndDate: "12/2023",
                        projectTitle: "ERP Implementation",
                        location: "Berlin, Germany",
                        projectStart: "January 2023",
                        projectEnd: "December 2023",
                        customerIndustry: "Manufacturing",
                        role: "Lead Developer",
                        projectDescription: "Developed a cloud-based ERP system for a manufacturing client.",
                        projectLanguage: "Java, SAPUI5"
                    },
                    {
                        id: "2",
                        projectStartDate: "06/2022",
                        projectEndDate: "03/2023",
                        projectTitle: "CRM Upgrade",
                        location: "London, UK",
                        projectStart: "June 2022",
                        projectEnd: "March 2023",
                        customerIndustry: "Retail",
                        role: "UI Developer",
                        projectDescription: "Enhanced CRM system with new UI features.",
                        projectLanguage: "JavaScript, SAPUI5"
                    },
                    {
                        id: "3",
                        projectStartDate: "09/2021",
                        projectEndDate: "06/2022",
                        projectTitle: "Inventory Management",
                        location: "New York, USA",
                        projectStart: "September 2021",
                        projectEnd: "June 2022",
                        customerIndustry: "Logistics",
                        role: "Full-Stack Developer",
                        projectDescription: "Built a responsive inventory tracking application.",
                        projectLanguage: "ABAP, SAPUI5"
                    }
                ]
            };

            var oModel = new JSONModel(oData);
            this.setModel(oModel);
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
