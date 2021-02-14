/**
 * Problem 0 - PART A
 * @type {{activities: [string, string], name: string, catFriends: [{furcolor: string, activities: [string, string], name: string, weight: number}, {activities: [string, string], name: string, weight: number}]}}
 */

let cat = {
    name: "Fluffy",
    activities: ["play", "eat cat food"],
    catFriends: [
        {
            name: "bar",
            activities: ["be grumpy", "eat bread omblet"],
            weight: 8,
            furcolor: "white"
        },
        {
            name: "foo",
            activities: ["sleep", "pre-sleep naps"],
            weight: 3
        }
    ]
}
//Add height and weight to Fluffy
cat.height = 20;
cat.weight = 2;

//Fluffy name is spelled wrongly. Update it to Fluffyy
cat.name = "Fluffyy";

//List all the activities of Fluffyy"s catFriends.
//Print the catFriends names.
let totalCatFriendsWeight = 0;
let allActivities = cat.activities;
for (let catFriendsIndex in cat.catFriends) {
    if (cat.catFriends.hasOwnProperty(catFriendsIndex)) {
        console.log(cat.catFriends[catFriendsIndex].activities);
        console.log(cat.catFriends[catFriendsIndex].name);
        totalCatFriendsWeight += Number(cat.catFriends[catFriendsIndex].weight);
        allActivities = [...allActivities, ...cat.catFriends[catFriendsIndex].activities];
    }
}

//Print the total weight of catFriends
console.log(totalCatFriendsWeight);

//Print the total activities of all cats (op:6)
console.log(allActivities);

//Add 2 more activities to bar & foo cats
cat.catFriends[0].activities.push("Run", "catch rats");
cat.catFriends[1].activities.push("play", "catch and play with rats");

//Update the fur color of bar
cat.catFriends[0].furcolor = "green";

/**
 * Problem 0 - PART B
 * @type {{year: number, model: string, accidents: [{date: string, atFaultForAccident: boolean, damage_points: string}, {date: string, atFaultForAccident: boolean, damage_points: string}, {date: string, atFaultForAccident: boolean, damage_points: string}], make: string}}
 */
let myCar = {
    make: "Bugatti",
    model: "Bugatti La Voiture Noire",
    year: 2019,
    accidents: [
        {
            date: "3/15/2019",
            damage_points: "5000",
            atFaultForAccident: true
        },
        {
            date: "7/4/2022",
            damage_points: "2200",
            atFaultForAccident: true
        },
        {
            date: "6/22/2021",
            damage_points: "7900",
            atFaultForAccident: true
        }
    ]
}
//Loop over the accidents array. Change atFaultForAccident from true to false.
for (let accidentIndex in myCar.accidents) {
    if (myCar.accidents.hasOwnProperty(accidentIndex)) {
        myCar.accidents[accidentIndex].atFaultForAccident = false;
    }
}

//Print the dated of my accidents
for (let accidentIndex in myCar.accidents) {
    if (myCar.accidents.hasOwnProperty(accidentIndex)) {
        console.log(myCar.accidents[accidentIndex].date);
    }
}
/**
 * Problem 1
 */
let obj = {name: "RajiniKanth", age: 33, hasPets: false};

function printAllValues(obj) {
    return Object.values(obj);
}

printAllValues(obj);

/**
 * Problem 2
 */
let obj1 = {name: "RajiniKanth", age: 33, hasPets: false};


function printAllKeys(obj) {
    return Object.keys(obj);
}

printAllKeys(obj1);

/**
 * Problem 3
 */
let object = {name: "ISRO", age: 35, role: "Scientist"};

function convertListToObject(obj) {
    return Object.entries(obj);
}

convertListToObject(object);
/**
 * Problem 4
 */
let arr = ["GUVI", "I", "am", "a geek"];

function transformFirstAndLast(arr) {
    let res = {};
    res[arr[0]] = arr[arr.length - 1];
    return res;
}

transformFirstAndLast(arr);

/**
 * Problem 5
 */
let arr1 = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];

function fromListToObject(arr) {
    let newObject = {};
    for (let arrValue of arr) {
        newObject[arrValue[0]] = arrValue[1];
    }
    return newObject;
}

fromListToObject(arr1);

/**
 * Problem 6
 */
let arr2 = [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];

function transformEmployeeData(arr) {
    let transformEmployeeList = [];
    for (let arrayValues of arr) {
        transformEmployeeList.push(fromListToObject(arrayValues));
    }
    return transformEmployeeList;
}

transformEmployeeData(arr2);

/**
 * Problem 7
 */

let expected = {foo: 5, bar: 6};
let actual = {foo: 5, bar: 6}

function assertObjectsEqual(actual, expected, testName) {
    actual = JSON.stringify(actual);
    expected = JSON.stringify(expected);
    if (actual === expected) {
        return "Passed"
    } else {
        return `FAILED [${testName}] Expected ${expected}, but got ${actual}`;
    }
}

let result = assertObjectsEqual(actual, expected, "detects that two objects are equal");
console.log(result)

/**
 * Problem 8
 */
let securityQuestions = [
    {
        question: "What was your first pet’s name?",
        expectedAnswer: "FlufferNutter"
    },
    {
        question: "What was the model year of your first car?",
        expectedAnswer: "1985"
    },
    {
        question: "What city were you born in?",
        expectedAnswer: "NYC"
    }
]

function checkSecurityQuestions(securityQuestions, question, ans) {
    for (let questionAnswer of securityQuestions) {
        if (questionAnswer.question === question && questionAnswer.expectedAnswer === ans) {
            return true;
        }
    }
    return false;
}

//Test case1:
let ques = "What was your first pet’s name?";
let ans = "FlufferNutter";
let status = checkSecurityQuestions(securityQuestions, ques, ans);
console.log(status);
// Test case2:
ques = "What was your first pet’s name?";
ans = "DufferNutter";
status = checkSecurityQuestions(securityQuestions, ques, ans);
console.log(status);

/**
 * Problem 9
 */
let students = [
    {name: "Siddharth Abhimanyu", age: 21},
    {name: "Malar", age: 25},
    {name: "Maari", age: 18},
    {name: "Bhallala Deva", age: 17},
    {name: "Baahubali", age: 16},
    {name: "AAK chandran", age: 23},
    {name: "Gabbar Singh", age: 33},
    {name: "Mogambo", age: 53},
    {name: "Munnabhai", age: 40},
    {name: "Sher Khan", age: 20},
    {name: "Chulbul Pandey", age: 19},
    {name: "Anthony", age: 28},
    {name: "Devdas", age: 56}
];

function returnMinors(arr) {
    return arr.filter((student) => {
        return student.age < 20;
    })
}

console.log(returnMinors(students));
