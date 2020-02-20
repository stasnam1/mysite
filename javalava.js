var counter=0;


function displayValue(event){
  counter = counter +1;  
  window.alert(document.getElementById('comment').value + " - exec times: " + counter);

return false;
}
