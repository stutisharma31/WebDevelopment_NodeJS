const querystring=require('querystring');
const queryString='fee=bar&baz=qux';
const parsedQuery=querystring.parse(queryString);
console.log(parsedQuery);