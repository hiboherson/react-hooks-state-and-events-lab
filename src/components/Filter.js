
export function filterItems(items, selectedCategory) {
    if (selectedCategory === "All") {
      return items;
    }
    return items.filter(item => item.category === selectedCategory);
  }
  