ServerEvents.recipes(event => {


    // Example usage of the ExDeorumSieve function
    // ExDeorumSieve(event, ingredient, mesh, result, chance, count, condition)

    // Gravel through iron mesh -> aluminum ore chunk (6% chance, only when c:ores/aluminum tag is populated)
    ExDeorumSieve(event, "minecraft:gravel", "iron", "exdeorum:aluminum_ore_chunk", 0.06, 1, "c:ores/aluminum")
})
