import { useState } from "react";
import DatePicker from "./components/datePicker";
import "./App.scss";

function App() {
   const [count, setCount] = useState(1);
   return (
      <>
         <DatePicker />
         <DatePicker />
      </>
   );
}

export default App;
