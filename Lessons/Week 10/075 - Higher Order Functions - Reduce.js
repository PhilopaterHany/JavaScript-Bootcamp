/*
    - Reduce
        --- method executes a reducer function on each element of the array,
        --- resulting in a single output value.

    - Syntax
        reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
            - Accumulator => the accumulated value previously returned in the last invocation
            - Current Val => The current element being processed in the array
            - Index => The index of the current element being processed in the array.
                -- Starts from index 0 if an initialValue is provided.
                -- Otherwise, it starts from index 1.
            - Array => The Current Array
*/

let nums = [10, 20, 15, 30];

let add = nums.reduce(function (acc, current, index, arr) {
    console.log(`Acc => ${acc}`);
    console.log(`Current Element => ${current}`);
    console.log(`Current Element Index => ${index}`);
    console.log(`Array => ${arr}`);
    console.log(acc + current);
    console.log(`#############`);
    return acc + current;
}, 5);

console.log(add);
