// import { Component, useState } from "react";

// class Event extends Component {
//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           name="message"
//           placeholder="입력"
//           onChange={(e) => {
//             console.log(e.target.value);
//           }}
//         ></input>
//       </div>
//     );
//   }
// }

// class Event extends Component {
//   state = {
//     message: "",
//   };

//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           name="message"
//           placeholder="입력"
//           value={this.state.message}
//           onChange={(e) => {
//             this.setState({ message: e.target.value });
//           }}
//         ></input>

//         <button
//           onClick={() => {
//             alert(this.state.message);
//             this.setState({ message: "" });
//           }}
//         >
//           확인
//         </button>
//       </div>
//     );
//   }
// }

// class Event extends Component {
//   state = {
//     message: "",
//   };

//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleChange(e) {
//     this.setState({
//       message: e.target.value,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           name="message"
//           placeholder="입력"
//           value={this.state.message}
//           onChange={this.handleChange}
//         />
//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }

// class Event extends Component {
//   state = {
//     message: "",
//   };

//   handleChange = (e) => {
//     this.setState({
//       message: e.target.value,
//     });
//   };

//   handleClick = () => {
//     alert(this.state.message);

//     this.setState({
//       message: "",
//     });
//   };

//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           name="message"
//           placeholder="입력"
//           value={this.state.message}
//           onChange={this.handleChange}
//         />
//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }

// class Event extends Component {
//   state = {
//     message: "",
//   };

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleClick = () => {
//     alert(this.state.username + ":" + this.state.message);
//     this.setState({
//       username: "",
//       message: "",
//     });
//   };

//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           name="message"
//           placeholder="입력"
//           value={this.state.username}
//           onChange={this.handleChange}
//         />

//         <input
//           type="text"
//           name="message"
//           placeholder="입력"
//           value={this.state.message}
//           onChange={this.handleChange}
//         />
//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }

// class Event extends Component {
//   state = {
//     username: "",
//     message: "",
//   };

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleClick = () => {
//     alert(this.state.username + ":" + this.state.message);
//     this.setState({
//       username: "",
//       message: "",
//     });
//   };

//   handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       this.handleClick();
//     }
//   };

//   render() {
//     return (
//       <>
//         <input
//           type="text"
//           name="message"
//           placeholder="입력"
//           value={this.state.username}
//           onChange={this.handleChange}
//         />

//         <input
//           type="text"
//           name="message"
//           placeholder="입력"
//           value={this.state.message}
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//         />

//         <button onClick={this.handleClick}>확인</button>
//       </>
//     );
//   }
// }

// const Event = () => {
//   const [username, setUsername] = useState("");
//   const [message, setMessage] = useState("");
//   const onChangeUsername = (e) => setUsername(e.target.value);
//   const onChangeMessage = (e) => setMessage(e.target.value);
//   const onClick = () => {
//     alert(username + ":" + message);
//     setUsername("");
//     setMessage("");
//   };

//   const onKeyPress = (e) => {
//     if (e.key === "Enter") {
//       onClick();
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         name="username"
//         placeholder="사용자명"
//         value={username}
//         onChange={onChangeUsername}
//       />

//       <input
//         type="text"
//         name="message"
//         placeholder="입력"
//         value={message}
//         onChange={onChangeMessage}
//         onKeyPress={onKeyPress}
//       />

//       <button onClick={onClick}>확인</button>
//     </div>
//   );
// };
// export default Event;
