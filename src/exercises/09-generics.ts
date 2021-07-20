function whatType<T>( arg: T ){
    return arg;
}

let iAmString = whatType('Hello world');
let iAmNumber = whatType(5);
let iAmArray = whatType([1,2,3,4,5,6]);
let iAmExplicit = whatType<number>( 100 );