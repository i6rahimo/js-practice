let test = {
    prop: 'somtext',
}

let test_link = test;

console.dir(test_link.prop)
console.dir(test.prop)

test.newProp = 'hello';

delete test.prop;

console.log(test_link.prop);
console.log(test_link.newProp);

let obj = new String('hello');
let simple = 'hey';

console.log();
