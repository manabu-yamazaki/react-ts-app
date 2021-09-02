import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Featured from "./pages/Featured";
import Archives from "./pages/Archives";
import Settings from "./pages/Settings";

// export default class Client extends React.Component {
//   render() {
//     return (
//       <Router>
//         <Layout>
//           <Route exact path="/" component={Featured}></Route>
//           <Route path="/archives" component={Archives}></Route>
//           <Route path="/settings" component={Settings}></Route>
//         </Layout>
//       </Router>
//     );
//   }
// }

// type Props = {
//   as: React.ElementType<any>;
// }

// const Test: React.FC<Props> = ({ children, text }) => (
  // <div>
  //   <div>{text}</div>
  //   <div>{children}</div>
  // </div>
const Client: React.FunctionComponent = () => (
  <Router>
    <Layout>
      <Route exact path="/" component={Featured}></Route>
      <Route path="/archives" component={Archives}></Route>
      <Route path="/settings" component={Settings}></Route>
    </Layout>
  </Router>
);

export default Client;