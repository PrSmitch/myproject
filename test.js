class Table {
    constructor(nameHero, role, meta) {
        this.nameHero = nameHero;
        this.role = role;
        this.meta = meta;
    }

    print() {

    }
}

const jug = new Table ('Juggernaut', 'carry', true);
const cm = new Table ('CrystalMaiden', 'support', false);

console.table ([jug,cm]);