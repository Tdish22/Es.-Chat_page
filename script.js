const primaPagina = document.getElementById("pagina1")
const inputUsername = document.getElementById("username")
const btnAccedi = document.getElementById("accedi")
const elementInputUsername = document.getElementsByClassName("input-username")
const secondaPagina = document.getElementById("pagina2")
const btnEsci = document.getElementById("esci")
const divChat = document.getElementById("chat")
const inputMessaggio = document.getElementById("messaggio")
const btnInvia = document.getElementById("invia")



function onClickAddedi() {
    primaPagina.style.visibility = "hidden"
    secondaPagina.style.visibility = "visible"
    let elementUsername = inputUsername.value
    localStorage.setItem('save_username',username);
}
btnAccedi.addEventListener('click',onClickAddedi)

function abilityBtnAccedi() {
    if ( inputUsername.value!="")
    btnAccedi.disabled = false
}

for(let i=0; i<elementInputUsername.length; i++)
elementInputUsername[i].addEventListener("keyup", abilityBtnAccedi);

function onClickEsci() {
    primaPagina.style.visibility = "visible"
    secondaPagina.style.visibility = "hidden"
    btnAccedi.disabled=true;
    inputUsername.value= "";
}
btnEsci.addEventListener('click',onClickEsci) 

var messaggi = []
function inviaMessaggio() {
    const username = localStorage.getItem('save_username');
    if (!username) {
        alert ('verifica Username'); return;
    }


    const nuovoMessaggio = inputMessaggio.value ;
    const invioTime = new Date();
    const sentTime = invioTime.toLocaleTimeString();
    const messaggioInviato = `${invioTime} - ${username}: ${nuovoMessaggio}`;
    messaggi.push(messaggioInviato);

    divChat.innerHTML = messaggi.join('<br>');
    inputMessaggio.value=""; 

}
btnInvia.addEventListener("click",inviaMessaggio)