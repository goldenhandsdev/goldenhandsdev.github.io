sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/m/MessageToast"
], function (Controller, History, MessageToast) {
    "use strict";

    return Controller.extend("projectlist.controller.Master", {
        
        /**
         * Called when the controller is instantiated.
         * @public
         */
        onInit: function () {
            this.getRouter().getRoute("master").attachPatternMatched(this._onMasterMatched, this);
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
         * Event handler for the master route matched event
         * @param {sap.ui.base.Event} oEvent pattern match event
         * @private
         */
        _onMasterMatched: function (oEvent) {
            // Clear any selection when returning to master
            var oList = this.byId("projectList");
            oList.removeSelections(true);
        },

        /**
         * Event handler for the detail route matched event
         * @param {sap.ui.base.Event} oEvent pattern match event
         * @private
         */
        _onDetailMatched: function (oEvent) {
            var sProjectId = oEvent.getParameter("arguments").projectId;
            var oList = this.byId("projectList");
            var aItems = oList.getItems();
            
            // Find and select the corresponding item in the master list
            for (var i = 0; i < aItems.length; i++) {
                var oBindingContext = aItems[i].getBindingContext();
                if (oBindingContext && oBindingContext.getProperty("id") === sProjectId) {
                    oList.setSelectedItem(aItems[i]);
                    break;
                }
            }
        },

        /**
         * Event handler for list item press
         * @param {sap.ui.base.Event} oEvent the list item press event
         * @public
         */
        onItemPress: function (oEvent) {
            var oBindingContext = oEvent.getSource().getBindingContext();
            var sProjectId = oBindingContext.getProperty("id");
            
            this.getRouter().navTo("detail", {
                projectId: sProjectId
            });
        },

        /**
         * Event handler for list selection change
         * @param {sap.ui.base.Event} oEvent the selection change event
         * @public
         */
        onSelectionChange: function (oEvent) {
            var oSelectedItem = oEvent.getParameter("listItem");
            if (oSelectedItem) {
                var oBindingContext = oSelectedItem.getBindingContext();
                var sProjectId = oBindingContext.getProperty("id");
                
                this.getRouter().navTo("detail", {
                    projectId: sProjectId
                });
            }
        }
    });
});
