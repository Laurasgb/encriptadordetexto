function handleInput() {
    const inputText = document.getElementById('inputText').value;
    const logo = document.getElementById('logo');
    const outputSection = document.getElementById('outputSection');
    const outputText = document.getElementById('outputText');

    outputText.value = ''; // Limpiar el campo de resultado

    if (inputText.trim() !== '') {
        logo.classList.add('hidden');
        outputSection.classList.remove('hidden');
    } else {
        logo.classList.remove('hidden');
        outputSection.classList.add('hidden');
    }
}

function encryptText() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');

    // Validar que solo contenga letras minúsculas y espacios
    if (/^[a-z\s]*$/.test(inputText)) {
        let encryptedText = inputText.replace(/e/g, 'enter')
                                    .replace(/i/g, 'imes')
                                    .replace(/a/g, 'ai')
                                    .replace(/o/g, 'ober')
                                    .replace(/u/g, 'ufat');
        outputText.value = encryptedText;
    } else {
        outputText.value = 'Error: Solo se permiten letras minúsculas y espacios.';
    }
}

function decryptText() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');

    // Validar que solo contenga letras minúsculas y espacios
    if (/^[a-z\s]*$/.test(inputText)) {
        let decryptedText = inputText.replace(/enter/g, 'e')
                                    .replace(/imes/g, 'i')
                                    .replace(/ai/g, 'a')
                                    .replace(/ober/g, 'o')
                                    .replace(/ufat/g, 'u');
        outputText.value = decryptedText;
    } else {
        outputText.value = 'Error: Solo se permiten letras minúsculas y espacios.';
    }
}

function copyText() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}
