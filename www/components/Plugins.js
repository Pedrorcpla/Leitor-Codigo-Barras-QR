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
          formats : "QR_CODE,CODE_39", 
          orientation : "portrait|landscape", 
          disableAnimations : true, 
          disableSuccessBeep: false 
      }
    );
});
