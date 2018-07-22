const BlockElement = require('./BlockElement')
const Mixes = require('./Mixes')
const Modifiers = require('./Modifiers')

const Block = (name, modifiers = Modifiers(), mixes = Mixes()) => ({
    name: () => {
        const classes = [name]

        Array.prototype.push.apply(classes, modifiers.format(name))
        Array.prototype.push.apply(classes, mixes.format())

        return classes.join(' ')
    },

    mod: mod => Block(name, modifiers.add(mod), mixes),

    mix: (...addMixes) => Block(name, modifiers, mixes.add(addMixes)),

    element: elementName => BlockElement(name, elementName)
})

module.exports = Block
