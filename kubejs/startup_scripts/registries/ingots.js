StartupEvents.registry("item", (event) => {
  for (const [name, mat] of Object.entries(global.MATERIALS)) {
    if (!mat.types.includes("ingot")) continue;
    let texture = mat.ingotTexture;
    console.log(`Registering ${name} ingot with texture ${texture}`);
    event
      .create(`${name}_ingot`)
      .texture("layer0", `kubejs:item/${texture}_ingot`)
      .color(0, mat.color)
      .tag("c:ingots")
      .tag(`c:ingots/${name}`)
      .tag("minecraft:beacon_payment_items");
    event
      .create(`${name}_nugget`)
      .texture("layer0", "kubejs:item/nugget")
      .color(0, mat.color)
      .tag("c:nugget")
      .tag(`c:nugget/${name}`);
  }
});
