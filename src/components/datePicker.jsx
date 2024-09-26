import DatePicker from "react-date-picker";
import { useState } from "react";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

const DateInput = () => {
   const [value, onChange] = useState(new Date());
   return (
      <>
         <DatePicker onChange={onChange} value={value} />
      </>
   );
};

export default DateInput;
