import todayEpoch from '../todayEpoch';

describe('todayEpoch', () => {
    it('should be able to convert todays date to epoch equivalent', () => {
        expect(todayEpoch()).toEqual(Math.floor(Date.now() / 1000));
    });
});
