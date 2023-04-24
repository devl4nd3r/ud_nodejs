const obj1 = { foo: "bar", x: 42 }
const obj2 = { foo: "baz", y: 5 }

const merge = (...objects) => ({ ...objects })
const mergeRightWay = (...objects) => Object.assign(...objects)

let mergedObj = merge(obj1, obj2)
console.log(mergedObj)
// { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 5 } }

let mergedObj1 = mergeRightWay(obj1, obj2)
console.log(mergedObj1)
//{ foo: 'baz', x: 42, y: 5 }

let mergedObj2 = merge({}, obj1, obj2)
console.log(mergedObj2)
// { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 5 } }
