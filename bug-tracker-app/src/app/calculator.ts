import Logger from './logger'

export default class Calculator{
    private logger : Logger;

    constructor(logger : Logger){
        this.logger = logger;
    }

    add(x :number, y :number):number{
        this.logger.log('Add operation performed')
        return x + y;
    }

    subtract(x :number, y :number):number{
        this.logger.log('Subtract operation performed')
        return x - y;
    }
}