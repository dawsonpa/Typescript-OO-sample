import Jungle from './classes/Jungle'
import Monkey from './classes/Monkey'
import Tiger from './classes/Tiger'
import Snake from './classes/Snake'
import Encoder from './modules/Encoder'
import  Frequency from './modules/Frequency';

// const encodedStr = Encoder('abc');
// console.log(encodedStr);
// const frequency = Frequency('pppooooottteeeeioas');
//
// console.log(frequency);
const monkey1 = new Monkey();
const monkey2 = new Monkey();
const tiger1 = new Tiger();
const tiger2 = new Tiger();
const snake1 = new Snake();
const snake2 = new Snake();
const animalArr = [monkey1, monkey2, tiger1, tiger2, snake1, snake2];
const jungle = new Jungle(animalArr);

jungle.soundOff();
jungle.animalsPerformRandomAction();
jungle.animalsPerformRandomAction();
jungle.animalsPerformRandomAction();
jungle.animalsPerformRandomAction()
