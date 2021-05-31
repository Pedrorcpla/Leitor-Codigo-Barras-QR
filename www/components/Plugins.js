$(document).on('click','#codigo' ,function(){
  cordova.plugins.barcodeScanner.scan(
      function (result) {
        if(result.text != ""){
          $('#info').html("Resultado: " + result.text + "<br>" +
                "Formato: " + result.format + "<br>");
        }
        else{
          $('#info').html("Cancelado!");
        }
      },
      function (error) {
          $('#info').html("Cancelado!");
      },
      {
          preferFrontCamera : false, 
          showFlipCameraButton : true, 
          showTorchButton : true, 
          torchOn: false,
          saveHistory: true, 
          prompt : "Mire a câmera no código desejado",
          resultDisplayDuration: 500,
          formats : "QR_CODE,PDF_417,CODE_39,DATA_MATRIX,UPC_A,UPC_E,EAN_8,EAN_13,CODE_93,CODE_128,CODABAR,ITF,RSS14,AZTEC", 
          orientation : "portrait|landscape", 
          disableAnimations : true, 
          disableSuccessBeep: false 
      }
    );
});
