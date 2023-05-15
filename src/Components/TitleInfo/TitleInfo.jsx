import React, { useState } from "react";
import "./TitleInfo.css";

function TitleInfo(props) {
  const [expert, setExpert] = useState("");
  const [time, setTime] = useState(0);
  const [userTime, setUserTotalTime] = useState(0);

  function inputEvent(e) {
    e.preventDefault();
    props.setTotalTime(Math.ceil(10000 / time));
    props.setUserExpert(expert);
    props.viewOpen((value) => !value);
  }

  return (
    <div className="titleInfo">
      <div>
        <h1>
          <img src="/Frame.png" alt="" />
        </h1>
        <h2>&#34;연습은 어제의 당신보다 당신을 더 낫게 만든다.&#34;</h2>
        <p>
          1만 시간의 법칙은 어떤 분야의 전문가가 되기 위해서는 최소한 1만 시간의
          훈련이 필요하다는 법칙이다.
        </p>
      </div>
      <form onSubmit={inputEvent}>
        <div className="job-wrap">
          나는
          <input
            className="job"
            type="text"
            value={expert}
            required
            placeholder="예)개발자"
            onChange={(e) => setExpert(e.target.value)}
          />
          전문가가 될 것이다.
        </div>
        <div className="time-wrap">
          그래서 앞으로 매일 하루에
          <input
            required
            className="time"
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          시간씩 훈련할 것이다.
        </div>
        <button type="submit">나의 1만 시간은 언제? Click</button>
      </form>
    </div>
  );
}

export default TitleInfo;
