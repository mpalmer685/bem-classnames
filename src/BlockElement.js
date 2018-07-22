const Mixes = require('./Mixes')
const Modifiers = require('./Modifiers')
const { options } = require('./config')

const BlockElement = (
    blockName,
    elementName,
    modifiers = Modifiers(),
    mixes = Mixes()
) => ({
    name() {
        const elementClassName = formatElementClass(blockName, elementName)
        const classes = [elementClassName]
        Array.prototype.push.apply(classes, modifiers.format(elementClassName))
        Array.prototype.push.apply(classes, mixes.format())

        return classes.join(' ')
    },

    mod: mod => BlockElement(blockName, elementName, modifiers.add(mod), mixes),

    mix: (...addMixes) =>
        BlockElement(blockName, elementName, modifiers, mixes.add(addMixes))
})

function formatElementClass(blockName, elementName) {
    return [blockName, options.blockElementSeparator, elementName].join('')
}

module.exports = BlockElement
