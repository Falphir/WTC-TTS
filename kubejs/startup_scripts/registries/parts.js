//Makes Plates, Dusts, and Rods for all registered materials.
StartupEvents.registry("item", (event) => {
  for (const [name, mat] of Object.entries(global.MATERIALS)) {
    if (mat.types.includes("plate")) {
      event
        .create(`${name}_plate`)
        .texture("layer0", "kubejs:item/parts/part_plate")
        .color(0, mat.color)
        .tag("c:plates")
        .tag(`c:plates/${name}`);
    }
    if (mat.types.includes("sheet")) {
      event
        .create(`${name}_sheet`)
        .texture("layer0", "kubejs:item/parts/part_sheet")
        .color(0, mat.color)
        .tag("c:sheets")
        .tag(`c:sheets/${name}`);
    }
    if (mat.types.includes("dust")) {
      event
        .create(`${name}_dust`)
        .texture("layer0", "kubejs:item/parts/part_dust")
        .color(0, mat.color)
        .tag("c:dusts")
        .tag(`c:dusts/${name}`);
    }
    if (mat.types.includes("small_dust")) {
      event
        .create(`small_${name}_dust`)
        .texture("layer0", "kubejs:item/parts/part_small_dust")
        .color(0, mat.color)
        .tag("c:tiny_dusts")
        .tag(`c:tiny_dusts/${name}`);
    }
    if (mat.types.includes("rod")) {
      event
        .create(`${name}_rod`)
        .texture("layer0", "kubejs:item/parts/part_rod")
        .color(0, mat.color)
        .tag("c:rods")
        .tag(`c:rods/${name}`);
    }
  }
});
