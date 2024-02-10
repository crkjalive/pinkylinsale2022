const connection = require("../connection");

const getTotal = (req, res) => {

<<<<<<< HEAD
  const sql = `SELECT *, sum(quantity) as cantidad, SUM(total_price) AS total, (sum(total_price)-sum(price)) as utilidad, sum(price) as costo, MONTHNAME(registered) AS mes FROM sales NATURAL join products GROUP BY mes ORDER BY registered`
=======
  const sql = `SELECT *, sum(quantity) AS cantidad, SUM(total_price) AS total, (sum(total_price)-sum(price)) as utilidad, sum(price) as costo, MONTHNAME(registered) AS mes FROM sales NATURAL join products GROUP BY mes ORDER BY registered`
>>>>>>> 28a7aa189f53bd818ebd82f25ec5949ed099247e
  
  connection.query(sql, (err, result) => {
    if (err) {console.log('Error al buscar: ' + err)}
    else {
      if (result == "") {
        res.send('No ahí datos')
      } else {
        // console.log(result)
        // res.send(result)
        res.render('total', {data: result})
      }
    }    
  })
}

module.exports = {
  getTotal
}