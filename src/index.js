const Block = require('./Block')
const { modifyConfig } = require('./config')

function createBlock(blockName) {
    return Block(blockName)
}

createBlock.config = modifyConfig

module.exports = createBlock
