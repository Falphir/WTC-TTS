ServerEvents.recipes(event => {

    CreateCutting(
        event,
        ["#c:ores/aluminum"],
        400,
        [
            ["create:crushed_raw_aluminum"],
            ["create:crushed_raw_aluminum", 0.75],
            ["create:experience_nugget", 0.75, 4]
        ]
    )

    CreateCutting(
        event,
        ["#c:ores/copper"],
        400,
        [
            ["create:crushed_raw_copper"],
            ["create:crushed_raw_copper", 0.75],
            ["create:experience_nugget", 0.75],
            ["minecraft:gravel", 0.5],
        ]
    )

})
