let common = {}

common.toKebabCase = function(str) {
    return str.toLowerCase().replaceAll(" ", "-");
}

module.exports = common;