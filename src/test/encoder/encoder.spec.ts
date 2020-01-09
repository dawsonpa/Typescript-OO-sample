import Encoder from '../../modules/Encoder'

describe('Encoder Tests', () => {
    it('should not equal', () => {
        const str = 'aBcD';
        const encStr = Encoder(str);
        expect(encStr === 'aBcD').toEqual(false);
        expect(encStr === 'abcd').toEqual(false);

    });
    it('should equal', () => {
        const str = 'aBcD';
        const encStr = Encoder(str);

        expect(encStr).toEqual('zyxw')

    })
});