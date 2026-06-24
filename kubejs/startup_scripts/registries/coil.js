//The materials specified are ones that do already exist from mods like Immersive Engineering or Create Crafts and Additions, but get unified by Almost Unified.
StartupEvents.registry("item", (event) => {
  for (const [name, mat] of Object.entries(global.MATERIALS)) {
    if (!mat.types.includes("coil")) continue;
    event
      .create(`${name}_coil`)
      .texture("layer0", "kubejs:item/parts/part_coil")
      .texture("layer1", "kubejs:item/parts/part_coil_overlay")
      .color(1, mat.color)
      .tag("c:coils")
      .tag(`c:coils/${name}`);
  }
});
