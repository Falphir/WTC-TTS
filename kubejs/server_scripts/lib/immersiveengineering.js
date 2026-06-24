// priority: 100

function toIEIngredient(i) {
    return i.startsWith("#")
        ? { tag: i.substring(1) }
        : { item: i }
}

/**
 * @param {Object} event
 * @param {string[]} inputs - exactly 2 item ids or tags (prefix with "#" for tags)
 * @param {string} output - output item id
 * @param {number} [outputQty=1] - output item count
 */
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

/**
 * @param {Object} event
 * @param {string} input - item id or tag (prefix with "#" for tags)
 * @param {number} time - burn time in ticks
 */
function IEBlastFurnaceFuel(event, input, time) {
    const recipe = {
        type: "immersiveengineering:blast_furnace_fuel",
        input: toIEIngredient(input),
        time: time
    }
    event.custom(recipe)
}

/**
 * @param {Object} event
 * @param {string} input - item id or tag to smelt (prefix with "#" for tags)
 * @param {string} output - output item id
 * @param {string} slag - slag byproduct item id
 * @param {number} time - processing time in ticks
 */
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

/**
 * @param {Object} event
 * @param {string} category - blueprint category id (e.g. "molds", "bullet_components")
 * @param {string|string[]} inputs - item id(s) or tag(s) (prefix with "#" for tags)
 * @param {string} output - output item id
 * @param {number} [outputQty=1] - output item count
 */
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

/**
 * @param {Object} event
 * @param {string} input - item id or tag (prefix with "#" for tags)
 * @param {string} output - output item id
 * @param {number} time - processing time in ticks
 */
function IECokeOven(event, input, output, time) {
    const recipe = {
        type: "immersiveengineering:coke_oven",
        input: toIEIngredient(input),
        result: toIEIngredient(output),
        time: time
    }
    event.custom(recipe)
}

/**
 * @param {Object} event
 * @param {string} input - item id or tag (prefix with "#" for tags)
 * @param {string} output - primary output item id
 * @param {number} [outputQty=1] - primary output item count
 * @param {string} [secondary] - optional secondary output item id
 * @param {number} [secondaryChance] - drop chance for the secondary output (0.0 to 1.0)
 */
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

/**
 * @param {Object} event
 * @param {number} energy - energy cost in FE
 * @param {string} input - item id or tag (prefix with "#" for tags)
 * @param {string} output - output fluid id
 * @param {number} [outputQty=1000] - output fluid amount in millibuckets
 */
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

/**
 * @param {Object} event
 * @param {number} energy - energy cost in FE
 * @param {string} input - item id or tag (prefix with "#" for tags)
 * @param {number} [inputQty=1] - input item count required
 * @param {string} mold - mold name without namespace (e.g. "plate", "rod", "wire")
 * @param {string} output - output item id
 * @param {number} [outputQty=1] - output item count
 */
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

/**
 * @param {Object} event
 * @param {number} energy - energy cost in FE
 * @param {string} input - item id or tag (prefix with "#" for tags)
 * @param {number} [inputQty=1] - input item count required
 * @param {string} output - output item id
 * @param {number} [outputQty=1] - output item count
 */
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

/**
 * @param {Object} event
 * @param {number} energy - energy cost in FE
 * @param {string} input - item id or tag (prefix with "#" for tags)
 * @param {string} output - output fluid id
 * @param {number} [outputQty=1000] - output fluid amount in millibuckets
 */
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
