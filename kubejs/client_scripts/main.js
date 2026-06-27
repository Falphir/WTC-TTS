ItemEvents.tooltip(event => {
  event.add(/kubejs:compressed_1x_.*/, Text.gray('= 9 Storage Blocks'))
  event.add(/kubejs:compressed_2x_.*/, Text.gray('= 81 Storage Blocks'))
  event.add(/kubejs:compressed_3x_.*/, Text.gray('= 729 Storage Blocks'))
})

