// let ageInYears = 12

// if(ageInYears >= 18) {
//       console.log('you can vote')
// } else {
//       console.log('you can not vote')
// }


// const dayOfWeek = 'Friday'

// if(dayOfWeek === 'Tuesday') {
//       console.log('it is tuesday')
// }
// else if(dayOfWeek === 'Saturday') {
//       console.log('it is Saturday!')
// }
// else {
//       console.log('enter a different day')
// }

const yourMoney = 50
const catPrice = 100
const dollarsLeft = yourMoney - catPrice
let absoluteValue = Math.abs(dollarsLeft);

if(yourMoney === catPrice) {
      console.log(`You have just enough to buy a cat!`)
} else if(yourMoney > catPrice) {
      console.log(`You can buy a cat and will have $${dollarsLeft} left over`)
} else {
      console.log(`You can not buy a cat. you need more money :( You need an extra $${absoluteValue} to purchase the cat.`)
}


