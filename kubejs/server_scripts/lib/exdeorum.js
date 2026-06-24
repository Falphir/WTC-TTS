// priority: 100

const SIEVE_MESHES = {
    string:  "exdeorum:string_mesh",
    flint:   "exdeorum:flint_mesh",
    iron:    "exdeorum:iron_mesh",
    golden:  "exdeorum:golden_mesh",
    diamond: "exdeorum:diamond_mesh",
    netherite: "exdeorum:netherite_mesh"
}

/**
 * @param {Object} event
 * @param {string} ingredient - item id or tag (prefix with "#" for tags)
 * @param {string} mesh - shorthand ("iron", "flint", etc.) or full item id
 * @param {string} result - output item id
 * @param {number} [chance=0.1] - binomial probability (0.0 to 1.0)
 * @param {number} [count=1] - output item count
 * @param {string} [condition] - optional tag that must be non-empty (e.g. "c:ores/aluminum")
 */
function ExDeorumSieve(event, ingredient, mesh, result, chance, count, condition) {
    const resolvedMesh = SIEVE_MESHES[mesh] ?? mesh

    const recipe = {
        type: "exdeorum:sieve",
        ingredient: toIngredient(ingredient),
        mesh: { item: resolvedMesh },
        result: {
            count: count ?? 1,
            id: result
        },
        result_amount: {
            type: "minecraft:binomial",
            n: 1.0,
            p: chance ?? 0.1
        }
    }

    if (condition != null) {
        recipe["neoforge:conditions"] = [{
            type: "neoforge:not",
            value: {
                type: "neoforge:tag_empty",
                tag: condition
            }
        }]
    }

    event.custom(recipe)
}

/**
 * @param {Object} event
 * @param {string} ingredient - item id or tag (prefix with "#" for tags)
 * @param {string} fluid - output fluid id (e.g. "minecraft:water")
 * @param {number} [amount=100] - amount of fluid produced in millibuckets
 */
function ExDeorumCrucible(event, ingredient, fluid, amount) {
    event.custom({
        type: "exdeorum:water_crucible",
        ingredient: toIngredient(ingredient),
        fluid: {
            id: fluid,
            amount: amount ?? 100
        }
    })
}

/**
 * @param {Object} event
 * @param {string} ingredient - item id or tag (prefix with "#" for tags)
 * @param {number} [volume=100] - how much this item contributes to filling the compost barrel (out of 1000)
 */
function ExDeorumBarrelCompost(event, ingredient, volume) {
    event.custom({
        type: "exdeorum:barrel_compost",
        ingredient: toIngredient(ingredient),
        volume: volume ?? 100
    })
}

/**
 * @param {Object} event
 * @param {string} ingredient - item id or tag (prefix with "#" for tags)
 * @param {string} fluid - fluid id the barrel must contain (e.g. "minecraft:water")
 * @param {number} [fluidAmount=1000] - amount of fluid required in millibuckets
 * @param {string} result - output item id
 * @param {number} [count=1] - output item count
 */
function ExDeorumBarrelMixing(event, ingredient, fluid, fluidAmount, result, count) {
    event.custom({
        type: "exdeorum:barrel_mixing",
        ingredient: toIngredient(ingredient),
        fluid: {
            fluid: fluid,
            amount: fluidAmount ?? 1000
        },
        result: {
            id: result,
            count: count ?? 1
        }
    })
}

/**
 * @param {Object} event
 * @param {string} baseFluid - fluid id already in the barrel (e.g. "minecraft:lava")
 * @param {string} additiveFluid - fluid id poured in on top (e.g. "exdeorum:witch_water")
 * @param {string} result - output item id
 * @param {number} [count=1] - output item count
 * @param {boolean} [consumesAdditive=true] - whether the additive fluid is consumed in the process
 */
function ExDeorumBarrelFluidMixing(event, baseFluid, additiveFluid, result, count, consumesAdditive) {
    event.custom({
        type: "exdeorum:barrel_fluid_mixing",
        base_fluid: { fluid: baseFluid, amount: 1000 },
        additive_fluid: { fluid: additiveFluid },
        consumes_additive: consumesAdditive ?? true,
        result: {
            id: result,
            count: count ?? 1
        }
    })
}

/**
 * @param {Object} event
 * @param {string} baseFluid - fluid id in the barrel that gets transformed (e.g. "minecraft:water")
 * @param {string} catalystBlock - block id that must be placed next to the barrel (e.g. "minecraft:mycelium")
 * @param {string} resultFluid - fluid id the barrel contents transform into
 * @param {number} resultColor - tint color of the fluid during transformation as a decimal integer (e.g. 2822231)
 * @param {number} [duration=1700] - transformation time in ticks
 * @param {[string, number][]} [byproducts] - optional array of [itemId, weight] pairs dropped on completion
 */
function ExDeorumBarrelFluidTransformation(event, baseFluid, catalystBlock, resultFluid, resultColor, duration, byproducts) {
    const recipe = {
        type: "exdeorum:barrel_fluid_transformation",
        base_fluid: { fluid: baseFluid },
        catalyst: { block: catalystBlock },
        result_fluid: resultFluid,
        result_color: resultColor,
        duration: duration ?? 1700
    }

    if (byproducts != null) {
        // byproducts: array of [itemId, weight] pairs
        recipe.byproducts = byproducts.map(b => ({ value: b[0], weight: b[1] }))
    }

    event.custom(recipe)
}

/**
 * @param {Object} event
 * @param {string} block - block id to register as a heat source (e.g. "minecraft:fire")
 * @param {number} heatValue - heat output; higher values fill the crucible faster
 */
function ExDeorumCrucibleHeatSource(event, block, heatValue) {
    event.custom({
        type: "exdeorum:crucible_heat_source",
        block_predicate: { block: block },
        heat_value: heatValue
    })
}
