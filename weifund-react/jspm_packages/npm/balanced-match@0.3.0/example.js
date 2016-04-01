/* */ 
var balanced = require('../balanced-match@0.3.0.json!systemjs-json');
console.log(balanced('{', '}', 'pre{in{nested}}post'));
console.log(balanced('{', '}', 'pre{first}between{second}post'));
