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

    obj1.address.country.code = 
    obj1.address.country.name = 
    obj1.address.city = 
    obj2.address.city = 
*/
