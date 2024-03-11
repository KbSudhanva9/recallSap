sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, MessageToast) {
        "use strict";

        return Controller.extend("recall1.controller.Screen3", {
            onInit: function () {

            //     this._oCurrentP13nData = null;
			// this.getView().setModel(new JSONModel({
			// 	dialogMode: true,
			// 	listLayout: true
			// }));

			// this._bIsOpen = false;


                var oModel = new JSONModel();
                var oData = [
                    {
                      "id": "Sy57xx9EX",
                      "url": "https://cdn2.thedogapi.com/images/Sy57xx9EX_1280.jpg",
                      "name": "image jpg"
                    },
                    {
                      "id": "HJAFgxcNQ",
                      "url": "https://cdn2.thedogapi.com/images/HJAFgxcNQ_1280.jpg",
                      "name": "image jpg"
                    },
                    {
                      "id": "26pHT3Qk7",
                      "url": "https://www.africau.edu/images/default/sample.pdf",
                      "name": "sample pdf"
                    },
                    {
                      "id": "NXPv27lGs",
                      "url": "https://cdn2.thedogapi.com/images/NXPv27lGs.jpg",
                      "name": "image jpg"
                    },
                    {
                      "id": "XXNYMzrDO",
                      "url": "https://www.clickdimensions.com/links/TestPDFfile.pdf",
                      "name": "test pdf"
                    },
                    {
                      "id": "ena5znPUB",
                      "url": "https://www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif",
                      "name": "image gif"
                    },
                    {
                      "id": "zGnoHL8B8",
                      "url": "",
                      "name": "no pdf"
                    }
                  ];
                oModel.setData({ items: oData });
                this.getView().setModel(oModel);
          
                var oTable = this.byId("table");
                oTable.bindItems({
                  path: "/items",
                  template: oTable.getItems()[0].clone(), // Clone the template item
                });
            },

              onLinkPress: function (oEvent) {
                var sUrl = oEvent.getSource().getText();
                // Handle the link press, e.g., open a new window or navigate to the URL
                window.open(sUrl, "_blank");
              },

            //   onLinkPress2: function (oEvent) {
            //     var sText = oEvent.getSource().getText();
            //     // Handle the press event, e.g., display a message with the concatenated text
            //     sap.m.MessageToast.show(sText);
            //   },

            // onButtonPress: function (oEvent) {
            //     var oRowContext = oEvent.getSource().getBindingContext();
            //     var sUrl = oRowContext.getProperty("url");
                
            //     if (sUrl) {
            //         // Open the URL or perform other actions
            //         window.open(sUrl, "_blank");
            //     } else {
            //         MessageToast.show("No URL available for this row.");
            //     }
            // },

            onButtonPress: function (oEvent) {
                var oButton = oEvent.getSource();
                var oListItem = oButton.getParent();
                var oBindingContext = oListItem.getBindingContext();
                var oRowData = oBindingContext.getProperty();
    
                // Log the row data to the console
                console.log("Row Data:", oRowData);
                console.log("Row Data url:", oRowData.url);

                this.getView().byId("pdfs").setSource(oRowData.url);

                var panel = this.getView().byId("up");
                    panel.setVisible(true);
                
            },

            popupclose : function(){
                var panel = this.getView().byId("up");
                    panel.setVisible(false);
            },

            open : function(){
                console.log("clicked");
            },

            // _initialData: {
            //     columns: [
            //         {visible: true, name: "key1", label: "City"},
            //         {visible: false, name: "key2", label: "Country"},
            //         {visible: false, name: "key3", label: "Region"}
            //     ],
            //     sort: [
            //         {sorted: true, name: "key1", label: "City", descending: true},
            //         {sorted: false, name: "key2", label: "Country", descending: false},
            //         {sorted: false, name: "key3", label: "Region", descending: false}
            //     ],
            //     group: [
            //         {grouped: true, name: "key1", label: "City"},
            //         {grouped: false, name: "key2", label: "Country"},
            //         {grouped: false, name: "key3", label: "Region"}
            //     ]
            // },
    
            // _setInitialData: function() {
            //     var oView = this.getView();
    
            //     var oSelectionPanel = oView.byId("columnsPanel");
            //     var oSortPanel = oView.byId("sortPanel");
            //     var oGroupPanel = oView.byId("groupPanel");
    
            //     oSelectionPanel.setP13nData(this._initialData.columns);
            //     oSortPanel.setP13nData(this._initialData.sort);
            //     oGroupPanel.setP13nData(this._initialData.group);
            // },
    
            // onContainerOpen: function(oEvt) {
            //     var oView = this.getView();
            //     var oPopup = oView.byId("p13nPopup");
            //     if (!this._bIsOpen) {
            //         this._setInitialData();
            //         this._bIsOpen = true;
            //     }
    
            //     oPopup.open(oEvt.getSource());
            // },
    
            // onClose: function(oEvt) {
            //     var sReason = oEvt.getParameter("reason");
            //     MessageToast.show("Dialog close reason: " + sReason);
            // },
    
            // reset: function(oEvt) {
            //     this._setInitialData();
            //     this.parseP13nState();
            // },
    
            // parseP13nState: function(oEvt) {
    
            //     if (oEvt) {
            //         MessageToast.show("P13n panel change reason:" + oEvt.getParameter("reason"));
            //     }
    
            //     var oView = this.getView();
            //     var oEditor = oView.byId("p13nEditor");
    
            //     var oP13nState = {
            //         columns:  oView.byId("columnsPanel").getP13nData(),
            //         sort: oView.byId("sortPanel").getP13nData(),
            //         group: oView.byId("groupPanel").getP13nData()
            //     };
    
            //     oEditor.setValue(JSON.stringify(oP13nState, null, '  '));
            // }

           

        });
    });
