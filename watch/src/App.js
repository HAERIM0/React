import './App.css';
import { useState } from "react";

function App() {
  // let post = '대구 우동 맛집';
  let [title, setTitle] = useState(["여자 자켓 추천", "대구 맛집 추천", "자스 인강 추천"]);
  let [like, setLike] = useState(0);
  let [modal, setModal] = useState(false);



  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>

      {/* <button onClick={() => {
        let copy = [...title];
        copy[0] = "대구 맛집 추천";
        setTitle(copy);

      }}>글 수정</button> */}

      <button onClick={() => {
        let SortArray = [...title];
        SortArray = SortArray.sort();
        setTitle(SortArray)
      }}>가나다 정렬</button>

      {/* <div className="list">
        <h4>{title[0]} <span onClick={() => setLike(like + 1)}>👍</span> {like} </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4 onClick={() => { setModal(true) }}>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        // modal === true ? <Modal /> : null
      }

      {
        title.map(function (a, i) {
          return (
            <div className='list'>
              <h4>{title[i]} <span onClick={() => { setLike(like + 1) }}>👍</span>{like}</h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }


    </div>


  );
}


// function Modal() {
//   return (
//     <div className='modal'>
//       <h4>제목</h4>
//       <p>날짜</p>
//       <p>상세내용</p>
//     </div>
//   )
// }


export default App;
