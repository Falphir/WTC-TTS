// priority: 100

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
