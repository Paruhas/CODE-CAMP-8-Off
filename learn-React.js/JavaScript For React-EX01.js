const auth = {
  token: 'xxxxxxxxxxxxx',
  user: {
    username: 'Michael',
    email: 'michael@codecamp.com',
    address: {
      postCode: '10400',
      province: 'KTM'
    }
  },
  cart: [
    {
      product: 'iPhone4',
      amount: 1,
      price: 1999,
      vendor: {
        name: 'Apple',
        country: 'USA'
      }
    },
    {
      product: 'Chargers',
      amount: 1,
      price: 49,
      vendor: {
        name: 'Aukey',
        country: 'England'
      }
    }
  ],
  totalPrice: 2048
}

const { 
  user: { 
    address: { 
      postCode , 
      province } 
    }, 
    cart: [ { 
      vendor: 
      { name , 
        country } 
      } , { 
        vendor: 
        { name:name1 , 
          country:country1 }  
      }
    ]
} = auth;


console.log(auth)
console.log(name)
console.log(country)
console.log(name1)
console.log(country1)