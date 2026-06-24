ServerEvents.recipes(event => {

    // ExDeorumBarrelCompost(event, ingredient, volume)
    // volume is out of 1000 — reaching 1000 produces dirt

    ExDeorumBarrelCompost(event, "minecraft:apple",           100)
    ExDeorumBarrelCompost(event, "minecraft:carrot",          100)
    ExDeorumBarrelCompost(event, "minecraft:wheat",            50)
    ExDeorumBarrelCompost(event, "minecraft:oak_leaves",       25)
    ExDeorumBarrelCompost(event, "minecraft:short_grass",       10)

})
