StartupEvents.registry("block", (event) => {
  for (const [name, mat] of Object.entries(global.MATERIALS)) {
    if (!mat.types.includes("storage_block")) continue;

    for (const level of [1, 2, 3]) {
      event
        .create(`compressed_${level}x_${name}_block`)
        .model(`kubejs:block/compressed_block_${level}x`)
        .color(0, mat.color)
        .tagBoth("c:storage_blocks")
        .tagBoth(`c:storage_blocks/${name}`)
        .tagBoth("kubejs:compressed_storage_blocks")
        .requiresTool(true)
        .soundType("metal");
    }
  }
});
