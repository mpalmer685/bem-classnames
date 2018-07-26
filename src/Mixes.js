const Mixes = (mixes = []) => ({
    add: newMixes => Mixes([...mixes, ...newMixes]),

    format: () => mixes
})

export default Mixes
