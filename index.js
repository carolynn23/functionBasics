function renderMessage(isVisible=bool){

if ( isVisible == true){
return("Visible Content")   
}else{
   return ("Hidden content")}
}
console.log(renderMessage(true));
console.log(renderMessage(false));

