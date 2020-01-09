import Animal from '../Animal'
import {AnimalType} from "../../typings/IAnimal";

export default class Snake extends Animal {
    constructor() {
        super(AnimalType.snake)
    }
}