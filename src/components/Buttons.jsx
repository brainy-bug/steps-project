import { messages } from "../data";

const Buttons = ({ step, setStep }) => {
  return (
    <div className='buttons'>
      <button onClick={() => setStep((prev) => prev - 1)} disabled={step <= 1}>
        Previous
      </button>
      <button
        onClick={() => setStep((prev) => prev + 1)}
        disabled={step >= messages.length}
      >
        Next
      </button>
    </div>
  );
};
export default Buttons;
