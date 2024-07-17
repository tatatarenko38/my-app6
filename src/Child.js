import { memo } from "react";

const Child = memo(
  ({ value }) => {
    //щоб розуміти коли відбувається перерендер Child
    // та значення пропса(value), щоб побачити яке значення
    console.log("child render", value);

    return <div>{value}</div>;
  },
  (prevProps, nextProps) => {
    //console.log(prevProps, nextProps);

    //якщо false - перерендер(буде кожний 5тий)
    return nextProps.value % 5 !== 0;
  }
);

export default Child;
