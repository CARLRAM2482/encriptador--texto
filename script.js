// script.js


function encriptarTexto(texto) {
    let textoEncriptado = texto.replace(/e/g, "enter")
                                .replace(/i/g, "imes")
                                .replace(/a/g, "ai")
                                .replace(/o/g, "ober")
                                .replace(/u/g, "ufat");
    return textoEncriptado;
}


function desencriptarTexto(texto) {
    let textoDesencriptado = texto.replace(/enter/g, "e")
                                  .replace(/imes/g, "i")
                                  .replace(/ai/g, "a")
                                  .replace(/ober/g, "o")
                                  .replace(/ufat/g, "u");
    return textoDesencriptado;
}


function copiarTexto() {
    const mensaje = document.querySelector(".mensaje");
    mensaje.select();
    document.execCommand("copy");
}


function ocultarImagenDeFondo() {
    const mensaje = document.querySelector(".mensaje");
    mensaje.style.backgroundImage = "none";
}


const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const btnCopiar = document.querySelector(".btn-copiar");
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


btnEncriptar.addEventListener("click", () => {
    const textoEncriptado = encriptarTexto(textArea.value);
    mensaje.value = textoEncriptado;
    ocultarImagenDeFondo();
});

btnDesencriptar.addEventListener("click", () => {
    const textoDesencriptado = desencriptarTexto(textArea.value);
    mensaje.value = textoDesencriptado;
    ocultarImagenDeFondo();
});

btnCopiar.addEventListener("click", copiarTexto);
