const createBlock = require('../src')

describe('createBlock.config', () => {
    const button = createBlock('button')
    const label = button.element('label')

    createBlock.config({
        blockElementSeparator: '-',
        baseNameModifierSeparator: '*',
        modifierNameValueSeparator: ':'
    })

    it('should customize the block/element separator', () => {
        expect(label.name()).toEqual('button-label')
    })

    it('should customize the basename/modifier separator', () => {
        expect(button.mod('disabled').name()).toEqual('button button*disabled')
        expect(label.mod('disabled').name()).toEqual(
            'button-label button-label*disabled'
        )
    })

    it('should customize the modifier name/value separator', () => {
        expect(button.mod({ size: 'wide' }).name()).toEqual(
            'button button*size:wide'
        )
        expect(label.mod({ size: 'wide' }).name()).toEqual(
            'button-label button-label*size:wide'
        )
    })
})
