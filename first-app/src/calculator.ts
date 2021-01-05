export function add(x : number, y : number) : number {
    return x + y;
}

export function subtract(x : number, y : number) : number {
    return x - y;
}

//there can be ONLY ONE default export

const calculator = { add, subtract };

export default calculator;