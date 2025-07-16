sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function(Controller) {
  "use strict";
  return Controller.extend("goldenhandsdev.career.portfolio.controller.Detail", {
    onInit: function () {
      var oRouter = this.getOwnerComponent().getRouter();
      oRouter.getRoute("Detail").attachPatternMatched(this._onObjectMatched, this);
    },
    _onObjectMatched: function (oEvent) {
      var sId = oEvent.getParameter("arguments").id;
      var oModel = this.getView().getModel();
      if (!oModel) {
        oModel = new sap.ui.model.json.JSONModel();
        oModel.loadData("model/projects.json", null, false);
        this.getView().setModel(oModel);
      }
      var aProjects = oModel.getData();
      var oProject = aProjects.find(function(p) { return p.id === sId; });
      if (oProject) {
        var oDetailModel = new sap.ui.model.json.JSONModel(oProject);
        this.getView().setModel(oDetailModel);
      }
    },
    onNavBack: function () {
      window.history.go(-1);
    }
  });
});