import React, { useState } from "react";
import Select from "./components/Select";

const options = [
  { value: 1, label: "option 1" },
  { value: 2, label: "option 2" },
];

function App() {
  const [value, setValue] = useState("");
  return (
    <div className='App'>
      <Select options={options} value={value} onChange={(v) => setValue(v)} />
    </div>
  );
}

export default App;
