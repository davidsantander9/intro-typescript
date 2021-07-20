
interface Player{
    volume: number;
    second: number;
    song: string;
    details: Details
}

interface Details{
    author: string,
    year: number,
}


const player: Player = {
    volume: 90,
    second: 36,
    song: 'Bohemian Rhapsody',
    details: {
        author: 'Fredy Mercury',
        year: 1975
    }
}

const { volume, second, song, details } = player;
const { author: authorDetail, year } = details;

console.log(volume, second, song, authorDetail, year );

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

// const [ goku, vegeta, trunks ] = dbz;
const [ , , p3 ] = dbz;
console.log( p3 );

