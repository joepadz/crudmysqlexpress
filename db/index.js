const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'P@ssw0rd',
    user: 'root',
    database: 'dbtest',
    host:'localhost',
    port:'3306'
})

let chirdb ={}

chirdb.all = () => {
    return new Promise((resolve, reject) =>{
        pool.query("SELECT * FROM employee", (err, results) =>{
            if(err){
                return reject(err)
            }
            return resolve(results)
        })
    })
}

chirdb.one = (id)=>{
    return new Promise((resolve, reject) => {
        pool.query("SELECT * FROM employee WHERE id = ?", [id] ,(err, results) =>{
            if(err){
                return reject(err)
            }
            return resolve(results[0])
        })
    })
}

module.exports = chirdb