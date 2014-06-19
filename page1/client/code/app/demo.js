// client/code/app/demo.js

// define the number to square (vars are local to this file by default)
var number = 12;

ss.rpc('app.square', number, function(response){
  alert(number + ' squared is ' + response);
});
