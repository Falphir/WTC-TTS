// priorit: 100


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
 * @typedef {[string, number?, number?]} CutOutput
 */

/**
 * @param {Object} event
 * @param {string|string[]} input
 * @param {number} processingTime
 * @param {CutOutput[]} outputs
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
