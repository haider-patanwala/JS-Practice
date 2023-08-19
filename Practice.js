var obj = {
    a: 1,
    b: 2,
    c: null,
    d: undefined,
}

let newObj = Object.entries(obj)

// let filObj = Object.fromEntries(newObj.filter(([_, val]) => val != null))

// let jsonObj = JSON.stringify(filObj)
// let jsonObjp = JSON.parse(jsonObj)
// let jsonObja = Object.entries(jsonObjp)


console.log(newObj);
console.log(newObj.indexOf(a))
// console.log(filObj);
// console.log(jsonObj);
// console.log(jsonObjp);
// console.log(jsonObja);