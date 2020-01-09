import IJungle, {JungleFood} from "typings/IJungle";

export enum AnimalType {tigers= 'tiger', monkey='monkey', snake='snake' }
export enum AnimalActions {sleep='sleep', eat='eat', makeSound='makeSound', play='play'}
export default interface IAnimal {
    id: string
    energy: number;
    speciesTotal: number;
    type: AnimalType
    makeSound: () => void;
    eat: () => void;
    sleep: () => void;
    actionsList: AnimalActions[];
    performRandomAction: () => void;
    setSpeciesTotal: (total: number) => void;
    jungleFood: JungleFood[];
    setJungleFood: (food: JungleFood[]) => void;
    allergies: JungleFood[]
}