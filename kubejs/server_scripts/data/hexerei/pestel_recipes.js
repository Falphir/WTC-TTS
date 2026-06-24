ServerEvents.recipes(event => {

    HexereiPestle(event, ["minecraft:flint"], "minecraft:gravel", 1, 100)

    HexereiPestle(event, ["minecraft:wheat", "minecraft:sugar"], "create:dough", 1 ,400)

    HexereiPestle(event, [
        "minecraft:bone",
        "minecraft:rotten_flesh",
        "minecraft:spider_eye",
        "minecraft:gunpowder",
        "minecraft:blaze_powder"
        ], "minecraft:bone_meal", 1, 200)

    HexereiPestle(event, ["wtc_tweaks:cast_iron_ingot"], "wtc_tweaks:cast_iron_dust",1, 100)
    HexereiPestle(event, ["wtc_tweaks:cast_iron_ingot","wtc_tweaks:cast_iron_ingot"], "wtc_tweaks:cast_iron_dust", 2, 100)
    HexereiPestle(event, ["wtc_tweaks:cast_iron_ingot","wtc_tweaks:cast_iron_ingot","wtc_tweaks:cast_iron_ingot",], "wtc_tweaks:cast_iron_dust", 3, 100)
    HexereiPestle(event, ["wtc_tweaks:cast_iron_ingot","wtc_tweaks:cast_iron_ingot","wtc_tweaks:cast_iron_ingot","wtc_tweaks:cast_iron_ingot"], "wtc_tweaks:cast_iron_dust", 4, 100)
    HexereiPestle(event, ["wtc_tweaks:cast_iron_ingot","wtc_tweaks:cast_iron_ingot","wtc_tweaks:cast_iron_ingot","wtc_tweaks:cast_iron_ingot","wtc_tweaks:cast_iron_ingot"], "wtc_tweaks:cast_iron_dust", 5, 100)

})
