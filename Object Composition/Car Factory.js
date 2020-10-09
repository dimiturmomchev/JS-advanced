function solve(input) {
    const engineTypes = [
        {power: 90, volume: 1800},
        {power: 120, volume: 2400},
        {power: 200, volume: 3500},
    ];

    return {
        model: input.model,
        engine: engineTypes.find(engine => input.power <= engine.power),
        carriage: {
            type: input.carriage,
            color: input.color,
        },
        wheels: Array(4).fill(input.wheelsize % 2 == 0 ? input.wheelsize - 1 : input.wheelsize)
    }
}

console.log(solve({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }

));