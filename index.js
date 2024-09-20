//alert('Я JavaScript!')

// let name 
// let admin
// naem = "Иван"
// admin = naem
// alert(admin)

// let name = "Ilya";
// alert( `hello ${1}` ); // ?
// alert( `hello ${"name"}` ); // ?
// alert( `hello ${name}` ); // ?

// var Name = prompt("Как Вас зовут?");
//     document.write("Привет, " + Name + "!");

// let a = 1, b = 1;
// let c = ++a; // ?
// let d = b++; // ?
// alert(b)

// let a = 2;
// let x = 1 + (a *= 2);
// alert(x)

// let a = +prompt("Первое число?", 1);
// let b = +prompt("Второе число?", 2);
// alert(a + b); // 12

// 7 > 5
// "стол" > "стул"
// "4" > "52"
// undefined == null
// undefined === null
// null == "\n0\n"
// null === +"\n0\n"
// alert(7 > 5)
// alert("стол" > "стул")
// alert("4" > "52")


// if ("0") {
//     alert( 'Привет' );
//   }
  

// let value = prompt('Какое "официальное" название JavaScript?', '');
//     if (value == 'ECMAScript') 
//     {
//         alert('Верно!');
//     }
//     else
//     {
//         alert('Не знаете? ECMAScript!');
//     }
    
    
// let value = prompt('Введите число')
// if (value > 0) 
//   {
//     alert( 1 );
//   } 
//   else if (value < 0) 
//   {
//     alert( -1 );
//   } 
//   else 
//   {
//     alert( 0 );
//   }

// let result;
// let a = +prompt('введите число')
// let b = +prompt('введите число')
// if (a + b < 4)
// {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }
// alert(result)

// let message = prompt('введите текст');
// if (login == 'Сотрудник') 
// {
//   message = 'Привет';
// } 
// else if (login == 'Директор') 
// {
//   message = 'Здравствуйте';
// } 
// else if (login == '') 
// {
//   message = 'Нет логина';
// } 
// else 
// {
//   message = '';
// }

// alert( null || 4 || undefined );

// alert( alert(1) || 2 || alert(3) );

// alert( 1 && null && 2 );

// alert( alert(1) && alert(2) );

// alert( null || 2 && 3 || 4 );

// let value = NaN;

// value &&= 10;
// value ||= 20;
// value &&= 30;
// value ||= 40;

// alert(value);

// if (age >= 14 && age <= 90) 

// if (age < 14 || age > 90)

// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );

// let userName = prompt("Кто там?", ''); 

// if (userName === 'Админ') {

//   let pass = prompt('Пароль?', '');

//   if (pass === 'Я главный') {
//     alert( 'Здравствуйте!' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Отменено' );
//   } else {
//     alert( 'Неверный пароль' );
//   }
// } else if (userName === '' || userName === null) {
//   alert( 'Отменено' );
// } else {
//   alert( "Я вас не знаю" );
// }

// function add(a, d){
//     return (a - d);
// }
// function add(a, d){
//     return (a + d);
// }
// console.log(add(2, 3));

// let x = 2;
// let y = 3;
// console.log('x + y =', x + y)
// console.log('x - y =', x - y)
// console.log('x ** 0 =', x ** 0)
// console.log('y ** 0 =', x ** 0)

// let number = prompt("Введите число: ");

// if (number > 0) {
//   alert("Число положительное.");
// } else if (number < 0) {
//   alert("Число отрицательное.");
// } else {
//   alert("Число равно нулю.");
// }

// let number = +prompt()
// let number2 = +prompt()
// let number3 = +prompt()
// let number4 = +prompt()
// alert(number + number2 + number3 + number4 / 4)

// let name = prompt('введите имя')
// let age = prompt('введите возраст')
// console.log(name,age)

// let number = prompt('введите число')
// if (number % 2 == 0) {
//     alert ("Число четное")
// }
// else {
//     alert("Число нечетное")
// }

// function Number(number) {
//     if (number < 0) {
//         console.log("Число отрицательное.");
//     } else {
//         console.log("Число не отрицательное.");
//     }
// }
// Number(-5);  
// Number(3);   
// Number(0);   

// let number = prompt("введите число")
// let number1 = prompt("введите число")
// if (number % number1 == 0) {
//     alert('остатка нет')
// }
// else {
//     alert('число с остатком')
// }