import {
  Component,
  useCallback,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";

// const getAverage = (numbers) => {
//   console.log("평균값 계산 중...");
//   if (numbers.length === 0) return 0;
//   const sum = numbers.reduce((a, b) => a + b);
//   return sum / numbers.length;
// };

// const Average = () => {
//   const [list, setList] = useState([]);
//   const [number, setNumber] = useState("");

//   const onChange = (e) => {
//     setNumber(e.target.value);
//   };

//   const onInsert = (e) => {
//     const nextList = list.concat(parseInt(number));
//     setList(nextList);
//     setNumber("");
//   };

//   return (
//     <div>
//       <input value={number} onChange={onChange} />
//       <button onClick={onInsert}>등록</button>
//       <ul>
//         {list.map((value, index) => (
//           <li key={index}>{value}</li>
//         ))}
//       </ul>
//       <b>평균값:</b>
//       {getAverage(list)}
//     </div>
//   );
// };

// const getAverage = (numbers) => {
//   console.log("평균값 계산 중...");
//   if (numbers.length === 0) return 0;
//   const sum = numbers.reduce((a, b) => a + b);
//   return sum / numbers.length;
// };

// const Average = () => {
//   const [list, setList] = useState([]);
//   const [number, setNumber] = useState("");

//   const onChange = (e) => {
//     setNumber(e.terget.value);
//   };

//   const onInsert = () => {
//     const nextList = list.concat(parseInt(number));
//     setList(nextList);
//     setNumber("");
//   };

//   const avg = useMemo(() => getAverage(list), [list]);

//   return (
//     <div>
//       <input value={number} onChange={onChange} />
//       <button onClick={onInsert}>등록</button>
//       <ul>
//         {list.map((value, index) => (
//           <li key={index}>{value}</li>
//         ))}
//       </ul>
//       <b>평균값:</b>
//       {avg}
//     </div>
//   );
// };

// const getAverage = (numbers) => {
//   console.log("평균값 계산 중...");
//   if (numbers.length === 0) return 0;
//   const sum = numbers.reduce((a, b) => a + b);
//   return sum / numbers.length;
// };
// ``;
// const Average = () => {
//   const [list, setList] = useState([]);
//   const [number, setNumber] = useState("");

//   const onChange = (e) => {
//     setNumber(e.terget.value);
//   };

//   const onInsert = () => {
//     const nextList = list.concat(parseInt(number));
//     setList(nextList);
//     setNumber("");
//   };

//   const avg = useMemo(() => getAverage(list), [list]);

//   return (
//     <div>
//       <input value={number} onChange={onChange} />
//       <button onClick={onInsert}>등록</button>
//       <ul>
//         {list.map((value, index) => (
//           <li key={index}>{value}</li>
//         ))}
//       </ul>
//       <b>평균값</b>
//       {avg}
//     </div>
//   );
// };

// const getAverage = (numbers) => {
//   console.log("평균값 계산 중");
//   if (numbers.length === 0) return 0;
//   const sum = numbers.reduce((a, b) => a + b);
//   return sum / numbers.length;
// };

// const Average = () => {
//   const [list, setList] = useState([]);
//   const [number, setNumber] = useState("");

//   const onChange = useCallback((e) => {
//     setNumber(e.target.value);
//   }, []);
//   const onInsert = useCallback(() => {
//     const nextList = list.concat(parseInt(number));
//     setNumber("");
//   }, [number.list]);
// };

// const avg = useMemo(() => getAverage(list), [list]);

// return (
//   <>
//     <input value={number} onChange={onChange} />
//     <button onClick={onInsert}>등록</button>

//     <ul>
//       {list.map((vlaue, index) => (
//         <li key={index}>{value}</li>
//       ))}
//     </ul>
//   </>
// );

// class Average extends Component {
//   id = 1;
//   setId = (n) => {
//     this.id = n;
//   };
//   printId = () => {
//     console.log(this.id);
//   };

//   render() {
//     return <div>Average</div>;
//   }
// }

// const Average = () => {
//   const id = useRef(1);
//   const setId = (n) => {
//     id.current = n;
//   };

//   const printId = () => {
//     console.log(id.current);
//   };

//   return <div>refsample</div>;
// };

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default function Average(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e) => {
    dispatch(e.target);
  };
  return [state, onChange];
}
