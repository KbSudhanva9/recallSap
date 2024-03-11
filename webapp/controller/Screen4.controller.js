sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment) {
        "use strict";

        return Controller.extend("recall1.controller.Screen4", {
            onInit: function () {

            },

            // onOpenFragment : function() {
            //     var oView = this.getView();
            //     if(!this.byId('helloDialog')){
            //         Fragment.load({
            //             name:
            //             // "home.user.projects.recall1.webapp.fragments.sampleFragment",
            //             "recall1.fragments.HelloDialog",
            //             Controller:this,
            //             id:oView.getId()
            //         }).then(function(oDialog){
            //             oDialog.open();
            //         })
            //     }else{
            //         this.byId('helloDialog').open();
            //     }
            //     // this.pDialog ??= this.loadFragment({
            //     //     name: "recall1.fragments.sampleFragment"
            //     // });
            
            //     // this.pDialog.then((oDialog) => oDialog.open());
            // },
            // onCloseFragment : function() {
            //     // this.byId('sampleFragment').close();
            //     // this.pDialog.then((oDialog) => oDialog.close());

            //     // if (this.byId('helloDialog')) {
            //     //     this.byId('helloDialog').close();
            //     // }

            //     var oFragment = this.byId('helloDialog');
            //         if (oFragment) {
            //             oFragment.close();
            //             oFragment.destroy(); // Destroy the fragment
            //         }
            //    },





            onOpenDialog() {
                // create dialog lazily

                var name = this.getView().byId('inp_nameID').getValue();
                var age = this.getView().byId('inp_ageID').getValue();
                


                this.pDialog ??= this.loadFragment({
                    name: "recall1.fragments.HelloDialog"
                });
                this.pDialog.then((oDialog) => { 
                    oDialog.open()
                    var content = oDialog.getContent();
                    
                    // content[1].setText('name is '+ name);
                    // content[2].setText('age is '+ age);

                    var oVBox = this.getView().byId("myVBox");
                    var namelable = this.getView().byId("nameData");
                    var ageLable = this.getView().byId("ageData");

                    // Set the text dynamically
                    // namelable.setText("Name: " + name);
                    // ageLable.setText("Age: " + age);

                    namelable.setValue(name);
                    ageLable.setValue(age);


                });
            },
            onCloseDialog() {
                // this.pDialog.then((oDialog) => oDialog.close());
                console.log("closeing dialog box");
                this.byId("helloDialog").close();
            },



            // onOpenDialog1() {
            //     // create dialog lazily
            //     this.pDialog ??= this.loadFragment({
            //         name: "recall1.fragments.sampleFragment"
            //     });
            //     this.pDialog.then((oDialog) => oDialog.open());
            // },
            // onCloseDialog1() {
            //     // this.pDialog.then((oDialog) => oDialog.close());
            //     // console.log("closeing dialog box");
            //     this.byId("dialogID").close();
            // }





        });
    });