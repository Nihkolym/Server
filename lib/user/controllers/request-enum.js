const Enum = require('enumify').Enum;
 
class Requests extends Enum {}
Requests.initEnum([
    'GET', 
    'POST',
    'PUT',
    'DELETE'
]);

module.exports = Requests;