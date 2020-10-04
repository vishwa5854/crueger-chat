const mysql = require('mysql');

const connection = mysql.createConnection(
    {
        host: 'localhost',
        port : '3306',
        user: 'root',
        password: 'password',
        database: 'messenger'
    }
);

let connectToDB = () => {
    connection.connect(
        (error) => {
            if(error){
                console.log(error);
            }
            else {
                console.log("Connected to MySQL")
            }
        }
    );
}

module.exports = {
    connectToDB : connectToDB,
    connection : connection
}
