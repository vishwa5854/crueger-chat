const mysql = require('mysql');

const connection = mysql.createConnection(
    {
        host: 'crueger-chat-db-instance.cyjphlojaftv.us-east-1.rds.amazonaws.com',
        port : '3306',
        user: 'vishwa',
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
