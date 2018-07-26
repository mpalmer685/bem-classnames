import Mixes from './Mixes'
import Modifiers from './Modifiers'
import { options } from './config'

const BlockElement = (
    blockName,
    elementName,
    modifiers = Modifiers(),
    mixes = Mixes()
) => ({
    name() {
        const elementClassName = formatElementClass(blockName, elementName)
        const classes = [elementClassName]
        classes.push(...modifiers.format(elementClassName))
        classes.push(...mixes.format())

        return classes.join(' ')
    },

    mod: mod => BlockElement(blockName, elementName, modifiers.add(mod), mixes),

    mix: (...addMixes) =>
        BlockElement(blockName, elementName, modifiers, mixes.add(addMixes))
})

function formatElementClass(blockName, elementName) {
    return [blockName, options.blockElementSeparator, elementName].join('')
}

export default BlockElement
