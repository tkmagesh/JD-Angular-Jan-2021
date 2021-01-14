import { TrimTextPipe } from './trimText.pipe';

describe('TrimText Pipe', () => {
    let trimTextPipe : TrimTextPipe;

    beforeEach(() => {
        trimTextPipe = new TrimTextPipe();
    })

    it('should return the given string if length < 30', () => {
        let inputString = 'A short string',
            expectedResult = 'A short string';

        let result = trimTextPipe.transform(inputString);

        expect(result).toBe(expectedResult);

    });

    it('should return the truncated string if length >= 30', () => {
        let inputString = 'This is a longer string to test the functionality of the trimText pipe to see if it truncates a longer string',
            expectedResult = 'This is a longer string to tes...';

        let result = trimTextPipe.transform(inputString);

        expect(result).toBe(expectedResult);

    });


})