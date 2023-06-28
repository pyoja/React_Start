import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = () => setKeyword(event.target.value);
  console.log("난 항상 실행중!");
  useEffect(() => {
    console.log("1번만 실행");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("키워드 변화에만 실행");
    }
  }, [keyword]);
  useEffect(() => {
    console.log("카운터 변화 실행");
  }, [counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
