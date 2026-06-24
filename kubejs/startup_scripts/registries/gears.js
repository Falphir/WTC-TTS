StartupEvents.registry("item", (event) => {
  for (const [name, mat] of Object.entries(global.MATERIALS)) {
    if (!mat.types.includes("gear")) continue;
    event
      .create(`${name}_gear`)
      .texture("layer0", "kubejs:item/parts/part_gear")
      .color(0, mat.color)
      .tag("c:gears")
      .tag(`c:gears/${name}`);
  }
});
