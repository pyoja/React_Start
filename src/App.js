import { useEffect, useState } from "react";

function Hello() {
  useEffect(() => {
    console.log("created ^^");
    return () => console.log("destryed ㅠㅠ"); //Clean Up function
  }, []);
  return <h1>Hello!!!</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
