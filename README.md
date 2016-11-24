##json-to-query-string
parse a json object to query string

###How to install
```
npm i json-to-query-string
```

###Example
```javascript
var parse = require('json-to-query-string');
var qString = parse({foo: 'bar', par: 'rap'});
console.log(qString); //output foo=bar&par=rap
```