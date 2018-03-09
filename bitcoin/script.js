const convert = require('./lib/convert');
const Big = require('big.js');


console.log(convert.units());
if(convert.units().includes('dBTC'))
{
  console.log('yes');
}
else {
  console.log('No');
}
console.log(convert.addUnit('dBTC', 0.1));
convert.addUnit('dBTC', 0.1);

console.log(convert.units());

if(convert.units().includes('dBTC'))
{
  console.log('yes');
}
else {
  console.log('No');
}

convert.removeUnit('dBTC');
console.log(convert.units());

if(convert.units().includes('dBTC'))
{
  console.log('yes');
}
else {
  console.log('No');
}
