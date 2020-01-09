import IAnimal, {AnimalActions, AnimalType} from "../../typings/IAnimal";
import {JungleFood} from "../../typings/IJungle";

const  uuid = require('uuid/v1');

export default class Animal implements IAnimal {
    id: string;
    energy: number = 10;
    speciesTotal: number = 0;
    type: AnimalType;
    actionsList: AnimalActions[] = [AnimalActions.eat, AnimalActions.makeSound, AnimalActions.sleep];
    jungleFood: JungleFood[];
    allergies: JungleFood[] = [];
    constructor(type: AnimalType) {
        this.id = uuid();
        this.type = type;
    }

    setJungleFood(food: JungleFood[]) {
        this.jungleFood = food;
    }

    setSpeciesTotal(total: number) {
        this.speciesTotal = total;
    }

    makeSound() {
        if(this.energy >= 3) {
            this.energy -= 3;
            console.log(`${this.type} ${this.id} makes a sound and has ${this.energy} now.`)

        } else {
            console.error(`${this.type} ${this.id} not enough energy. Needs to eat or sleep first.`)
        }
    }

    eat() {
        const food = this.jungleFood[Math.floor(Math.random() * (this.jungleFood.length))]
        if(this.allergies.indexOf(food) === -1) {
            this.energy += 5;
            console.log(`${this.type} ${this.id} eats ${food} and has ${this.energy} now.`)
        } else {
            console.error(`${this.type} ${this.id} cant eat ${food}.`)
        }
    }

    sleep() {
        this.energy += 10;
        console.log(`${this.type} ${this.id} sleeps and has ${this.energy} now.`)
    }

    performRandomAction() {
        const randomAction = this.actionsList[Math.floor(Math.random() * (this.actionsList.length))];

        switch (randomAction) {
            case AnimalActions.sleep:
                this.sleep();
                break;
            case  AnimalActions.makeSound:
                this.makeSound();
                break;
            case AnimalActions.eat:
                this.eat();
                break;
            default:
                console.log(`No action performed and has ${this.energy} now.`)
        }
    }
}