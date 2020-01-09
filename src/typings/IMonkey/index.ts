import IAnimal from "typings/IAnimal";

export default interface IMonkey extends IAnimal {
    play: () => void;
}