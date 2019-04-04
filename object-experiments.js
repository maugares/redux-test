let objectOne = {
  firstName: 'Alice',
  lastName: 'Rabbithunter',
}

console.log('Value of Object One:', { ...objectOne })

// // objectTwo as REFERENCE of objectOne
// let objectTwo = objectOne
// // changes on objectTwo apply to objectOne
// objectTwo.lastName = 'The nice girl'

// console.log('Value of Object One (ref):', { ...objectOne })
// console.log('Value of Object Two (ref):', { ...objectTwo })

// // objectTwo as SHALLOW CLONE of objectOne
// objectOne = { firstName: 'Alice', lastName: 'Rabbithunter' }
// objectTwo = { ...objectOne }
// objectTwo.lastName = 'The nice girl'

// console.log('Value of Object One (shal):', { ...objectOne })
// console.log('Value of Object Two (shal):', { ...objectTwo })

// objectFour as DEEP CLONE of objectThree
let objectThree = {
  objectOne,
  prey: 'The rabbit'
}

console.log('Value of Object Three:', { ...objectThree})

objectFour = objectThree.map(items => items)
objectThree.objectOne.firstName = 'Peppy'

console.log('Value of Object Three:', { ...objectThree})
console.log('Value of Object Four:', { ...objectFour})