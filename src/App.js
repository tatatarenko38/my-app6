import { useRef, useEffect, useState } from "react";

import Page from "./component/page";
import Grid from "./component/grid";
import Box from "./component/box";

//прокрутка за допомогою кнопок

// function App() {
//   const firstCatRef = useRef(null);
//   const secondCatRef = useRef(null);
//   const thirdCatRef = useRef(null);

//   function handleScrollBy(ref) {
//     if (ref && ref.current) {
//       const offsetTop = ref.current.offsetTop;

//       window.scrollBy({
//         top: offsetTop,
//         behavior: "smooth",
//       });
//     }
//   }

//   return (
//     <Page>
//       <Grid>
//         <button onClick={() => handleScrollBy(firstCatRef)}>Tom</button>
//         <button onClick={() => handleScrollBy(secondCatRef)}>Mary</button>
//         <button onClick={() => handleScrollBy(thirdCatRef)}>Jellylorum</button>
//       </Grid>

//       <div>
//         <ul style={{ display: "grid", gap: "500px", marginBottom: "500px" }}>
//           <li>
//             <img
//               src="https://placeKitten.com/g/200/200"
//               alt="Tom"
//               ref={firstCatRef}
//             />
//           </li>

//           <li>
//             <img
//               src="https://placeKitten.com/g/300/200"
//               alt="Mary"
//               ref={secondCatRef}
//             />
//           </li>

//           <li>
//             <img
//               src="https://placeKitten.com/g/250/200"
//               alt="Jellylorum"
//               ref={thirdCatRef}
//             />
//           </li>
//         </ul>
//       </div>
//     </Page>
//   );
// }

//

/////////фокус на введенні після завантаження

// function App() {
//   const inputRef = useRef(null);

//   useEffect(() => {
//     //фокус на введенні після завантаження(на першому полі)
//     if (inputRef && inputRef.current) inputRef.current.focus();
//   }, []);

//   return (
//     <Page>
//       <Grid>
//         <Box>
//           <input ref={inputRef} placeholder="Введіть пошту...." />
//         </Box>

//         <Box>
//           <input placeholder="Введіть пароль...." />
//         </Box>
//       </Grid>
//     </Page>
//   );
// }

///для зберігання минулого значення state

// function App() {
//   // null буде попадати у властивість current всередині об'єкта
//   //по факту prevValueRef стає об'єктом з властивість current і
//   //значенням  null
//   const prevValueRef = useRef(null);

//   // всередину prevValueRef можна класти інші властивості
//   //prevValueRef.test = true;

//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     //поточні значення value та prevValueRef
//     console.log(value, "value");
//     console.log(prevValueRef, "prevValueRef");

//     //prevValueRef.current кладемо у value(тобто записуєм туди 0)
//     //useEffect визивається при зміні  [value]
//     prevValueRef.current = value;

//     console.log(prevValueRef, "prevValueRef");
//   }, [value]);

//   const handleIncrement = () => {
//     setValue(value + 1);
//   };

//   //буде відслідковувати зміни prevValueRef
//   //варто уникати такої логіки  [prevValueRef.current] -
//   //краще створити useState
//   useEffect(() => {
//     console.log("new prevValueRef");
//   }, [prevValueRef.current]);

//   console.log("render");

//   return (
//     <Page>
//       <Grid>
//         <Box>
//           <p>value:{value}</p>
//           <p>prevValueRef:{prevValueRef.current}</p>
//         </Box>

//         <Box>
//           <button onClick={handleIncrement}>Increment</button>
//         </Box>
//       </Grid>
//     </Page>
//   );
// }

function App() {
  const scrollPositionRef = useRef(0);

  //змінює current на window.scrollY(дивимось скільки ми
  //прокрутили сторінку)
  const handleScroll = () => {
    // побачити зміни скролу
    console.log(scrollPositionRef);
    scrollPositionRef.current = window.scrollY;
  };

  useEffect(() => {
    // додає до події "scroll" на  window додає handleScroll
    window.addEventListener("scroll", handleScroll);
    return () => {
      // прибирає цю подію(коли цей компонент зникне)
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //не буде працювати
  useEffect(() => {
    console.log("scrollPositionRef", scrollPositionRef);
  }, [scrollPositionRef.current]);

  return (
    <Page>
      <p style={{ height: 10000 }}></p>
    </Page>
  );
}

export default App;
