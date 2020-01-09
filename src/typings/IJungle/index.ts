import IAnimal from "typings/IAnimal";

export enum JungleFood { meat='meat', fish='fish', bugs='bugs', grain='grain' }
export default interface IJungle {
    animals: IAnimal[];
    soundOff: () => void;
    animalsPerformRandomAction: () => void;
    food: JungleFood[];
    initializeAnimals: () => void;
}