import { messages } from "../data";

const Numbers = ({ step }) => {
  return (
    <div className='numbers'>
      {messages.map((_, index) => {
        return (
          <div className={`${step === index + 1 ? "active" : ""}`}>
            {index + 1}
          </div>
        );
      })}
    </div>
  );
};
export default Numbers;
