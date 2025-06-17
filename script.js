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

//.push

function myPush(array, value)
{
    array[array.length] = value;

    return array.length;
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







//************************************testing***********************************

//testing myMap

arr = [1,2,3,4,5];

function func(x)
{
    x = x * 2;
    return x;
}

console.log(myMap(arr, func));

//******************************************************************************

//testing mySome

arr2 = [1,2,3,4,5];

function condition(x)
{
    if (x > 3)
    {
        return true
    }
}

console.log(mySome(arr2, condition));

//******************************************************************************

//testing myIncludes

arr3 = ["dog", "cat", "bunny"];

console.log(myIncludes(arr3, "bunny"));

//******************************************************************************

//testing myPush

arr4 = [1,2,3,4,5];

myPush(arr4, 6);

console.log(arr4);

//******************************************************************************

//testing myKeys

var object =
{
    Name: "Bar",
    Age: "25",
    Favorite_Show: "Attack on Titan"
};

console.log(myKeys(object));

//******************************************************************************

//testing myValues

var object =
{
    Name: "Bar",
    Age: "25",
    Favorite_Show: "Attack on Titan"
};

console.log(myValues(object));

//******************************************************************************