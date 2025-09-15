import { useState } from "react";

function SimpleCount() {
  const [counter, setcount] = useState(0);

  return (
    <div>
      <hi>Count: {counter}</hi>
      <br></br>
      <button onClick={() => setcount(counter + 1)}>inc</button>
      <button onClick={()=>setcount(counter-1)}>dec</button>
    </div>
  );
}

export default SimpleCount;
