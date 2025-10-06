sap.ui.define([
    "sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
    "use strict";

    // Initialize the application
    new ComponentContainer({
        name: "projectlist",
        settings: {
            id: "projectlist"
        },
        async: true
    }).placeAt("content");
});
