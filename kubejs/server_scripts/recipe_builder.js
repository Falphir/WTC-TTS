
BlockEvents.rightClicked(event => {
    let block = event.getBlock();
    let item = event.getItem();
    let hand = event.getHand();
    let blockNBT = block.getInventory();
    let info = block.toString();
    let player = event.getPlayer();
    let off_hand = player.offHandItem.id;


    console.log("data: " + event)
    console.log("Block: " + block)
    console.log("Info: " + info)
    console.log("Hand: " + hand)
    console.log("Item: " + item)
    console.log("Off-Hand: " + off_hand)

    if (item.id == 'wtc_tweaks:recipe_builder_shaped' && block.id == 'minecraft:crafting_table') {
        let recipe = [];
        let keys = {};
        let keyMap = {};
        let currentKey = 65

        for (let i = 0; i < 9; i++) {
            let stack = blockNBT.getStackInSlot(i);
            if (stack && stack.id !== 'minecraft:air') {
                console.log("current key: " + currentKey)
                if (!keyMap[stack.id]) {
                    keyMap[stack.id] = String.fromCharCode(currentKey);
                    keys[String.fromCharCode(currentKey)] = stack.id;
                    console.log("current key: " + currentKey)
                    currentKey++;
                }
                recipe.push(keyMap[stack.id]);
            } else {
                recipe.push(' ');
            }
        }

        let recipeRows = [
            recipe.slice(0, 3).join(''),
            recipe.slice(3, 6).join(''),
            recipe.slice(6, 9).join('')
        ];

        // Generate the coded recipe string
        let codedRecipe = `{\n  output: '${off_hand}',\n  pattern: ['${recipeRows[0]}','${recipeRows[1]}','${recipeRows[2]}'],\n  key: {\n`;
        for (let key in keys) {
            codedRecipe += `    ${key}: '${keys[key]}',\n`;
        }
        codedRecipe += '  }\n},';

        console.log(codedRecipe);

        player.tell(Text.of('Click ').color(0x800080)
            .append(Text.of('here')
                .color(0xD8BFD8)
                .underlined(true)
                .bold(true)
                .click(`copy:${codedRecipe}`)
                .hover(codedRecipe)
            )
            .append(Text.of(' to copy the SHAPED recipe').color(0x800080))
        )
    }

})


