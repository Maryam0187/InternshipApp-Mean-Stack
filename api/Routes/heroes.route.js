const express = require('express');
const app = express();
const heroRoutes = express.Router();


heroRoutes.route('/update').post(function (req, res) {
  res.send('Hello World!')

   /* var mysql = require('mysql');

    var con = mysql.createConnection({
      host: "localhost",
      user: "abc",
      password: "123",
      database: "Node_Demo"
    });
    
    con.connect(function(err) {
      if (err) console.log(err);
      var sql = "UPDATE Heroes SET name = 'Canyon 123' WHERE ID = '1'";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
      });
    });*/
});
module.exports = heroRoutes;