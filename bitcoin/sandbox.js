const btcConvert = require('./index');

console.log(btcConvert(4.6, 'Satoshi', 'BTC'));
console.log(btcConvert(2, 'BTC', 'bit'));

console.log(btcConvert.units());
if(btcConvert.units().includes('dBTC'))
{
  console.log('yes');
}
else {
  console.log('No');
}
btcConvert.addUnit('dBTC', 0.1);

console.log(btcConvert.units());
if(btcConvert.units().includes('dBTC'))
{
  console.log('yes');
}
else {
  console.log('No');
}

btcConvert.removeUnit('dBTC');
console.log(btcConvert.units());

if(btcConvert.units().includes('dBTC'))
{
  console.log('yes');
}
else {
  console.log('No');
}
