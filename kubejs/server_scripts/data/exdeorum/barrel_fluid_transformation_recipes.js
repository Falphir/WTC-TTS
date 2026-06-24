ServerEvents.recipes(event => {

    // ExDeorumBarrelFluidTransformation(event, baseFluid, catalystBlock, resultFluid, resultColor, duration, byproducts)

    // Example: water + mycelium nearby -> witch water (with mushroom byproducts)
    ExDeorumBarrelFluidTransformation(
        event,
        "minecraft:water",
        "minecraft:mycelium",
        "exdeorum:witch_water",
        2822231,
        1700,
        [
            ["minecraft:red_mushroom",   50],
            ["minecraft:brown_mushroom", 50]
        ]
    )

})
