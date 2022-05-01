const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (param) {
    if (param === undefined) {
        param = true
    }
    this.param = param;
}

encrypt(mes, key) {
    if (mes == undefined || key == undefined) {
        throw Error('Incorrect arguments!');
    }
    let abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
        if (mes.length > key.length) {
            let i = 0;
            while (mes.length > key.length) {
                key = key.repeat(2);
                i++;
            }
        }

    let mesUP = mes.toUpperCase().split('');
    let keyUP = key.toUpperCase().split('');

    for(let i = 0; i < mesUP.length; i++) {
        if (abc.includes(mesUP[i])){
            mesUP.splice(i, 1, abc[((abc.indexOf(mesUP[i]) + abc.indexOf(keyUP[i])) % 26)])
        }
        if (!abc.includes(mesUP[i])) {
            keyUP.splice(i, 0, mesUP[i])
        }
    }
    if (this.param == true) {
        return mesUP.join('');
        
    }
    else if (this.param == false) { // (this.param == false || this.param != undefined)
        return mesUP.reverse().join('');
    }
    
}
decrypt(mes, key) {
    if (mes == undefined || key == undefined) {
        throw Error('Incorrect arguments!');
    }
    let abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
        if (mes.length > key.length) {
            let i = 0;
            while (mes.length > key.length) {
                key = key.repeat(2);
                i++;
            }
        }
    let mesUP = mes.toUpperCase().split('');
    let keyUP = key.toUpperCase().split('');
    for(let i = 0; i < mesUP.length; i++) {
        if (abc.includes(mesUP[i])){
            mesUP.splice(i, 1, abc[((abc.indexOf(mesUP[i]) - abc.indexOf(keyUP[i]) + 26) % 26)])
        }
        if (!abc.includes(mesUP[i])) {
            keyUP.splice(i, 0, mesUP[i])
        }
    }
    if (this.param == true) {
        return mesUP.join('');
        
    }
    else if (this.param == false) { // (this.param == false || this.param != undefined)
        return mesUP.reverse().join('');
    }
}
  // encrypt() {
  //   throw new NotImplementedError('Not implemented');
  //   // remove line with error and write your code here
  // }
  // decrypt() {
  //   throw new NotImplementedError('Not implemented');
  //   // remove line with error and write your code here
  // }
}

module.exports = {
  VigenereCipheringMachine
};
