//The materials specified are ones that do already exist from mods like Immersive Engineering or Create Crafts and Additions, but get unified by Almost Unified.
StartupEvents.registry("item", (event) => {
  for (const [name, mat] of Object.entries(global.MATERIALS)) {
    if (!mat.types.includes("wire")) continue;
    event
      .create(`${name}_wire`)
      .texture("layer0", "kubejs:item/parts/part_wire")
      .color(0, mat.color)
      .tag("c:wires")
      .tag(`c:wires/${name}`);
  }
});
