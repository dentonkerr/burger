var connection = require("../config/connection.js");

// function printQuestionMarks(num) {
//     var arr = [];
//     for (var i = 0; i < num; i++) {
//         arr.push("?");
//     }
//     return arr.toString();
// };

// function objToSql(ob) {
//     var arr = [];

//     for (var key in ob) {
//         var value = ob[key];

//         if (Object.hasOwnProperty.call(ob, key)) {

//             if (typeof value === "string" && value.indexOf(" ") >= 0) {
//                 value = "'" + value + "'";
//             }
//             arr.push(key + "=" + value);
//         }
//     };
//     return arr.toString();
// };

// insertOne: function (table, cols, vals, cb) {
//     var queryString = "INSERT INTO " + table;

//     queryString += " (";
//     queryString += cols.toString();
//     queryString += ") ";
//     queryString += "VALUES (";
//     queryString += printQuestionMarks(vals.length);
//     queryString += ") ";

//     connection.query(queryString, vals, function (err, result) {
//         if (err) {
//             throw err;
//         }
//         cb(result);
//     });
// },




// mysql npm module
// SQL Statements with ? or ?? are referenced in passed array
// primitives are quoted and escaped with ? //eg  3 turns into "3"
// Double ?? used for column and table names and escaped with backticks, eg tableName becomes `tableName`
//ergo SELECT ?? FROM ?? WHERE ?? = ?, [columnName, tableName, columnName2, value]
// SELECT `columnName` FROM `tableName` WHERE `columnName2` = "value"
// objects are turned into column value pairs, eg { col: val } -> `col` = "val"
// mulitple keys are separated with commas, eg {col: val, col2: val2} -> `col` = "val", `col2` = "val2"
// arrays are turned into lists with commas, eg [3,4,5] -> "3", "4", "5" 

    var orm = {
        selectAll: function (table, cb) {
            var queryString = "SELECT * FROM ??";
            connection.query(queryString, [table], function (err, result) {
                if (err) {
                    throw err;
                }
                cb(result);
            });
        },
        insertOne: function (table, cols, vals, cb) {
            var queryString = "INSERT INTO ?? (??) VALUES (?)";

            connection.query(queryString, [table, cols, vals], function (err, result) {
                if (err) {
                    throw err;
                }
                cb(result);
            });
        },
        updateOne: function (table, objColVals, condition, cb) {
            var queryString = "UPDATE ?? SET ? WHERE ?"

            connection.query(queryString, [table, objColVals, condition], function (err, result) {
                if (err) {
                    throw err;
                }
                cb(result);
            });
        }
    };

    module.exports = orm;