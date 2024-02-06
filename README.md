# boolean-checker

# ![Static Badge](https://img.shields.io/badge/npm-9.5.1-red) 

"Boolean Checker" - Takes a boolean value and returns subsequent strings.
i.e
- true: Truthy label 
- false: Falsy label 
- undefined: '-'


### Installation
```bash
npm i boolean-checker
```

### Usage
```javascript
const booleanChecker = require('boolean-checker');

let user = {
    can_edit: false
}

// Takes a mandatory 'val' which is a boolean and optional values for true and false cases.
// booleanChecker(val, <truthy label>, <falsy label>)
booleanChecker(user.can_edit, 'Can Edit', 'Cannot Edit')


booleanChecker('laksdfasdf');
//=> Uncaught TypeError: BooleanChecker wants a boolean!
//    at booleanChecker (<anonymous>:2:41)
//    at <anonymous>:1:1
```
