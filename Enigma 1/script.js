function enviar() {
    const senha = "enigma";
    const envio = document.getElementById("input").value.toLowerCase();

    if (envio === senha) {
        document.getElementById("resposta").style.display = "block";
    } else {
        alert("Errou")
    }
}