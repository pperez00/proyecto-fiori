sap.ui.define([
    "./BaseController",
    "sap/m/MessageToast",
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseControllerController, MessageToast) {
        "use strict";

        return Controller.extend("com.sofftek.psp.proyectos.controller.Main", {
            onInit: function () {
                this.getUsers();

            },

            getUsers: function () {
                var oDataModel = this.getOwnerComponent().getModel();
                oDataModel.read("/USERSet", {
                    async: true,
                    success: function (oResponse) {
                        alert(JSON.stringify(oResponse?.results));
                    },
                    error: function (oError) {
                        MessageToast.show("Error al leer datos")
                    }
                });


            },



        });
    });
