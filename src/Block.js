import BlockElement from './BlockElement'
import Mixes from './Mixes'
import Modifiers from './Modifiers'

const Block = (name, modifiers = Modifiers(), mixes = Mixes()) => ({
    name: () => {
        const classes = [name]
        classes.push(...modifiers.format(name))
        classes.push(...mixes.format())

        return classes.join(' ')
    },

    mod: mod => Block(name, modifiers.add(mod), mixes),

    mix: (...addMixes) => Block(name, modifiers, mixes.add(addMixes)),

    element: elementName => BlockElement(name, elementName)
})

export default Block
