// *************** DOCUMENTOS.HTML ***************

// THIS CODE CONTROLS THE BEHAVIOR OF SEARCH DIALOG

function load() {

let empt = document.form.folio.value;
if (empt === "")
{
    return;
}
if (empt.length != 8)
{
    return;
}
if (empt != document.getElementById("invoice_").innerHTML)
{
    return;
}

document.getElementById("loader").style.display = "flex";
setTimeout(function(){
document.getElementById("loader").style.display = "none"; }, 200);

}


  