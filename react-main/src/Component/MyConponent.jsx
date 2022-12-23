// import React from "react";
// import PropTypes from "prop-types";
// import { Component } from "react";

// 컴포넌트
// const MyComponent = () => {
//   return <div>컴포넌트</div>;
// };

// props
// const MyComponent = (props) => {
//   return <div>안녕하세요, 제 이름은 {props.name}입니다</div>;
// };

// props
// const MyComponent = (props) => {
//   return (
//     <div>
//       안녕하세요 제 이름은 {props.name}입니다.
//       <br />
//       children 값은 {props.children}입니다.
//     </div>
//   );
// };

// 비구조화 할당
// const MyComponent = (props) => {
//   const { name, children } = props;
//   return (
//     <div>
//       안녕하세요 제 이름은 {name}입니다.
//       <br />
//       children 값은 {children}입니다.
//     </div>
//   );
// };

// 좀 더 간결한 비구조호 할당 문법
// const MyComponent = ({ name, children }) => {
//   return (
//     <div>
//       안녕하세요 제 이름은 {name}입니다.
//       <br />
//       children 값은 {children}입니다.
//     </div>
//   );
// };

// const MyComponent = ({ name, children }) => {
//   return (
//     <div>
//       안녕하세요 제 이름은 {name}입니다.
//       <br />
//       children 값은 {children}입니다.
//     </div>
//   );
// };

// proptypes
// const MyComponent = ({ name, children, favoriteNumber }) => {
//   return (
//     <div>
//       안녕하세요 제 이름은 {name}입니다.
//       <br />
//       children 값은 {children}입니다.
//       <br />
//       제가 좋아하는 숫자는{favoriteNumber}입니다
//     </div>
//   );
// };

// class MyComponent extends Component {
//   render() {
//     const { name, children, favoriteNumber } = this.props; //비구조화 할당
//     return (
//       <div>
//         안녕하세요 제 이름은 {name}입니다. <br />
//         children 값은 {children}입니다. <br />
//         제가 좋아하는 숫자는{favoriteNumber}입니다
//       </div>
//     );
//   }
// }

// MyComponent.defaultProps = {
//   name: "전해림",
// };

// MyComponent.prototype = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// };

// export default MyComponent;
