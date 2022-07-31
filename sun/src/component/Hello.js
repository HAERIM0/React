//파일은 항상 대문자로 시작
//jsx는 하나의 태그만 만들 수 있음 그래서 div로 감싸는거 ㅇㅇ 빈태그도 ㄱㄴ
//여기에 스타일 줄때는 카멜케이스로 작성

// import World from './World';
// import styles from "./Hello.module.css";

// export default function Hello() {
//     return (
//         <div>
//             <h1> Hello</h1>
//             <div className={styles.box}> Hello</div>
//         </div >
//     );
// }

//이벤트 처리 (카멜케이스)
// function showname() {
//     console.log("HAERIM");
// }

// function showage() {
//     console.log(30);
// }

// function showText(e) {
//     console.log(e.target.value);
// }
// export default function Hello() {
//     return (
//         <div>
//             <h1>Hello</h1>
//             <button onClick={showname}>Show name</button>
//             <button onClick={showage}>Show age</button>
//             <input type="text" onChange={showText} />
//         </div>
//     );
// }

//컴포넌트 속성 값
//props
import { useState } from "react";

export default function Hello(props) {
    //let name = "HAERIM";
    console.log(props);
    const [name, setName] = useState("HAERIM");

    // function changeName() {
    //     const newName = name === "HAERIM" ? "JAN" : "HAERIM";
    //     //document.getElementById("name").innerText = name;
    //     setName(newName)
    // }
    return (
        <div>
            <h2 id="name">{name}({props.age}세)</h2>
            <button
                onClick={() => {
                    setName(name === "HAERIM" ? "JANE" : "HAERIM");
                }}
            >
                Change
            </button>
        </div >
    );
}