
/*
    ===== Código de TypeScript =====
*/

let skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character{
    name: string;
    hp: number;
    skills: string[];
    natalTown?: string;
}

const character: Character = {
    name: 'David',
    hp: 100,
    skills: ['Bash', 'Counter', 'Healing']
}

character.natalTown = 'Iztapalapa';


console.table(character);

