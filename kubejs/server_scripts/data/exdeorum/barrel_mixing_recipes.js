ServerEvents.recipes(event => {

    // ExDeorumBarrelMixing(event, ingredient, fluid, fluidAmount, result, count)

    ExDeorumBarrelMixing(event, "exdeorum:dust",        "minecraft:water", 1000, "minecraft:clay",       1)
    ExDeorumBarrelMixing(event, "minecraft:gravel",     "minecraft:water", 1000, "minecraft:sand",       1)
    ExDeorumBarrelMixing(event, "minecraft:flint",      "minecraft:water", 1000, "minecraft:gravel",     1)

})
