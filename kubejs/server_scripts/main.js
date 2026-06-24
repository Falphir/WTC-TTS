function toIngredient(i) {
    return i.startsWith("#")
        ? { tag: i.substring(1) }
        : { item: i }
}
