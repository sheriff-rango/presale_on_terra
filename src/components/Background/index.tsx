import React from "react";
import { Wrapper } from "./styled";

const Background: React.FC = () => {
  return (
    <Wrapper>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#01203a"
          fillOpacity="1"
          d="M0,224L34.3,197.3C68.6,171,137,117,206,117.3C274.3,117,343,171,411,202.7C480,235,549,245,617,218.7C685.7,192,754,128,823,101.3C891.4,75,960,85,1029,96C1097.1,107,1166,117,1234,122.7C1302.9,128,1371,128,1406,128L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
    </Wrapper>
  );
};

export default Background;