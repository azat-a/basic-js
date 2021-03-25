const chainMaker = {
  chain : [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (arguments.length === 0) {
      value = "";
    }

    this.chain.push(String(value));
    return this;
  },

  removeLink(position) {
    if (typeof position !== "number") {
      this.chain = [];
      throw new TypeError;
    }
    if (position % 1 !== 0 || position < 0 || position > this.chain.length) {
      this.chain = [];
      throw new RangeError;
    }

    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const string = "( " + this.chain.join(" )~~( ") + " )";
    this.chain = [];
    return string;
  }
};

module.exports = chainMaker;
