import React, { Component } from 'react';

const UserContext = React.createContext()

const ContextProvide = UserContext.provider
const ContextConsumer = UserContext.consumer
// class UserContext extends Component {
//   render() {
//     return <h1>User Context</h1>;
//   }
// }
// export default UserContext;
export {ContextProvide,ContextConsumer}