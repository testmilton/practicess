

let saludo = 'Bienvenido a local connection';
    console.log(saludo);

//indexof()

    console.log(saludo.indexOf('i'));
    console.log(saludo.indexOf('i', 2));

//lastIndexof()

    console.log(saludo.lastIndexOf('i'));
    console.log(saludo.lastIndexOf('i', 20));

//replace( oldString, newString )

let newSalude = saludo.replace('local connection', 'fluxion');
    console.log(newSalude);

//split('separator', N)

let arraySalude = newSalude.split(' ');
    console.log(arraySalude);