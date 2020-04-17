import Frequency from '../../modules/Frequency'

describe('Frequency test', () => {
    it('should equal ', () => {
        const str = 'aabcoollllAL ___ ! LlB';
        const frequencyObj = Frequency(str);
        expect(frequencyObj['a']).toEqual(3);
        expect(frequencyObj['b']).toEqual(2);
        expect(frequencyObj['c']).toEqual(1);
        expect(frequencyObj['o']).toEqual(2);
        expect(frequencyObj['l']).toEqual(7);
    });
});