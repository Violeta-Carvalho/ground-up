enum ItemCategoryEnum {
    Fundamental,
    Subatomic,
    Atom,
    Molecule,
}

interface IItem {
    name: string;
    category: string;
    description: string;
}

export default IItem;
export { ItemCategoryEnum };