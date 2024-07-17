//оптимізація компонента

import { memo, lazy, useEffect, useState, Suspense } from "react";

import Page from "./component/page";

//memo
// const Child = memo(
//   ({ value }) => {
//     //щоб розуміти коли відбувається перерендер Child
//     // та значення пропса(value), щоб побачити яке значення
//     console.log("child render", value);

//     return <div>{value}</div>;
//   },
//   (prevProps, nextProps) => {
//     //console.log(prevProps, nextProps);

//     //якщо false - перерендер(буде кожний 5тий)
//     return nextProps.value % 5 !== 0;
//   }
// );

// function App() {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => setValue((prev) => prev + 1), 1000);
//     return () => clearInterval(id);
//   }, []);

//   //перерендер буде кожну секунду
//   console.log("App");

//   return (
//     <Page>
//       <Child value={value} />
//     </Page>
//   );
// }

//lazy    <Child value={value} />} має з'явитися
//тільки через 20с - lazy(() => import("./Child"))
// підгрузить його з чанка(з окремого файла)

// const Child = lazy(() => import("./Child"));

// function App() {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => setValue((prev) => prev + 1), 1000);
//     return () => clearInterval(id);
//   }, []);

//   //перерендер буде кожну секунду
//   console.log("App");

//   return <Page>{value > 20 && <Child value={value} />}</Page>;
// }

//Suspense - компонент реакта -
//дозволяє показувати альтер. вміст - поки
//підгружається файл
const Child = lazy(() => import("./Child"));

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setValue((prev) => prev + 1), 1000);
    return () => clearInterval(id);
  }, []);

  //перерендер буде кожну секунду
  console.log("App");

  return (
    <Page>
      <div>state: {value}</div>
      <div>
        {value > 5 && (
          <Suspense fallback={<div>Loading...</div>}>
            <Child value={value} />
          </Suspense>
        )}
      </div>
    </Page>
  );
}
export default App;
