// -- PREGUNTA 1 -- //
// Existe algún error en la forma en que se han escrito/declarado estas funciones??

/* -- Primera función -- */
const x = func1();
const func1 = () => 1;

/* -- Segunda función -- */
const y = func2();
function func2() {
  return 2;
}

// -- PREGUNTA 2 -- //

const obj1 = {
  name: "Bugs",
  lastName: "Bunny",
  address: {
    country: {
      code: "US",
      name: "United States",
    },
    city: "New York",
    street: "The forest 1234",
  },
};

const obj2 = { ...obj1 };
obj2.name = "Mickey";
obj2.lastName = "Mouse";
obj2.address.country.code = "MEX";
obj2.address.country.name = "México";
obj1.address.city = "Guadalajara";

/*
    Cuáles son los valores de:

    obj1.address.country.code = MEX
    obj1.address.country.name = México
    obj1.address.city = Guadalajara
    obj2.address.city = Guadalajara
*/

// -- PREGUNTA 3 -- //

var array1 = [1, 2, 3];
array1 = [array1, 3];
const [first, second, third, fourth, fifth, sixth, seventh] = [
  ...array1,
  ,
  2,
  3,
];

/* 
    Qué valores tienen:

    first: [1,2,3]
    second: 3
    third: undefined
    fourth: 2
    fifth: 3
    sixth: undefined
    seventh: undefined
*/

// -- PREGUNTA 4 -- //

// Componente
const Character = ({ name, movies }) => {
  // ...
  return (
    <h1>{name}</h1>
    // ...
  );
};

const props1 = {
  name: "Donald",
};

// Retorno estos componentes
// 1º <Character name={'Mickey'} {...props1} /> `Donald`
// 2º <Character {...props1} name={'Mickey'} /> `Mickey`

// Qué nombre se va a imprimir/renderizar en cada componente
