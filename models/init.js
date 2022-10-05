const mysql = require('mysql');

const connection = mysql.createConnection(
    {
        host: '45.56.107.24',
        port : '3306',
        user: 'root',
        password: 'cheppan-dengey',
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
