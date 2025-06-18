//.ForEach

function myForEach(array, action)
{
    for (let i = 0; i < array.length; i++)
    {
        action(array[i]);
    }
}

//.map

function myMap(array, action)
{
    let newArray = [];

    for (let i = 0; i < array.length; i++)
    {
        newArray[i] = action(array[i]);
    }

    return newArray;
}

//.filter

function myFilter(array, condition)
{
    let newArray = [];

    for (let i = 0; i < array.length; i++)
    {
        if (condition(array[i]))
        {
            newArray[newArray.length] = array[i];
        }
    }

    return newArray;
}

//.some

function mySome(array, condition)
{
    for (let i = 0; i < array.length; i++)
    {
        if (condition(array[i]))
        {
            return true;
        }
    }

    return false;
}

//.every

function myEvery(array, condition)
{
    for (let i = 0; i < array.length; i++)
    {
        if (!condition(array[i]))
        {
            return false;
        }
    }
    return true
}

//.reduce

function myReduce(array, reducer, initialValue)
{
    let accumulator;
    let startIndex;

    if (initialValue !== undefined)
    {
        accumulator = initialValue;
        startIndex = 0;
    }   
    else if (initialValue === undefined)
    {
        accumulator = array[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < array.length; i++)
    {
        accumulator = reducer(accumulator, array[i])
    }

    return accumulator;
}

//.includes

function myIncludes(array, target)
{
    for (let i = 0; i < array.length; i++)
    {
        if (array[i] === target)
        {
            return true;
        }
    }

    return false;
}

//.indexOf

function myIndexOf(array, target)
{
    for (let i = 0; i < array.length; i++)
    {
        if (array[i] === target)
        {
            return i;
        }
    }

    return -1;
}

//.push

function myPush(array, value)
{
    array[array.length] = value;

    return array.length;
}

//.lastIndexOf

function myLastIndexOf(array, target)
{
    for (let i = array.length - 1; i >=0; i--)
    {
        if (array[i] === target)
        {
            return i;
        }
    }

    return -1;
}

//.keys

function myKeys(object)
{
    let array = [];

    for (let key in object)
    {
        array[array.length] = key;
    }

    return array;
}

//.values

function myValues(object)
{
    let array = [];

    for (let value in object)
    {
        array[array.length] = object[value];
    }

    return array;
}

console.log("***********************testing***********************");

//testing myForEach

console.log("myForEach prints out each element of the array:")

let myForEachArray = [1,2,3,4,5];

myForEach(myForEachArray, console.log);

console.log("*****************************************************");

//testing myMap

console.log("myMap multiplies each element of the array by 2 and returns a new array with the results")

let myMapArray = [1,2,3,4,5];

function myMapAction(x)
{
    x = x * 2;
    return x;
}

console.log(myMap(myMapArray, myMapAction));

console.log("*****************************************************");

//testing myFilter

console.log("myFilter checks each element of the array if it's smaller or equals to 3 and returns a new array with those numbers")

let myFilterArray = [1,2,3,4,5];

function myFilterCondition(x)
{
    if (x <= 3)
    {
        return true
    }
}

console.log(myFilter(myFilterArray, myFilterCondition));

console.log("*****************************************************");

//testing mySome

console.log("mySome runs a condition over each element of the array until it finds 1 that meets the condition, if it does, it returns true")

let mySomeArray = [1,2,3,4,5];

function mySomeCondition(x)
{
    if (x > 3)
    {
        return true
    }
}

console.log(mySome(mySomeArray, mySomeCondition));

console.log("*****************************************************");

//testing myEvery

console.log("myEvery runs a condition over all elements of the array and checks if all of them meet the condition, if all of them do, it returns true")

let myEveryArray = [1,2,3,4,5];

function myEveryCondition(x)
{
    if (x < 6)
    {
        return true
    }
}

console.log(myEvery(myEveryArray, myEveryCondition));

console.log("*****************************************************");

//testing myReduce

console.log("myReduce goes through each element of the array and returns a combined single value using a provided function")

let myReduceArray = [1,2,3,4,5];

function myReduceAddNumbers(total, arrayIndexValue)
{
    return total + arrayIndexValue;
}

console.log(myReduce(myReduceArray, myReduceAddNumbers ,0));

console.log("*****************************************************");

//testing myIncludes

console.log("myIncludes looks through each element of the array for a specific value, if the array has that value, it returns true")

let myIncludeArray = ["dog", "cat", "bunny"];

console.log(myIncludes(myIncludeArray, "bunny"));

console.log("*****************************************************");

//testing myIndexOf

console.log("myIndexOf looks through each element of the array for a specific value, if the array has that value, it returns the index in which the value exists at")

let myIndexOfArray = ["dog", "cat", "bunny"];

console.log(myIndexOf(myIndexOfArray, "bunny"));

console.log("*****************************************************");

//testing myPush

console.log("myPush adds an element to the end of the array and returns the new length of the array");

let myPushArray = [1,2,3,4,5];

myPush(myPushArray, 6);

console.log(myPushArray);

console.log("*****************************************************");

//testing myLastIndexOf

console.log("myLastIndexOf looks through each element of the array starting from the last one for a specific value, if the array has that value, it returns the last index in which the value exists at");

let myLastIndexOfArray = ["dog", "cat", "bunny", "axolotl", "guinea pig", "bunny", "hamster"];

console.log(myLastIndexOf(myLastIndexOfArray, "bunny"));

console.log("*****************************************************");

//testing myKeys

console.log("myKeys accepts an object and returns an array filled with the keys of that object");

let myKeysObject =
{
    Name: "Bar",
    Age: "25",
    Favorite_Show: "Attack on Titan"
};

console.log(myKeys(myKeysObject));

console.log("*****************************************************");

//testing myValues

console.log("myValues accepts an object and returns an array filled with the values of that object");

let myValuesObject =
{
    Name: "Bar",
    Age: "25",
    Favorite_Show: "Attack on Titan"
};

console.log(myValues(myValuesObject));

console.log("*****************************************************");