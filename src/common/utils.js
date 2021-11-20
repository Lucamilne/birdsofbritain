let utils = {}

utils.toKebabCase = function (str) {
    return str.toLowerCase().replaceAll(" ", "-");
}

utils.capitalise = function (str) {
    return str[0].toUpperCase() + str.substring(1).toLowerCase();
}

module.exports = utils;