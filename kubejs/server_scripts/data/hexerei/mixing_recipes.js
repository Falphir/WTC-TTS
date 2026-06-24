ServerEvents.recipes(event => {

    HexereiCauldronItemMixing(event, "immersiveengineering:creosote", 500, 
        ["hexerei:yellow_dock_flowers","#minecraft:planks","hexerei:mandrake_flowers","#minecraft:planks","hexerei:mandrake_root","#minecraft:planks","hexerei:belladonna_flowers","#minecraft:planks"],
        "immersiveengineering:treated_wood_horizontal", 4, null, null)

    HexereiCauldronItemMixing(event, "minecraft:lava", 100,
        ["minecraft:andesite","wtc_tweaks:cast_iron_dust","minecraft:andesite","wtc_tweaks:cast_iron_dust","minecraft:andesite","wtc_tweaks:cast_iron_dust","minecraft:andesite","wtc_tweaks:cast_iron_dust"],
        "create:andesite_alloy", 4, "heated", null)
})
