import Animal from '../Animal'
import {AnimalType} from "../../typings/IAnimal";
import {JungleFood} from "../../typings/IJungle";

export default class Tiger extends Animal {
    constructor() {
        super(AnimalType.tigers);
        this.allergies.push(JungleFood.grain);
    }

    sleep() {
        this.energy += 5;
        console.log(`${this.type} ${this.id} sleeps and has ${this.energy} now.`)
    }
}