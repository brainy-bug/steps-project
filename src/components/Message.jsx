import { messages } from "../data";

const Message = ({ step }) => {
  return (
    <div className='message'>
      <h3>
        Step {step}: {messages[step - 1]}
      </h3>
    </div>
  );
};
export default Message;
