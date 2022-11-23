var customerName = "bob"
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()
}
function setBestCustomer(){
     bestCustomer = "not bob"
}

function overwriteBestCustomer(){
    bestCustomer = "maybe bob"
}
const leastFavoriteCustomer = "vivian"

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "vivian"
}

changeLeastFavoriteCustomer()
console.log(leastFavoriteCustomer)
