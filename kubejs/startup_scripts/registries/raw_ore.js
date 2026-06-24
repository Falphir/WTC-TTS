//Creates Raw Ore items for non-vanilla, non-alloy materials.
StartupEvents.registry("item", (event) => {
  for (const [name, mat] of Object.entries(global.MATERIALS)) {
    if (!mat.types.includes("raw_ore")) continue;
    event
      .create(`raw_${name}`)
      .texture("layer0", "kubejs:item/raw_ore")
      .color(0, mat.color)
      .tag("c:raw_materials")
      .tag(`c:raw_materials/${name}`);
  }
});
