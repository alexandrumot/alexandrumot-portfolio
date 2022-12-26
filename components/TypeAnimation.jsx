import { TypeAnimation } from 'react-type-animation';

function TypingComponent() {
  return (
    <TypeAnimation
      sequence={[
        "Front-end development.",
        2000,
        "Restful APIs.",
        2000,
        "Music.",
        2000
      ]} 
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{
        color: "#2FB8A6"
      }}
      />
  );
}

export default TypingComponent;