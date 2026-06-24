//Adds storage blocks for all materials with storage_block type.
StartupEvents.registry("block", (event) => {
  for (const [name, mat] of Object.entries(global.MATERIALS)) {
    if (!mat.types.includes("storage_block")) continue;
    event
      .create(`${name}_block`)
      .texture("kubejs:block/storage_block")
      .color(0, mat.color)
      .tagBoth("c:storage_blocks")
      .tagBoth(`c:storage_blocks/${name}`)
      .requiresTool(true)
      .soundType("metal")
      .item((i) => {
        i.color(mat.color);
      });
  }
});
