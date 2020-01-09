import {alphabet} from '../Encoder';
const frequencyObj = {}
alphabet.forEach((char: string) => {
    frequencyObj[char] = 0;
})
export default (str: string) => {
    const strArr = str.split("");

    strArr.forEach((char: string) => {
        const lowerChar = char.toLowerCase();
        frequencyObj[lowerChar] = frequencyObj[lowerChar] + 1;
    })

    return frequencyObj;
}