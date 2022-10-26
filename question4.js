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
// 1º <Character name={'Mickey'} {...props1} />
// 2º <Character {...props1} name={'Mickey'} />

// Qué nombre se va a imprimir/renderizar en cada componente
