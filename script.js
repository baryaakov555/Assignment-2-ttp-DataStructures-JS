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
