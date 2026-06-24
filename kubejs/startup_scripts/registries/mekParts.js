//Makes Dirty Dust, Clumps, Shards, Crystals and Slurries for all materials with mek_processing type.
if (Platform.mods.mekanism != undefined) {
  console.info("Loading mekParts.js");

  StartupEvents.registry("item", (event) => {
    for (const [name, mat] of Object.entries(global.MATERIALS)) {
      if (!mat.types.includes("mek_processing")) continue;
      event
        .create(`${name}_dirty_dust`)
        .displayName(`Dirty ${name} Dust`)
        .texture("layer0", "mekanism:item/dirty_dust")
        .color(0, mat.color)
        .tag("mekanism:dirty_dusts")
        .tag(`mekanism:dirty_dusts/${name}`);
      event
        .create(`${name}_clump`)
        .texture("layer0", "mekanism:item/clump")
        .color(0, mat.color)
        .tag("mekanism:clumps")
        .tag(`mekanism:clumps/${name}`);
      event
        .create(`${name}_shard`)
        .texture("layer0", "mekanism:item/shard")
        .color(0, mat.color)
        .tag("mekanism:shards")
        .tag(`mekanism:shards/${name}`);
      event
        .create(`${name}_crystal`)
        .texture("layer0", "mekanism:item/crystal")
        .color(0, mat.color)
        .tag("mekanism:crystals")
        .tag(`mekanism:crystals/${name}`);
    }
  });

  StartupEvents.registry("mekanism:slurry", (event) => {
    for (const [name, mat] of Object.entries(global.MATERIALS)) {
      if (!mat.types.includes("mek_processing")) continue;
      event
        .create(`dirty_${name}`)
        .texture("mekanism:slurry/dirty")
        .color(mat.color);
      event
        .create(`clean_${name}`)
        .texture("mekanism:slurry/clean")
        .color(mat.color);
    }
  });
}
