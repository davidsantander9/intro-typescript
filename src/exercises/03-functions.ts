
function sum(a: number, b: number): number{
    return a + b; 
}

const sumArrow = (a:number, b: number):number => {
    return a + b ;
}

function multiply( num: number, base: number = 2, anotherNumber?: number): number{
    return num * base;
}

interface CharacerLOR {
    name: string;
    lp: number,
    showLp: () => void;
}

function heal(character: CharacerLOR, healX: number): void{
    character.lp += healX; 
}

const newCharacter: CharacerLOR = {
    name: 'Daviid',
    lp: 90,
    showLp(){
        console.log('Life points', this.lp)
    }

}

newCharacter.showLp();

heal(newCharacter, 10);
