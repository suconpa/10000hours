import React from "react";
import style from "./Conclustion.css";

const Conclusion = ({ view, totalTime, userExpert, viewClose }) => {
  console.log(viewClose);
  console.log(view);
  return (
    <React.Fragment>
      {view && (
        <div className="conclusion">
          <p>
            당신은<span>{userExpert}</span>전문가가 되기 위해선
          </p>
          <p>
            대략 <span>{totalTime}</span> 일 이상 훈련하셔야 합니다!
          </p>
          <button onClick={viewClose}>다시 검사하기!</button>
        </div>
      )}
    </React.Fragment>
  );
};

export default Conclusion;
