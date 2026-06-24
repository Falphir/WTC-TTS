//priority: 10
//Script must have high priority, otherwise colors may load too late.

// Texture paths for ingot types — update these when you have the final texture files.
global.INGOT_TEXTURES = {
  base: "kubejs:item/ingot",
  alloy:    "kubejs:item/ingot_alloy",
};

// Material database. Each entry defines:
//   color        — tint color (0xRRGGBB)
//   ingotTexture — "specific" for pure metals, "alloy" for blended metals
//   types        — which items/blocks to auto-register for this material:
//     "ingot"          → ${name}_ingot, ${name}_nugget
//     "plate"          → ${name}_plate
//     "dust"           → ${name}_dust
//     "rod"            → ${name}_rod
//     "gear"           → ${name}_gear
//     "wire"           → ${name}_wire
//     "coil"           → ${name}_coil
//     "raw_ore"        → raw_${name}
//     "storage_block"  → ${name}_block
//     "mek_processing" → ${name}_dirty_dust, clump, shard, crystal, slurry
//     "molten"         → molten_${name} fluid
global.MATERIALS = {
  // Minecraft
  copper:     { color: 0xff8229, ingotTexture: "base", types: ["plate", "sheet", "dust", "small_dust", "rod", "gear", "wire", "coil", "mek_processing", "molten"] },
  iron:       { color: 0xd8d8d8, ingotTexture: "base", types: ["plate", "sheet", "dust", "small_dust", "rod", "gear", "wire", "coil", "mek_processing", "molten"] },
  gold:       { color: 0xfdf55f, ingotTexture: "base", types: ["plate", "sheet", "dust", "small_dust", "rod", "gear", "wire", "coil", "molten"] },
  // Immersive Engineering
  tin:        { color: 0x465d6b, ingotTexture: "base", types: ["ingot", "sheet", "plate", "dust", "small_dust", "rod", "gear", "raw_ore", "storage_block", "mek_processing", "molten"] },
  silver:     { color: 0x83aab2, ingotTexture: "base", types: ["ingot", "sheet", "plate", "dust", "small_dust", "rod", "gear", "raw_ore", "storage_block", "mek_processing", "molten"] },
  lead:       { color: 0x453d5e, ingotTexture: "base", types: ["ingot", "sheet", "plate", "dust", "small_dust", "rod", "gear", "wire", "coil", "raw_ore", "storage_block", "mek_processing", "molten"] },
  nickel:     { color: 0xd8b87d, ingotTexture: "base", types: ["ingot", "sheet", "plate", "dust", "small_dust", "rod", "gear", "raw_ore", "storage_block", "mek_processing", "molten"] },
  steel:      { color: 0x95989e, ingotTexture: "base",    types: ["ingot", "sheet", "plate", "dust", "small_dust", "rod", "gear", "wire", "molten"] },
  // Create
  zinc:       { color: 0x96b685, ingotTexture: "base", types: ["ingot", "sheet", "plate", "dust", "small_dust", "rod", "gear", "raw_ore", "storage_block", "mek_processing", "molten"] },
  brass:      { color: 0xe9ba54, ingotTexture: "alloy",    types: ["ingot", "sheet", "plate", "dust", "rod", "gear", "storage_block", "molten"] },
  // Thermal Series
  enderium:   { color: 0x1c7aa0, ingotTexture: "superalloy",    types: ["ingot", "sheet", "plate", "dust", "rod", "gear", "storage_block", "molten"] },
  lumium:     { color: 0xffda7e, ingotTexture: "alloy",    types: ["ingot", "sheet", "plate", "dust", "rod", "gear", "storage_block", "molten"] },
  invar:      { color: 0x87928c, ingotTexture: "alloy",    types: ["ingot", "sheet", "plate", "dust", "rod", "gear", "storage_block", "molten"] },
  signalum:   { color: 0xe4340f, ingotTexture: "superalloy",    types: ["ingot", "sheet", "plate", "dust", "rod", "gear", "storage_block", "molten"] },
  // Custom
  tungsten:   { color: 0x8a8c8f, ingotTexture: "base", types: ["ingot", "sheet", "storage_block", "molten"] },
  signar:     { color: 0xc37e48, ingotTexture: "alloy",    types: ["ingot", "sheet", "storage_block", "molten"] },
};
