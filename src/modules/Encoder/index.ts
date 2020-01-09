export const alphabet = ['a','b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

export default (str: string) => {
    const encodedStrArr = [];
    const strArr = str.split("");
    strArr.forEach((char: string) => {
        const ind = alphabet.indexOf(char.toLowerCase());
        const encodedInd = 25 - ind;
        const encodedChar = alphabet[encodedInd];
        encodedStrArr.push(encodedChar);
    });

    return encodedStrArr.join("")
}