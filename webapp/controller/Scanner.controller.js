sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ndc/BarcodeScanner"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageBox,MessageToast,JSONModel,BarcodeScanner) {
        "use strict";

        return Controller.extend("barcodescanner.barcodescanner.controller.Scanner", {
            onInit: function () {

            },
            onScan:function (oEvent) {
                var that = this;
                BarcodeScanner.scan(
                    function (result) {
                        if (!result.cancelled) {
                            that.getView().byId("materialNumber").setValue(result.text);
                            MessageBox.show("we got a bar code\n"+
                            "Result:"+ result.text + "\n" +
                            "Format:"+ result.format + "\n" );
                        }
                    },
                    function (error) {
                        alert("Scanning failed: " + error);
                    }
                );
            }
        });
    });
