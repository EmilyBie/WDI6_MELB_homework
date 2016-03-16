//Your top chocie
var colors = ['pink','blue','yellow','green'];
for(var index=0; index < colors.length; index++) {
	console.log('My #'+(index+1)+' choice is ' + colors[index]);
}

//Even Odd reporter
for(var number = 0; number <=20; number++) {
	if(number%2 === 0) {
		console.log(number+' is even');
	} else {
		console.log(number+' is odd');
	}
}

//Multiplication Tables

for(var number=0; number <= 10; number++) {
	var result = number * 9;
	console.log(number +' * 9 = ' + result);
}

//Bonus

for(var num1 = 1; num1 <= 10; num1++) {
	for(var num2 = 1; num2 <= 10; num2 ++) {
		var result = num1 * num2;
		console.log(num1 + ' * ' + num2 +' = ' + result);
	}
}

//The Vegan Test
// On the menu tonight: Steak, fruit salad, tofurkey, pork chops.

var menuChoice = prompt('Menu tonight: Steak, fruit salad, tofurkey, pork chops');

while (menuChoice !== 'steak' && menuChoice !== 'fruit salad' && menuChoice !== 'tofurkey' && menuChoice !== 'pork chops') {
	menuChoice = prompt('Menu tonight: Steak, fruit salad, tofurkey, pork chops, please choose again.');
}

if(menuChoice === 'fruit salad' || menuChoice === 'tofurkey') {
	console.log('This cuisine is vegan friendly.');
} else if(menuChoice === 'steak' || menuChoice === 'pork chops'){
	console.log('Vgans beware');
}



















