import { TypeAnimation } from "react-type-animation";

const Typo = () => {
  return (
    <TypeAnimation
      sequence={[
        "Ai Engineer", // Types 'One'
        1000, // Waits 1s
        "Data Scientist", // Deletes 'One' and types 'Two'
        2000, // Waits 2s

        () => {
          console.log("Sequence completed");
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{
        fontSize: "3rem",
        display: "inline-block",
        color: "black",
        width: "100%",
        fontWeight: "bold",
      }}
    />
  );
};

export default Typo;
