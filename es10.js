module.exports = function(namespace) {
    return function() {
        console.log(...arguments);
    }.bind(null, namespace);
}