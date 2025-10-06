sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/m/MessageToast"
], function (Controller, History, MessageToast) {
    "use strict";

    return Controller.extend("projectlist.controller.Detail", {
        
        /**
         * Called when the controller is instantiated.
         * @public
         */
        onInit: function () {
            this.getRouter().getRoute("detail").attachPatternMatched(this._onDetailMatched, this);
        },

        /**
         * Convenience method for accessing the router.
         * @public
         * @returns {sap.ui.core.routing.Router} the router for this component
         */
        getRouter: function () {
            return this.getOwnerComponent().getRouter();
        },

        /**
         * Event handler for the detail route matched event
         * @param {sap.ui.base.Event} oEvent pattern match event
         * @private
         */
        _onDetailMatched: function (oEvent) {
            var sProjectId = oEvent.getParameter("arguments").projectId;
            var oModel = this.getView().getModel();
            var aProjects = oModel.getProperty("/projects");
            
            // Find the project with the matching ID
            var oProject = aProjects.find(function(project) {
                return project.id === sProjectId;
            });
            
            if (oProject) {
                // Create a binding context for the selected project
                var sPath = "/projects/" + aProjects.indexOf(oProject);
                this.getView().bindElement({
                    path: sPath
                });
            } else {
                // Project not found, navigate back to master
                MessageToast.show("Project not found");
                this.onNavBack();
            }
        },

        /**
         * Event handler for the back button press
         * @public
         */
        onNavBack: function () {
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();
            
            if (sPreviousHash !== undefined) {
                // Use browser history to go back
                window.history.go(-1);
            } else {
                // Navigate to master view
                this.getRouter().navTo("master", {}, true);
            }
        }
    });
});
