let common = {}

common.toKebabCase = function (str) {
    return str.toLowerCase().replaceAll(" ", "-");
}

common.capitalise = function (str) {
    return str[0].toUpperCase() + str.substring(1).toLowerCase();
}

module.exports = common;