$(function() {
  $("#userSignInput").on("keyup", function(e) {
    var inputLength = $(this).val().length;
    $("#tiles").text(inputLength);
    updatePrice(inputLength);
  });

  $("#userFontInput").on("click", function(e) {
    //selected de-selected..
    var inputFont = $(this).is(":checked");

    updatePrice($("#userSignInput").val().length, inputFont);
  });

  $("#userColorInput").on("click", function(e) {
    //selected de-selected..
    var inputColor = $(this).is(":checked");

    updatePrice(
      $("#userSignInput").val().length,
      $("#userFontInput"),
      inputColor
    );
  });
  
  $("#confirmOrder").on("click", function(e) {
    event.preventDefault(); 
    
    var previewMsg =  $("#userSignInput").val();
    
    previewMsg += '<a href="#" id=canclePreview">x</a>';
    $('#previewScreen').html(previewMsg);
    $('#previewScreen').animate({'right': '0px'}, 250);
   
   
  });
});

function updatePrice(signLength, fontUpgrade, colorUpgrade) {
  var costPerTile = 5;
  var costForColor = 0;

  if (fontUpgrade) {
    costPerTile = 6;
  } else {
    costPerTile = 5;
  }

  if (colorUpgrade) {
    costForColor = 5;
  } else {
    costForColor = 0;
  }

  var subTotal = signLength * costPerTile;
  var shipping = 7;

  if (signLength != 0) {
    shipping = 7;
  } else {
    shipping = 0;
  }

  var grandTotal = subTotal + shipping + costForColor;
  //var elSign = document.getElementById('userSign');
  //varelSign.textContent = sign;

  $("#subTotal").text("$" + subTotal);
  $("#shipping").text("$" + shipping);
  $("#grandTotal").text("$" + grandTotal);

  return grandTotal;
}