

module.exports ={ 




app.get('/api/house/:houseName', (req, res )=> {
  const db = req.app.get('db')
  db.getHouse({house_name: req.params.houseName}).then(result => {
    res.status(200).send(result[0])
  })
})


}