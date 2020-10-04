const connection = require('../models/init').connection;

let executeDBQuery = (query, cb) => {
    connection.query(query,
        (error, results) => {
            if (error) {
                console.log(error);
                cb(error, null);
            } else {
                cb(false, JSON.stringify(results))
            }
        }
    );
}

let send = (body, cb) => {
    let query = `insert into messages (messageData, fromUser, toUser, status) 
                    values ('${body.message}' ,'${body.from}', '${body.to}', 0);`
    executeDBQuery(query, cb);
}



let getAll = (body, cb) => {
    let query = `select messageData, fromUser, id from messages where id > ${body.id} and fromUser = "${body.from}" and toUser = "${body.to}" union select messageData, fromUser, id from messages where id > ${body.id} and fromUser = "${body.to}" and toUser = "${body.from}" order by id;`
    console.log(query);
    executeDBQuery(query, cb);
}

let getNew = (body, cb) => {
    let query = `select messageData, fromUser, id from messages where id > ${body.id} and fromUser = "${body.from}" and toUser = "${body.to}"`;
    executeDBQuery(query, cb);
}

module.exports = {
    send : send,
    getAll : getAll,
    getNew : getNew
}
