var mail = document.getElementById("email")
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
var err = document.getElementById("errmsg")


function alerts() {
  mail.classList.remove("border-red-500")
  err.classList.add("hidden")
  if (mail.value.match(mailformat)){
    alert(`Got it, keep and eye on your mailbox!`)
    mail.value = '' // LIMPAR DPS DE EXECUTAR 
    
  } else {
  err.classList.remove("hidden")
  mail.classList.add("border-red-500")
  }
}