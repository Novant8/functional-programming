function Spy(target, method) {
    this.count = 0;

    target[method] = () => {
        this.count++;
    };
}
  
module.exports = Spy;