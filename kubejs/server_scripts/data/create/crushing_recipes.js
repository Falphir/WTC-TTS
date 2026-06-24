ServerEvents.recipes(event => {

    CreateCrushing(
        event,
        ["#c:ores/aluminum"],
        400,
        [
            ["create:crushed_raw_aluminum"],
            ["create:crushed_raw_aluminum", 0.75],
            ["create:experience_nugget", 0.75]
        ]
    )

    CreateCrushing(
        event,
        ["#c:ores/copper"],
        400,
        [
            ["create:crushed_raw_copper"],
            ["create:crushed_raw_copper", 0.75],
            ["create:experience_nugget", 0.75],
            ["minecraft:gravel", 0.5],
            ["minecraft:sand", 0.25],
            ["minecraft:flint", 0.1],
            ["minecraft:iron_nugget", 0.05],
        ]
    )
})
