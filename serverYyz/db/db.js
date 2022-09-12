const mysql  = require('mysql');

exports.base = (sql,data,callback) => {
    const connection = mysql.createConnection({
        host:'127.0.0.1',
        user:'root',
        password:'123456',
        database:'day'
    });
    connection.connect();

    connection.query(sql,data,function(error,results,fields){
        if(error) throw error;
         callback(results,error);
    })
    connection.end();
}
