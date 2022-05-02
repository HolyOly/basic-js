const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
    getLength() { //возвращает текущую длину цепи в виде числа;
        return this.chain.length;
        //return this.chain.length
    },
    addLink(value) { //добавляет звено, содержащее строковое представление value к цепочке;
        
        if (value === null) {
            value = `null`
        }
        else if (value === undefined) {
            value = ``;
        }
        else if (value === Infinity) {
          value = `Infinity`;
        }
        // else if (typeof value == 'boolean' || typeof value == 'object' || typeof value == 'number' || typeof value == 'symbol') {
        //     value.toString();
        // }
        value.toString();
        this.chain.push(`~( ${value} )~`)
        return this
        
    },
    removeLink(position) {//удаляет звено цепи, находящееся в заданном положении;
        if (!Number.isInteger(position) || position <= 0 || typeof position != "number" || position > this.chain.length) {
            this.chain = [];
            throw new Error("You can't remove incorrect link!");
        }
        else {
            this.chain.splice(position - 1, 1);
            //return this;
            return this
        }
       
        
    },
    reverseChain() {//разворачивает цепь задом наперед;
        this.chain.reverse();
        return this;
    },
    finishChain() {//завершает цепь и возвращает ее.;
        this.str = this.chain.join('');
        // if (this.str[0] === '~') {
        //     this.str.substring(1);
        //     return this.str.substring(0, this.str.length - 1);
        // }
        return `${this.str.slice(1, -1).toString()}`;
    }
};

module.exports = {
  chainMaker
};
