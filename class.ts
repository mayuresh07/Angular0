class Empolyee {
    id: number;
    name: string;
    address: string;

    constructor(id: number, name: string, address: string) {
        this.id = id
        this.name = name
        this.address = address
    }

    getNameWithAddress() : string{
        return `${this.name} stays at ${this.address}`
    }
}

let asshole = new Empolyee(80085, "BHEN KA LAVDA", "raste pe")
console.log(asshole)

let address = asshole.getNameWithAddress();
console.log(address)

class Manager extends Empolyee
{
    constructor(id: number, name: string, address: string)
    {
        super(id, name, address)
    }
    getNameWithAddress(): string {
        return `${this.name} is Manager at ${this.address}`
    }
}

