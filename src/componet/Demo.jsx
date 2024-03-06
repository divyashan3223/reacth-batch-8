import Login from "./Login";
import Logout from "./Logout";

// const Demo = () => {
//   let isLogin = true;
//   if (isLogin) {
//     return <Logout />;
//   } else {
//     return <Login />;
//   }
// };

// export default Demo;

// const Demo = () => {
//   let name = "divi";
//   let userName = "divi";
//   let isLogin = name == userName;
//   return <div>{isLogin ? <Login /> : <Logout />}</div>;
// };

// export default Demo;

const Demo = () => {
  let name = "divi";
  let userName = "div";
  let isLogin = name == userName;
  return <div>{isLogin || <Login />}</div>;
};

export default Demo;
