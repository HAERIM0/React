import { useEffect, useState } from "react";
import { useReducer } from "react";

// const UseCounter = () => {
//   const [value, setValue] = useState(0);

//   return (
//     <div>
//       <p>
//         현재 카운터 값은 <b>{value}</b>
//       </p>
//       <button onClick={() => setValue(value + 1)}>+1</button>
//       <button onClick={() => setValue(value - 1)}>-1</button>
//     </div>
//   );
// };

// const UseCounter = () => {
//   const [name, setName] = useState("");
//   const [nickname, setNickname] = useState("");

//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };

//   const onChangeNickname = (e) => {
//     setNickname(e.target.value);
//   };

//   return (
//     <>
//       {" "}
//       <div>
//         <input value={name} onChange={onChangeName} />
//         <input value={nickname} onChange={onChangeNickname} />
//       </div>
//       <div>
//         <b>이름:</b>
//         {name}
//       </div>
//       <div>
//         <b>닉네임 : </b>
//         {nickname}
//       </div>
//     </>
//   );
// };

// const UseCounter = () => {

//   const [name, setName] = useState("");
//   const [nickname, setNickname] = useState("");

//   useEffect(() => {
//     console.log("effect");
//     console.log(name);
//     return () => {
//       console.log("cleanup");
//       console.log(name);
//     };
//   }, [name]);

//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };

//   const onChangeNickname = (e) => {
//     setNickname(e.target.value);
//   };

//   return (
//     <>
//       <div>
//         <input value={name} onChange={onChangeName} />
//         <input value={nickname} onChange={onChangeNickname} />
//       </div>
//       <div>
//         <b>이름:</b>
//         {name}
//       </div>
//       <div>
//         <b>닉네임 : </b>
//         {nickname}
//       </div>
//     </>
//   );
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "INCRENT":
//       return { value: state.value + 1 };
//     case "DECREMENT":
//       return { value: state.value - 1 };
//     default:
//       return state;
//   }
// }

// const UseCounter = () => {
//   const [state, dispatch] = useReducer(reducer, { value: 0 });

//   return (
//     <div>
//       <p>현재 카운터 값은 {state.value}</p>
//       <button onClick={() => dispatch({ type: "INCRENT" })}>+1</button>
//       <button onClick={() => dispatch({ type: "DECREMENT" })}>+1</button>
//     </div>
//   );
// };

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };

  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch(e.terget);
  };

  const onInsert = () => {
    const nextList = list.concat(parseInt(number));
    StyleSheetList();
  };
}

export default UseCounter;
