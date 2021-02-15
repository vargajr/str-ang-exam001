export class Hero {
    [propname: string]: any;
    id: number = 0;
    name: string = '';
    superPower: string = '';
    address: string = '';

    constructor(properties?: Hero) {
        if (properties) {
            this.id = properties.id || 0;
            this.name = properties.name || '';
            this.superPower = properties.superPower || '';
            this.address = properties.address || '';
        }
    }
}
