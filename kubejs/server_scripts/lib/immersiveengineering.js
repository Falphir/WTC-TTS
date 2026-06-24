// priority: 100

function toIEIngredient(i) {
    return i.startsWith("#")
        ? { tag: i.substring(1) }
        : { item: i }
}

function IEAlloy(event, inputs, output, outputQty) {

    if (!Array.isArray(inputs) || inputs.length !== 2) {
        throw "IEAlloy requires exactly 2 inputs in the array [input0, input1]"
    }

    const recipe = {
        type: "immersiveengineering:alloy",

        input0: toIEIngredient(inputs[0]),
        input1: toIEIngredient(inputs[1]),

        result: {
            id: output,
            count: outputQty ?? 1
        }
    }
    event.custom(recipe)
}

function IEBlastFurnaceFuel(event, input, time) {
    const recipe = {
        type: "immersiveengineering:blast_furnace_fuel",
        input: toIEIngredient(input),
        time: time
    }
    event.custom(recipe)
}

function IEBlastFurnace(event, input, output, slag, time) {
    const recipe = {
        type: "immersiveengineering:blast_furnace",
        input: toIEIngredient(input),
        result: toIEIngredient(output),
        slag: toIEIngredient(slag),
        time: time
    }
    event.custom(recipe)
}

function IEBlueprint(event, category, inputs, output, outputQty) {
    const recipe = {
        type: "immersiveengineering:blueprint",
        category: category,
        inputs: inputs.map(toIEIngredient),
        result: {
            id: output,
            count: outputQty ?? 1
        }
    }
    event.custom(recipe)
}

function IECokeOven(event, input, output, time) {
    const recipe = {
        type: "immersiveengineering:coke_oven",
        input: toIEIngredient(input),
        result: toIEIngredient(output),
        time: time
    }
    event.custom(recipe)
}

function IECrusher(event, input, output, outputQty, secondary, secondaryChance) {
    const recipe = {
        type: "immersiveengineering:crusher",
        input: toIEIngredient(input),
        result: {
            id: output,
            count: outputQty ?? 1
        },
    }

    if(secondary != null && secondaryChance != null) {
        recipe.secondaries = [{
            chance: secondaryChance,
            output: toIEIngredient(secondary)
        }]
    }
    event.custom(recipe)
}

function IEFermenter(event, energy, input, output, outputQty) {
    const recipe = {
        type: "immersiveengineering:fermenter",
        energy: energy,
        fluid: {
            id: output,
            amount: outputQty ?? 1000
        },
        input: toIEIngredient(input)
    }
    event.custom(recipe)
}

function IEMetalPress(event, energy, input, inputQty, mold, output, outputQty) {
    const recipe = {
        type: "immersiveengineering:metal_press",
        energy: energy,
        input: {
            basePredicate: toIEIngredient(input),
            count: inputQty ?? 1
        },
        mold: `immersiveengineering:mold_${mold}`,
        result: {
            id: output,
            count: outputQty ?? 1
        }
    }
    event.custom(recipe)
}

function IEMixerItem(event, energy, input, inputQty, output, outputQty) {
    const recipe = {
        type: "immersiveengineering:mixer",
        energy: energy,
        input: {
            basePredicate: toIEIngredient(input),
            count: inputQty ?? 1
        },
        result: {
            id: output,
            count: outputQty ?? 1
        }
    }
    event.custom(recipe)
}

function IEMixerFluid(event, energy, input, output, outputQty) {
    const recipe = {
        type: "immersiveengineering:mixer",
        energy: energy,
        fluid: {
            id: output,
            amount: outputQty ?? 1000
        },
        input: toIEIngredient(input)
    }
    event.custom(recipe)
}
