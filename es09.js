var slice = Array.prototype.slice;
    
function logger(namespace) {
    return (...qualcosa) => {
        console.log.apply(null, [namespace, ...qualcosa]);
    }
}

module.exports = logger;