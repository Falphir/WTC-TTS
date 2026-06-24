ServerEvents.recipes(event => {

    // ExDeorumBarrelFluidMixing(event, baseFluid, additiveFluid, result, count, consumesAdditive)

    ExDeorumBarrelFluidMixing(event, "minecraft:lava", "exdeorum:witch_water", "minecraft:blackstone",  1, true)
    ExDeorumBarrelFluidMixing(event, "minecraft:lava", "minecraft:water",      "minecraft:obsidian",    1, true)

})
