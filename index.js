module.exports = function booleanChecker(val, truthy_label = 'True', falsy_label = 'False') {
    if (!['boolean','undefined'].includes(typeof val)) throw new TypeError('wants a boolean')
    return val === true ? truthy_label : val === false ? falsy_label : '-'
}