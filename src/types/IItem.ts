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
    protons?: number;
    neutrons?: number;
}

export default IItem;
export { ItemCategoryEnum };