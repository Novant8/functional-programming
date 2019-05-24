function duckCount() {
    return Array.from(arguments).reduce((accumulator, element) => {
        return 'quack' in element ? ++accumulator : accumulator;
    }, 0);
}
  
module.exports = duckCount