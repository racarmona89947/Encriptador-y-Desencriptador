function encrypt() {
  var message = document.getElementById('message').value;
  var encrypted = '';

  encrypted = message.replace(/e/g, 'enter');
  encrypted = encrypted.replace(/i/g, 'imes');
  encrypted = encrypted.replace(/a/g, 'ai');
  encrypted = encrypted.replace(/o/g, 'ober');
  encrypted = encrypted.replace(/u/g, 'ufat');

  document.getElementById('result').value = encrypted;
}

function decrypt() {
  var encrypted = document.getElementById('message').value;
  var decrypted = '';

  decrypted = encrypted.replace(/enter/g, 'e');
  decrypted = decrypted.replace(/imes/g, 'i');
  decrypted = decrypted.replace(/ai/g, 'a');
  decrypted = decrypted.replace(/ober/g, 'o');
  decrypted = decrypted.replace(/ufat/g, 'u');

  document.getElementById('result').value = decrypted;
}

function copyToClipboard(elementId) {
  var element = document.getElementById(elementId);
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.getElementById('result').textContent = '¡Copiado al portapapeles!';
}

function pasteText() {
  navigator.clipboard.readText().then(function (text) {
      document.getElementById('message').value = text;
  });
}