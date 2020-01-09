import Animal from '../Animal'
import {AnimalActions, AnimalType} from "../../typings/IAnimal";
import IMonkey from "../../typings/IMonkey";

export default class Monkey extends Animal implements IMonkey {
    constructor() {
        super(AnimalType.monkey);
        this.actionsList.push(AnimalActions.play);
    }

    eat() {
        this.energy += 2;
    }

    makeSound() {
        if(this.energy >= 4) {
            this.energy -= 4;
            console.log(`${this.type} ${this.id} makes a sound and has ${this.energy} now.`)
        } else {
            console.error(`${this.type} ${this.id} not enough energy. Needs to eat or sleep first.`)
        }
    }

    play() {
        if(this.energy >= 8) {
            this.energy -= 8;
            console.log(`${this.type} ${this.id} makes a sound Ooo Ooo Ooo and has ${this.energy} now.`)
        } else {
            console.error(`Monkey too tired. ${this.type} ${this.id} not enough energy. Needs to eat or sleep first.`)
        }
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
            case AnimalActions.play:
                this.play();
                break;
            default:
                console.log(`No action performed and has ${this.energy} now.`)
        }
    }

}