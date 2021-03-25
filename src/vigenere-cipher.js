class VigenereCipheringMachine {
  direct
  alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G',
              'H', 'I', 'J', 'K', 'L', 'M', 'N',
              'O', 'P', 'Q', 'R', 'S', 'T',
              'U', 'V', 'W', 'X', 'Y', 'Z']

  constructor(direct) {
    if (arguments.length === 0) {
      this.direct = true;
    } else {
      this.direct = direct;
    }
  }

  encrypt(message, key) {
    const msgArr = message.toUpperCase().split('');
    const keyArr = key.toUpperCase().split('');

    let encrypted = [];
    for (let i = 0, j = 0; i < msgArr.length; i += 1) {
      if (this.alphabet.includes(msgArr[i])) {
        encrypted.push(this.alphabet[(
                      this.alphabet.indexOf(msgArr[i]) +
                      this.alphabet.indexOf(keyArr[j])) %
                      this.alphabet.length
                      ]);
        j = (j + 1) % keyArr.length;
      } else {
        encrypted.push(msgArr[i]);
      }
    }

    if (this.direct) {
      return encrypted.join('');
    } else {
      return encrypted.reverse().join('');
    }
  }

  decrypt(message, key) {
    const msgArr = message.toUpperCase().split('');
    const keyArr = key.toUpperCase().split('');

    let decrypted = [];
    for (let i = 0, j = 0; i < msgArr.length; i += 1) {
      if (this.alphabet.includes(msgArr[i])) {
        decrypted.push(this.alphabet[(
                      this.alphabet.length +
                      this.alphabet.indexOf(msgArr[i]) -
                      this.alphabet.indexOf(keyArr[j])) %
                      this.alphabet.length
                      ]);
        j = (j + 1) % keyArr.length;
      } else {
        decrypted.push(msgArr[i]);
      }
    }

    if (this.direct) {
      return decrypted.join('');
    } else {
      return decrypted.reverse().join('');
    }
  }
}

module.exports = VigenereCipheringMachine;
