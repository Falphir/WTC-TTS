StartupEvents.registry("fluid", (event) => {
  for (const [name, mat] of Object.entries(global.MATERIALS)) {
    if (!mat.types.includes("molten")) continue;
    event.create(`molten_${name}`, "kubejs:thick")
      .tint(mat.color)
      .type(type => type
        .renderType(0)
        .stillTexture("kubejs:block/thick_fluid_still")
        .flowingTexture("kubejs:block/thick_fluid_flowing")
      )
      .tag(`c:molten/${name}`);
  }
});
