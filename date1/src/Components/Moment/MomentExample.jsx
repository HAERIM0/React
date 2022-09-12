import React from 'react'
import moment from 'moment-timezone';
import { useState } from 'react';
import { useRef } from 'react';

export default function MomentExample() {
    const birthDatRef = useRef(null);
    const [day, setDay] = useState("");
    const handleBirthDayChange = (event) => {
        setDay(moment(event.target.value, "YYYY-MM-DD").format("dddd"));
    }

    const momentDate = moment();
    const newMomentDate = momentDate.add(1, "week");
    const cloneNewMomentDate = newMomentDate.clone().add(1, "week");

    return (
        <div>
            <h1>Moment</h1>
            <div>Immutable Check</div>
            <div>
                {momentDate.format()}
                <br />
                {newMomentDate.format()}
                <br />
                {cloneNewMomentDate.format()}
                <br />
                <br />
                <div>Leap year(korea)</div>
                <div>
                    2017년 1월 1일에 1년 빼기:
                    {moment("2017-01-01")
                        .subtract(1, "year")
                        .format()}
                </div>

                <div>
                    2017년 1월 1일에 365일 빼기:
                    {moment("2017-01-01")
                        .subtract(365, "day")
                        .format()}
                </div>
                <br />
                <div>한국어로 표기07-17-2021을 7월 17일로 표기</div>
                <div>{moment("07-17-2021").format("YYYY년 M월 D일")}</div>
                <br />
                <div>자기 생일 요일 찾기</div>
                <div>
                    <input type="date" ref={birthDatRef} onChange={handleBirthDayChange} />
                    <div>무슨 요일이었을까?</div>
                    <div>{day}</div>
                </div>
                <br />
                <div>두 날짜 비교</div>
                <div>2021-07-17 03:00 와 2021-07-18 02:00는 몇시간 차이인가?</div>
                <div>{moment("2021-07-17 03:00").diff(moment("2021-07-18 02:00"), "hours")}</div>
            </div>
        </div>
    )
}
