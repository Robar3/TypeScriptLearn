function concat(word1: string,word2:string) {
    return word1+word2;
}

const helloWorld =concat('Hello ', 'World');
console.log(helloWorld);
interface  myHometaskInterface{
    howIDoIt:  string,
    simeArray: (string|number)[],
    withData:({
        howIDoIt,
        simeArray
    })[]
}
const myHometask: myHometaskInterface = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

interface MyArray<T> {
    [N: number]: T;

    reduce();
    reduce<T>(fn:(previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;

}
