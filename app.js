let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function pusher(thisArr, thisValue) {
    thisArr.push(thisValue);
    return thisArr;
}

console.log(pusher(myArr, "pushThis"));

function splicer(thisArr) {
    thisArr.splice(4, 3, "spliceAddedThis", "And This");
    return thisArr;
}

console.log(splicer(myArr));

function slicer(thisArr) {
    let newArr = thisArr.slice(3, 6);
    return newArr;
}

console.log(slicer(myArr));