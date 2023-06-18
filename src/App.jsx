import React, { useState } from "react";

import Numbers from "./components/Numbers";
import Message from "./components/Message";
import Buttons from "./components/Buttons";

const App = () => {
  const [step, setStep] = useState(1);

  return (
    <div className='steps'>
      <Numbers step={step} />
      <Message step={step} />
      <Buttons step={step} setStep={setStep} />
    </div>
  );
};

export default App;
