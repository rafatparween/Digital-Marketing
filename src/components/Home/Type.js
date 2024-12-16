import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Digital Marketing",
          "Freelance Digital Marketing Consultant",
          "SEO & SEM Expert",
          "Social Media Marketing Specialist",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
