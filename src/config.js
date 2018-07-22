const defaultConfig = {
    blockElementSeparator: '__',
    baseNameModifierSeparator: '--',
    modifierNameValueSeparator: '-'
}

const options = Object.assign({}, defaultConfig)

function modifyConfig(customConfig) {
    Object.assign(options, customConfig)
}

module.exports = {
    options,
    modifyConfig
}
