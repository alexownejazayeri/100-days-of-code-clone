// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

// age = '12'; Expects: error

let userName: string;

userName = 'Yelena';

let isVeryCool: boolean;

isVeryCool = true;

// let hobbies: null;
// hobbies = ['surfing', 'cooking', 'playing music']; <-- throws an error for anything

//======= Working w/ Arrays & Object Types =====

// More complex types

// let hobbies: string; <- this doesn't work, because we want an array
// To tell TS we want an array of strings...

let hobbies: string[]; // with an array, just include square brackets after the type annotation

hobbies = ['beat farming', 'karate', 'selling paper']; // <- adding a number throws an error

// Setting types for objects

let person: {
    name: string;
    age: number;
}; //this is a type assignment

person = {
    name: 'Ellie',
    age: 25,
};

/* 
This will throw an error
person = {
    isEmployee: true
} 
*/

let people: {
    name: string;
    age: number;
}[];