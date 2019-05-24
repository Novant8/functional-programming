function repeat(operation, num) {
    operation(num);
    return num > 0 ? repeat(operation, --num) : 0;
}
  
module.exports = repeat