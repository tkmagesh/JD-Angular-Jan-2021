import Calculator from "./calculator";
import Logger from './logger';

describe("Calculator", () => {

    let calc : Calculator,
        x : number,
        y : number,
        loggerSpy : Logger;

    beforeEach(() => {
        loggerSpy = jasmine.createSpyObj("Logger", ["log"]);
        calc = new Calculator(loggerSpy);
        x = 10,
        y = 20;
    });

    it("Should add 2 numbers", () => {
        
        //arrange
        const expectedResult = 30;

        //act
        const actualResult = calc.add(x,y);

        //assert
        expect(actualResult).toBe(expectedResult);
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
        expect(loggerSpy.log).toHaveBeenCalledWith('Add operation performed')

    });

    it("Should subtract 2 numbers", () => {
        
        //arrange
        const expectedResult = -10;

        //act
        const actualResult = calc.subtract(x,y);

        //assert
        expect(actualResult).toBe(expectedResult);
        expect(loggerSpy.log).toHaveBeenCalled();

    });

})