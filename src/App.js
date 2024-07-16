//хуки кешування

import { useRef, useEffect, useState, useMemo, useCallback } from "react";

import Page from "./component/page";
import Grid from "./component/grid";
import Box from "./component/box";

// function Child({ state }) {
//   //щоб побачити коли саме відбуваються render
//   console.log("render");

//   //const data = useMemo(() => {
//   //щоб побачити коли саме відбуваються перерахування
//   //   console.log("hello!!!!!!!!!!!");
//   //   return state * 10;
//   // }, [state]);
//   //console.log("Hello"); буде виконуватись на кожному
//   //перерендері компонента
//   //const data = Math.random() + Math.random + console.log("Hello");
//   // return <div>Child {data}</div>;

//   ///складні обчислення
//   // на моменті, коли виконується [state], лише тоді відбувається
//   // перерахування і виконання циклу
//   const data = useMemo(() => {
//     let result = 0;
//     for (let i = 0; i < 100000000000; i++) {
//       result += i * state;
//     }
//     return result;
//   }, [state]);
//   return <div>Child {data}</div>;
// }
// function App() {
//   const [state, setState] = useState(0);

//   const [state2, setState2] = useState(0);

//   // ставить інтервал на зміну стейта,
//   //що призводить до перерендеру компонента
//   useEffect(() => {
//     const id = setInterval(() => setState((prev) => prev + 1), 1000);

//     const id2 = setInterval(() => setState2((prev) => prev + 1), 5000);

//     return () => {
//       clearInterval(id);
//       clearInterval(id2);
//     };
//   }, []);

//   return (
//     <Page>
//       Hello world {state} <Child state={state2} />
//     </Page>
//   );
// }

//замість обрахувань - handleClick     useCallback

// кешування функцій
function Child({ state }) {
  //буде кешуватись і повертати старе значення
  //доки не оновиться(5сек) пропс state
  const handleClick = useCallback(() => alert(state), [state]);

  //щоб побачити коли саме відбуваються render
  console.log("render");

  //console.log("hello world") - повертає undefined,
  //тому буде виконуватись () => alert("click")
  //const handleClick = console.log("hello world") || (() => alert("click"));

  useEffect(() => {
    console.log("new handleClick");
  }, [handleClick]);

  return <div onClick={handleClick}>Child</div>;
}

function App() {
  const [state, setState] = useState(0);

  const [state2, setState2] = useState(0);

  // ставить інтервал на зміну стейта,
  //що призводить до перерендеру компонента
  useEffect(() => {
    const id = setInterval(() => setState((prev) => prev + 1), 1000);

    const id2 = setInterval(() => setState2((prev) => prev + 1), 5000);

    return () => {
      clearInterval(id);
      clearInterval(id2);
    };
  }, []);

  return (
    <Page>
      Hello world {state} <Child state={state2} />
    </Page>
  );
}

export default App;
