sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/ui/core/date/UI5Date",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment, UI5Date, JSONModel) {
        "use strict";

        return Controller.extend("recall1.controller.Screen5", {

            // _data : {
            //     "date" : UI5Date.getInstance()
            // },

            onInit: function () {

                // var currentDate = 
                // this.getView().byId("inpCD").setDateValue(new Date());
                
                // this.byId("inpCD").setDateValue(new Date());
                // var oModel = new JSONModel(this._data);
			    // this.getView().setModel(oModel);
                // var oModel = new sap.ui.model.odata.v2.ODataModel("/Categories");

                // // Set the model to the view
                // this.getView().setModel(oModel);

            },

            onGetData(oEvent){
                // console.log(this.getView.byId("categoryData"));

                var oTable = this.byId("categoryData");

                console.log(this.getView().byId("categoryData"));
                // console.log(oEvent.getSource().getBindingContext());
                console.log(this.getView().byId("categoryData").getBindingContext());

                // console.log(oTable.oModels);
                // console.log(oTable.oPropagatedProperties);
                // console.log(oTable._aClonedHeaders)

                
                

            },

            onOpenDialog() {
                // var name = this.getView().byId('inp_nameID').getValue();
                // var age = this.getView().byId('inp_ageID').getValue();
                // this.pDialog ??= this.loadFragment(null);
                console.log("open create inv page");

                if (this.pDialog) {
                    // this.pDialog.destroy();
                    // this.pDialog = undefined;
                    // resetDialog();
                    // this.pDialog.clear();
                    // this.pDialog.close();
                    // this.resetDialogData();
                    // this.pDialog ??= this.loadFragment({name: "recall1.fragments.CreateProposal"})
                    this.pDialog.then((oDialog) => {
                        oDialog.close();
                        oDialog.destroy();
                    });
                    // console.log(this.loadFragment);
                    
                }
                // console.log(this.pDialog);
                // console.log(typeof this.pDialog);

                // if (this.pDialog) {
                //     if (typeof this.pDialog.close === "function") {
                //         this.pDialog.close();
                //     } else {
                //         console.warn("Dialog does not have a close method");
                //     }
                // }

                this.pDialog = this.loadFragment({
                    name: 
                    // "recall1.fragments.CreateProposal"
                    "recall1.fragments.HelloDialog"

                    // /home/user/projects/recall1/webapp/fragments/CreateProposal.fragment.xml
                    
                    // "recall1.fragments.SubmitInv"


                        //    webapp/fragments/SubmitInv.fragment.xml
                        //    webapp/fragments/SubmitInv.fragment.xml

                },
                // console.log(this.byId("inpCD")
                );

                this.pDialog.then((oDialoggg) => {
                    // if (oDialoggg) {
                        oDialoggg.open();
                        // this.byId("inpCD").setDateValue(new Date());

                    //     console.log(this.pDialog);
                    //     console.log(typeof this.pDialog);

                    // } else {
                    //     console.error("Dialog not initialized correctly for onOpenDialog");
                    // }
                 });



                this.pDialog.then((oDialog) => { 
                    oDialog.open()
                    // this.byId("inpCD").setDateValue(new Date());
                    // var content = oDialog.getContent();
                    // content[1].setText('name is '+ name);
                    // content[2].setText('age is '+ age);

                    // var oVBox = this.getView().byId("myVBox");
                    var namelable = this.getView().byId("inp_nameID").getValue();
                    var ageLable = this.getView().byId("inp_ageID").getValue();
                    console.log("-------------------------------");
                    console.log(namelable);
                    console.log(ageLable);
                    console.log("-------------------------------");
                    

                    // Set the text dynamically
                    // namelable.setText("Name: " + name);
                    // ageLable.setText("Age: " + age);

                    // namelable.setValue(name);
                    // ageLable.setValue(age);
                    this.getView().byId("nameData").setValue(namelable);
                    this.getView().byId("ageData").setValue(ageLable);
                    
                });

            },
            onCloseDialog() {
                // this.pDialog.then((oDialog) => oDialog.close());
                console.log("closeing create proposal dialog box");
                this.byId("helloDialog").close();
                // this.byId("createProposal").close();
                // this.pDialog.destroy();
            },






            onOpenDialogBBB() {
                console.log("open submit page");
                // this.pDialog ??= this.loadFragment(null);

                if (this.pDialog) {
                    // this.pDialog.destroy();
                    // this.pDialog.clear();
                    // this.pDialog = undefined;
                    // resetDialog();
                    // this.pDialog.close();
                    // this.resetDialogData();
                    // this.pDialog ??= this.loadFragment({name: "recall1.fragments.SubmitInv"})
                    this.pDialog.then((oDialog) => {
                        oDialog.close();
                        oDialog.destroy();
                    });
                    // console.log(this.loadFragment);
                }

                // console.log(this.pDialog);
                // console.log(typeof this.pDialog);
                // if (this.pDialog) {
                //     if (typeof this.pDialog.close === "function") {
                //         this.pDialog.close();
                //     } else {
                //         console.warn("Dialog does not have a close method");
                //     }
                // }

                // if (this.pDialog) {
                //     this.pDialog.destroy();
                // }

                // this.pDialog = null;
                this.pDialog = this.loadFragment({
                    name: 
                    "recall1.fragments.SubmitInv"
                },);
                // this.pDialog.then((oDialog) => { 
                //     oDialog.open()
                //     // this.byId("inpCD").setDateValue(new Date());
                // });

                this.pDialog.then((oDialog) => {
                    // if (oDialog) {
                        oDialog.open();

                    //     console.log(this.pDialog);
                    //     console.log(typeof this.pDialog);

                    // } else {
                    //     console.error("Dialog not initialized correctly for onOpenDialog");
                    // }
                 });



            },

            onCloseDialogBBB() {
                // this.pDialog.then((oDialog) => oDialog.close());
                console.log("closeing submitInv dialog box");
                this.byId("submitInv").close();
                // this.pDialog.destroy();
            },

            // resetDialog : function(){
            //     this.pDialog.destroy();
            // },


        });
    });