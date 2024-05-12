// 1.1
// create a function that take 2 arguments
// 1. the first argument is string
// 2. the second argument is another string
// return should be uppercase of both strings concatenated by a space
// e.g., fn('hello', 'world') => 'HELLO WORLD'



// 1.2
// create a function that take 2 arguments
// 1. the first argument is string
// 2. the second argument is a number
// return should be the string repeated by the number by appending a space
// e.g., fn('hello', 3) => 'hello hello hello'



// 1.3
// suppose I have an object
const profile = {
    name: 'John Doe',
    age: 30,
}
// print age of the profile object



// 1.4
// suppose I want to pass the "profile" object to a function
// now this function should print the name of the profile object
// like this 'Name: John Doe and Age: 30'
//e.g., fn(profile) => 'Name: John Doe and Age: 30'


// 1.5
const full_profile = {}
// you need to copy the existing "profile" object to the "full_profile" object
// and add a new key-value pair to the "full_profile" object
// e.g., full_profile = { name: 'John Doe', age: 30, country: 'USA', telephone: '1234567890' }




// 1.6
const very_nested_object = {
    cart :{
        items: [
            {
                id: 1,
                name: 'item 1',
                price: 100,
            },
            {
                id: 2,
                name: 'item 2',
                price: 200,
            },
            {
                id: 3,
                name: 'item 3',
                price: 300,
            },
        ]
    },
    user: {
        profile: {
            name: 'John Doe',
            age: 30,
        }
    },
    card_details: {
        card_number: '1234567890',
        card_type: 'VISA',
    }
}
// 1. print age of the user
// 2. print the name card type
// 3. print all the items in cart
// 4. *print only those items which price is greater than 200


//1.7
// you have to write a simple validation function that takes an array of object
const users = [
    {
        name: 'John Doe',
        age : 30,
    },
    {
        name: 'Jane Doe',
        age: 25,
    },
    {
        name: 'Alice',
        age: 20,
    },
    {
        name: 'Bob',
        age: 15,
    },
    {
        name: 'Charlie',
        age: 40,
    }
]
// any user under 20 is not allowed to vote
// so, need to out put like this
// "John Doe is allowed to vote"
// "Bob is not allowed to vote"
// hint: use a for...of loop




