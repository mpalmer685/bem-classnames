const createBlock = require('../src')

describe('block', () => {
    const button = createBlock('button')

    describe('name() function', () => {
        it('should return the block name', () => {
            expect(button.name()).toBe('button')
        })
    })

    describe('mod() function', () => {
        it('should add modifiers from an object to the existing block name', () => {
            expect(button.mod({ disabled: true }).name()).toEqual(
                'button button--disabled'
            )
        })

        it('should format boolean modifiers as just the modifier', () => {
            expect(button.mod({ selected: true }).name()).toEqual(
                'button button--selected'
            )
        })

        it('should be able to be called multiple times to add modifiers', () => {
            expect(
                button
                    .mod({ disabled: true })
                    .mod({ selected: true })
                    .name()
            ).toEqual('button button--disabled button--selected')
        })

        it('should format string modifiers as `name-value`', () => {
            expect(button.mod({ size: 'wide' }).name()).toEqual(
                'button button--size-wide'
            )
        })

        it('should add multiple modifiers in an object', () => {
            expect(button.mod({ disabled: true, size: 'wide' }).name()).toEqual(
                'button button--disabled button--size-wide'
            )
        })

        it('should add a string modifier', () => {
            expect(button.mod('disabled').name()).toEqual(
                'button button--disabled'
            )
        })

        it('should only add modifiers whose value is truthy or 0', () => {
            expect(
                button
                    .mod({
                        disabled: true,
                        selected: false,
                        weight: null,
                        height: 1,
                        width: 0
                    })
                    .name()
            ).toEqual(
                'button button--disabled button--height-1 button--width-0'
            )
        })
    })

    describe('mix() function', () => {
        it('should add a mix to the output name', () => {
            expect(button.mix('block').name()).toEqual('button block')
        })

        it('should accept variable arguments', () => {
            expect(button.mix('block', 'text-center').name()).toEqual(
                'button block text-center'
            )
        })
    })

    describe('mod() and mix() functions', () => {
        it('should both be applied', () => {
            expect(
                button
                    .mod({ disabled: true })
                    .mix('block')
                    .name()
            ).toEqual('button button--disabled block')
        })

        it('should not be affected by order', () => {
            expect(
                button
                    .mix('block')
                    .mod({ disabled: true })
                    .name()
            ).toEqual('button button--disabled block')
        })
    })

    describe('element', () => {
        const label = button.element('label')

        describe('name() function', () => {
            it('should format the element name', () => {
                expect(label.name()).toEqual('button__label')
            })
        })

        describe('mod() function', () => {
            it('should add modifiers from an object to the existing block name', () => {
                expect(label.mod({ disabled: true }).name()).toEqual(
                    'button__label button__label--disabled'
                )
            })

            it('should format boolean modifiers as just the modifier', () => {
                expect(label.mod({ selected: true }).name()).toEqual(
                    'button__label button__label--selected'
                )
            })

            it('should be able to be called multiple times to add modifiers', () => {
                expect(
                    label
                        .mod({ disabled: true })
                        .mod({ selected: true })
                        .name()
                ).toEqual(
                    'button__label button__label--disabled button__label--selected'
                )
            })

            it('should format string modifiers as `name-value`', () => {
                expect(label.mod({ size: 'wide' }).name()).toEqual(
                    'button__label button__label--size-wide'
                )
            })

            it('should add multiple modifiers in an object', () => {
                expect(
                    label.mod({ disabled: true, size: 'wide' }).name()
                ).toEqual(
                    'button__label button__label--disabled button__label--size-wide'
                )
            })

            it('should add a string modifier', () => {
                expect(label.mod('disabled').name()).toEqual(
                    'button__label button__label--disabled'
                )
            })

            it('should only add modifiers whose value is truthy or 0', () => {
                expect(
                    label
                        .mod({
                            disabled: true,
                            selected: false,
                            weight: null,
                            height: 1,
                            width: 0
                        })
                        .name()
                ).toEqual(
                    'button__label button__label--disabled button__label--height-1 button__label--width-0'
                )
            })
        })

        describe('mix() function', () => {
            it('should add a mix to the output name', () => {
                expect(label.mix('block').name()).toEqual('button__label block')
            })

            it('should accept variable arguments', () => {
                expect(label.mix('block', 'text-center').name()).toEqual(
                    'button__label block text-center'
                )
            })
        })

        describe('mod() and mix() functions', () => {
            it('should both be applied', () => {
                expect(
                    label
                        .mod({ disabled: true })
                        .mix('block')
                        .name()
                ).toEqual('button__label button__label--disabled block')
            })

            it('should not be affected by order', () => {
                expect(
                    label
                        .mix('block')
                        .mod({ disabled: true })
                        .name()
                ).toEqual('button__label button__label--disabled block')
            })
        })
    })
})
