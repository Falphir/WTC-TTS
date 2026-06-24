// priority: 100

/**
 * @param {Object} event
 * @param {string|string[]} inputs - item id(s) or tag(s) (prefix with "#" for tags)
 * @param {string} output - output item id
 * @param {number} [outputQty=1] - output item count
 * @param {number} [grindingTime=100] - grinding time in ticks
 */
function HexereiPestle(event, inputs, output, outputQty, grindingTime) {
    event.custom({
        type: "hexerei:pestle_and_mortar",
        ingredients: inputs.map(toIngredient),
        output: {
            id: output,
            count: outputQty ?? 1
        },
        grindingTime: grindingTime ?? 100
    })
}

/**
 * @param {Object} event
 * @param {string} fluid - fluid id the cauldron must contain (e.g. "minecraft:water")
 * @param {number} fluidQty - amount of fluid required in millibuckets
 * @param {string|string[]} inputs - item id(s) or tag(s) to mix in (prefix with "#" for tags)
 * @param {string} output - output item id
 * @param {number} [outputQty=1] - output item count
 * @param {string} [heatRequirement] - optional heat level required (e.g. "fire", "soul_fire")
 * @param {string} [moonRequirement] - optional moon phase required (e.g. "full", "new")
 */
function HexereiCauldronItemMixing(event, fluid, fluidQty, inputs, output, outputQty, heatRequirement, moonRequirement) {

    const recipe = {
        type: "hexerei:mixingcauldron",
        fluid: {
            id: fluid,
            amount: fluidQty
        },
        ingredients: inputs.map(toIngredient),
        output: {
            id: output,
            count: outputQty ?? 1
        }
    }

    if (heatRequirement != null) {
        recipe.heatRequirement = heatRequirement
    }

    if (moonRequirement != null) {
        recipe.moonRequirement = moonRequirement
    }

    event.custom(recipe)
}

/**
 * @param {Object} event
 * @param {string} fluid - fluid id the cauldron must contain (e.g. "minecraft:water")
 * @param {number} fluidQty - amount of fluid required in millibuckets
 * @param {string|string[]} inputs - item id(s) or tag(s) to mix in (prefix with "#" for tags)
 * @param {string} output - output fluid id
 * @param {number} [outputQty=1000] - output fluid amount in millibuckets
 * @param {string} [heatRequirement] - optional heat level required (e.g. "fire", "soul_fire")
 * @param {string} [moonRequirement] - optional moon phase required (e.g. "full", "new")
 */
function HexereiCauldronFluidMixing(event, fluid, fluidQty, inputs, output, outputQty, heatRequirement, moonRequirement) {

    const recipe = {
        type: "hexerei:fluid_mixing",
        fluid: {
            id: fluid,
            amount: fluidQty
        },
        ingredients: inputs.map(toIngredient),
        output: {
            id: output,
            amount: outputQty ?? 1000
        }
    }

    if (heatRequirement != null) {
        recipe.heatRequirement = heatRequirement
    }

    if (moonRequirement != null) {
        recipe.moonRequirement = moonRequirement
    }

    event.custom(recipe)
}

/**
 * @param {Object} event
 * @param {string} input - input item id
 * @param {string} output - output item id
 * @param {number} [dryingTime=1000] - drying time in ticks
 */
function HexereiDryingRack(event, input, output, dryingTime) {
    const recipe = {
        type: "hexerei:drying_rack",
        input: {
            item: input
        },
        output: {
            id: output
        },
        dryingTime: dryingTime ?? 1000
    }

    event.custom(recipe)
}
