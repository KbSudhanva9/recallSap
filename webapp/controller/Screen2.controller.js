sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("recall1.controller.Screen2", {
            onInit: function () {

            },

            popup: function (b) {
                console.log("hello");
                // // console.log(document.getElementById("up").checkVisibility);
                // console.log(sap.ui.getCore().byId("up").getVisible());

                // var tt = this.getView().byId(p)
                console.log(b);
                // console.log(typeof(b));
                // if(b!="close"){
                //     panel.setVisible(true);
                // }
                if(b=="b1"){
                    // panel.setVisible(false);

                    var panel = this.getView().byId("up");
                    panel.setVisible(true);

                    // if(panel.getVisible()){
                    //     this.getView().byId("popup").setText("close pop-up 1");
                    // }else{
                    //     this.getView().byId("popup").setText("open pop-up 1");
                    // }

                    var pdfUrl = "https://www.africau.edu/images/default/sample.pdf";

                    this.getView().byId("pdfs").setSource(pdfUrl);
                    var fileName = pdfUrl.substring(pdfUrl.lastIndexOf("/") + 1);
                    this.getView().byId("pdfs").setTitle(fileName);
                }else if(b=="b2"){
                    // panel.setVisible(false);

                    var panel = this.getView().byId("up");
                    panel.setVisible(true);

                    // if(panel.getVisible()){
                    //     this.getView().byId("popup1").setText("close pop-up 1");
                    // }else{
                    //     this.getView().byId("popup1").setText("open pop-up 1");
                    // }

                    // var pdfUrl = "https://www.clickdimensions.com/links/TestPDFfile.pdf";
                    var pdfUrl = "https://cdn2.thedogapi.com/images/Sy57xx9EX_1280.jpg";

                    this.getView().byId("pdfs").setSource(pdfUrl);
                    var fileName = pdfUrl.substring(pdfUrl.lastIndexOf("/") + 1);
                    this.getView().byId("pdfs").setTitle(fileName);
                }else if(b=="close"){
                    var panel = this.getView().byId("up");
                    panel.setVisible(false);
                    // this.getView().byId("popup").setText("open pop-up 1");
                    // this.getView().byId("popup1").setText("open pop-up 2");
                }

                
                // var panel = this.getView().byId("up");
                // panel.setVisible(true);
                // if(panel.getVisible()){
                //     this.getView().byId("popup").setText("close pop-up 1");
                // }else{
                //     this.getView().byId("popup").setText("open pop-up 1");
                // }

                // var pdfUrl = "https://www.africau.edu/images/default/sample.pdf";

                // this.getView().byId("pdfs").setSource(pdfUrl);

                // // Extract the file name from the URL
                // var fileName = pdfUrl.substring(pdfUrl.lastIndexOf("/") + 1);

                // this.getView().byId("pdfs").setTitle(fileName);
                // // Display the file name in the console
                // console.log("PDF File Name:", fileName);



                // console.log(panel.getVisible())
                // panel.rerender();

                // var k = document.

            }

        });
    });
