import { options } from './config'

const Modifiers = (modifiers = {}) => ({
    add(newModifiers) {
        if (typeof newModifiers === 'string') {
            const modObj = {}
            modObj[newModifiers] = true
            newModifiers = modObj
        }
        return Modifiers({ ...modifiers, ...newModifiers })
    },

    format(baseName) {
        const classes = []

        for (const key in modifiers) {
            if (
                !modifiers.hasOwnProperty(key) ||
                (!modifiers[key] && typeof modifiers[key] !== 'number')
            ) {
                continue
            }
            classes.push(formatModifier(baseName, key, modifiers[key]))
        }

        return classes
    }
})

function formatModifier(baseName, name, value) {
    const modifierComponents = [
        baseName,
        options.baseNameModifierSeparator,
        name
    ]
    if (typeof value !== 'boolean') {
        modifierComponents.push(options.modifierNameValueSeparator, value)
    }
    return modifierComponents.join('')
}

export default Modifiers
