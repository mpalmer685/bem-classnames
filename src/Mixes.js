const Mixes = (mixes = []) => ({
    add: newMixes => Mixes([...mixes, ...newMixes]),

    format: () => mixes
})

module.exports = Mixes
