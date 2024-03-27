const name = 'Севада'
const surname = 'Иванян'
const middleName = 'Гегамович'
const birthYear = '1990'
const currentYear = '2024'

let age = 0
const work = true
const study = true
age = parseInt(currentYear) - parseInt(birthYear)
console.table({
    firstName: {Values:name},
    lastName: {Values:surname},
    middleName: {Values:middleName},
    yearOfBearth: {Values:birthYear},
    currentYear: {Values:currentYear},
    age: {Values:age},
    studying: {Values:study},
    working:{Values:work}

})