// 1.1
function uppercaseFunction(a, b) {
    return (a + ' ' + b).toUpperCase();
}

// 1.2
function repeatString(a, b) {
    let s = ""
    for (let i = 0; i < b; i++) {
        s += a + ' ';
    }
    return s;
}


// 1.3
const profile = {
    name: 'John Doe',
    age: 30,
}
console.log(profile.age);

// 1.4
function printProfileName(obj) {
    return `Name: ${obj.name} and Age: ${obj.age}`
}

// 1.5
const full_profile = { ...profile, country: 'USA', telephone: '1234567890' }


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
// 1.6.1
console.log(very_nested_object.user.profile.age);
// 1.6.2
console.log(very_nested_object.card_details.card_type);
// 1.6.3
console.log(very_nested_object.cart.items);
// 1.6.4
console.log(very_nested_object.cart.items.filter(item => item.price > 200));


// 1.7
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
function validateUsers(users) {
    for (let user of users) {
        if (user.age < 20) {
            console.log(`${user.name} is not allowed to vote`);
        }
        else{
            console.log(`${user.name} is allowed to vote`);
        }
    }
}
