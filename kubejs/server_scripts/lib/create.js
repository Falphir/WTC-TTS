// priorit: 100

/**
 * @typedef {[string, number?, number?]} CrushOutput - [itemId, chance?, count?]
 */

/**
 * @param {Object} event
 * @param {string|string[]} input - item id(s) or tag(s) (prefix with "#" for tags)
 * @param {number} [processingTime=400] - processing time in ticks
 * @param {CrushOutput[]} outputs - array of [itemId, chance?, count?] tuples
 */
function CreateCrushing(event, input, processingTime, outputs) {

    const recipe = {
        type: "create:crushing",
        ingredients: input.map(toIngredient),
        processing_time: processingTime ?? 400,
        results: outputs.map(output => {
            const result = { id: output[0] }

            if (output[1] != null)
                result.chance = output[1]

            if (output[2] != null)
                result.count = output[2]

            return result
        })
    }

    event.custom(recipe)
}


/**
 * @typedef {[string, number?, number?]} CutOutput - [itemId, chance?, count?]
 */

/**
 * @param {Object} event
 * @param {string|string[]} input - item id(s) or tag(s) (prefix with "#" for tags)
 * @param {number} [processingTime=200] - processing time in ticks
 * @param {CutOutput[]} outputs - array of [itemId, chance?, count?] tuples
 */
function CreateCutting(event, input, processingTime, outputs) {
    console.log(input.map(toIngredient))

    const recipe = {
        type: "create:cutting",
        ingredients: input.map(toIngredient),
        processing_time: processingTime ?? 200,
        results: outputs.map(output => {
            const result = { id: output[0] }

            if (output[1] != null)
                result.chance = output[1]

            if (output[2] != null)
                result.count = output[2]

            console.log(result)
            return result
        })
    }         
    event.custom(recipe)

}
