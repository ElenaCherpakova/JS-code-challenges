function vigenereDecrypt(ciphertext, key) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let decryptedText = '';

  for (let i = 0; i < ciphertext.length; i++) {
    const charIndex = alphabet.indexOf(ciphertext[i]);
    console.log(charIndex)
    const keyIndex = alphabet.indexOf(key[i % key.length]);
    console.log(keyIndex)
    if (charIndex === -1) {
      decryptedText += ciphertext[i];
    } else {
      decryptedText += alphabet[(charIndex - keyIndex + 26) % 26];
    }
  }

  return decryptedText;
}

const cipherText = 'SIMFITKXLLVOB';
const key = 'DEVDEGREE';
console.log(vigenereDecrypt(cipherText, key));
