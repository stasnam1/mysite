var counter=0;


function displayValue(event){
  counter = counter +1;
  var textValue="";
  for(i = 0; i < counter; i++){
    textValue = textValue + '|';
  }
  document.getElementById("clicounter").innerHTML = textValue;  
  window.alert(document.getElementById('comment').value + " - exec times: " + counter);

return false;
}
