

module.exports ={ 

create: (req, res) => { 
  const dbInstance = req.app.get('db')
  const { name, address, city, state, zip, img, mortgage, rent} = req.body


dbInstance.house_input([name, address, city, state, zip,img,mortgage, rent])
.then( () => res.sendStatus(200))
.catch( err => {
  console.log(err )
  res.status(500).send({errorMessage:'oops'})
})
},

delete:(req, res) => {
  const dbInstance = req.app.get('db')
  const { id } = req.params 

  dbInstance.remove_house( id )
  .then( () =>  res.sendStatus(200) )
  .catch(err => { 
    console.log(err)
    .sendStatus(500).send({errorMessage:'We hava a problem. No delete'})
  })
}

// newHouse: async (req, res ) => {
//   const db = req.app.get('db')
//   const {name, address, city, state, zip } = req.body

//   let houseNew = await db.house_input()
//   let house = houseNew[0]

//   let response = await db.house_input({ name, address, city, state, zip })
//   let createdHouse = response[0]
// }


}