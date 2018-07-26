import Block from './Block'
import { modifyConfig } from './config'

function createBlock(blockName) {
    return Block(blockName)
}

createBlock.config = modifyConfig

export default createBlock
