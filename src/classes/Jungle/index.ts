import IAnimal from "../../typings/IAnimal";
import IJungle, {JungleFood} from "../../typings/IJungle";

export default class Jungle implements IJungle {
    animals: IAnimal[];
    food: JungleFood[] = [JungleFood.bugs, JungleFood.fish, JungleFood.grain, JungleFood.meat];
    constructor(animals: IAnimal[]) {
        this.animals = animals;
        this.initializeAnimals()
    }

    get speciesTotals() {
        const populateTotals = {
            tiger: 0,
            monkey: 0,
            snake: 0
        };

        this.animals.forEach((animal: IAnimal) => {
            populateTotals[animal.type] += 1;
        });

        return populateTotals;
    }

    initializeAnimals() {
        const totals = this.speciesTotals;
        this.animals.forEach((animal: IAnimal) => {
            animal.setSpeciesTotal(totals[animal.type]);
            animal.setJungleFood(this.food);
        })

    }

    soundOff() {
        this.animals.forEach((animal: IAnimal) => {
            animal.makeSound();
        })
    }



    animalsPerformRandomAction() {
        this.animals.forEach((animal: IAnimal) => {
            animal.performRandomAction();
        })
    }
}