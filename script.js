const primaPagina = document.getElementById("pagina1")
const inputUsername = document.getElementById("username")
const btnAccedi = document.getElementById("accedi")
const elementInputUsername = document.getElementsByClassName("input-username")
const secondaPagina = document.getElementById("pagina2")
const btnEsci = document.getElementById("esci")
const divChat = document.getElementById("chat")
const inputMessagio = document.getElementById("messagio")

function onClickAddedi() {
    primaPagina.style.visibility = "hidden"
    secondaPagina.style.visibility = "visible"
    let elementUsername = inputUsername.value
    localStorage.setItem('username',elementUsername);
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