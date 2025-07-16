sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function(Controller) {
  "use strict";
  return Controller.extend("goldenhandsdev.career.portfolio.controller.Master", {
    onInit: function () {
      var oModel = new sap.ui.model.json.JSONModel();
      oModel.loadData("model/projects.json");
      this.getView().setModel(oModel);
    },
    onSelectionChange: function (oEvent) {
      var oItem = oEvent.getParameter("listItem");
      if (!oItem) return;
      var oRouter = this.getOwnerComponent().getRouter();
      var oContext = oItem.getBindingContext();
      var sId = oContext.getProperty("id");
      oRouter.navTo("Detail", { id: sId });
    },
    onItemPress: function (oEvent) {
      var oItem = oEvent.getSource();
      var oRouter = this.getOwnerComponent().getRouter();
      var oContext = oItem.getBindingContext();
      var sId = oContext.getProperty("id");
      oRouter.navTo("Detail", { id: sId });
    }
  });
});