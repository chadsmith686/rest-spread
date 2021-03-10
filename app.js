const filterOutOdds = (...args) => args.filter (v => v % 2 === 0)

// findMin
const findMin = (...args) => Math.min(...args)

// mergeObjects
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

// doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]

// slice and dice
const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  }

const extend = (array1, array2) => [...array1, ...array2]

const removeKey = (obj, key) => ({...obj, [key]: undefined})

const addKeyVal = (obj, key, val) => ({...obj, [key]: val })

const combine = (obj1, obj2,) => ({...obj1, ...obj2})

const update = (obj, key, val) => ({...obj, [key]: val})