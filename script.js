function logar(){
    let logar = document.querySelector("#nome").value
    let senha = document.querySelector("#senha").value

if ( logar === "admin" && senha === "123")  {
    window.location.href = "principal.html"
} else {
    alert ("perdeu mané")
}



}