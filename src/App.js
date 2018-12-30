import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Avatar from "./Avatar";
import Repositories from "./Repositories";
import {
  STATUS,
  Loading,
  Logo,
  Logotype,
  Container,
  Header
} from "gitstar-components";

const CLIENT_ID = "e5e58573f2bf1ee30680";
const REDIRECT_URI = "http://vastholdings.us/starwatcher/build/";
const AUTH_API_URI = "http://vastholdings.us/gatekeeper/authenticate/"


const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: operation => {
    const token = localStorage.getItem("github_token");
    if (token) {
      operation.setContext({
        headers: {
          authorization: `Bearer ${token}`
        }
      });
    }
  }
});

class App extends Component {
  state = {
    status: STATUS.INITIAL
  };
  componentDidMount() {
    const storedToken = localStorage.getItem("github_token");
    if (storedToken) {
      this.setState({
        status: STATUS.AUTHENTICATED
      });
      return;
    }
    const code =
      window.location.href.match(/\?code=(.*)/) &&
      window.location.href.match(/\?code=(.*)/)[1];
    if (code) {
      this.setState({ status: STATUS.LOADING });
      fetch(`${AUTH_API_URI}${code}`)
        .then(response => response.json())
        .then(({ token }) => {
          if (token) {
            localStorage.setItem("github_token", token);
          }
          this.setState({
            status: STATUS.FINISHED_LOADING
          });
        });
    }
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <Container>
          <Header>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Logo />
              <Logotype />
            </div>
            <Avatar
              style={{
                transform: `scale(${
                  this.state.status === STATUS.AUTHENTICATED ? "1" : "0"
                })`
              }}
            />
            <a
              style={{
                display:
                  this.state.status === STATUS.INITIAL ? "inline" : "none"
              }}
              href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user%20public_repo%20gist&redirect_uri=${REDIRECT_URI}`}
            >
              Login
            </a>
          </Header>
          <Loading
            status={this.state.status}
            callback={() => {
              if (this.props.status !== STATUS.AUTHENTICATED) {
                this.setState({
                  status: STATUS.AUTHENTICATED
                });
              }
            }}
          />
          {this.state.status === STATUS.AUTHENTICATED && <Repositories />}
        </Container>
      </ApolloProvider>
    );
  }
}

export default App;

// class App extends Component {
//   state = {
//     status: STATUS.INITIAL,
//     token: null
//   };
//   componentDidMount() {
//     const code =
//       window.location.href.match(/\?code=(.*)/) &&
//       window.location.href.match(/\?code=(.*)/)[1];
//     if (code) {
//       this.setState({ status: STATUS.LOADING });
//       fetch(`http://vastholdings.us/gatekeeper/authenticate/${code}`)
//         .then(response => response.json())
//         .then(response => {
//           this.setState({
//             token: response.token,
//             status: STATUS.FINISHED_LOADING
//           });
//         });
//     }
//   }
//   render() {
//     return (
//       <Container>
//         <Header>
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <Logo />
//             <Logotype />
//           </div>
//           <Avatar
//             style={{
//               transform: `scale(${
//                 this.state.status === STATUS.AUTHENTICATED ? "1" : "0"
//               })`
//             }}
//           />
//           <a
//             style={{
//               display: this.state.status === STATUS.INITIAL ? "inline" : "none"
//             }}
//             href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
//           >
//             Login
//           </a>
//         </Header>
//         <Loading
//           status={this.state.status}
//           callback={() => {
//             if (this.props.status !== STATUS.AUTHENTICATED) {
//               this.setState({
//                 status: STATUS.AUTHENTICATED
//               });
//             }
//           }}
//         />
//       </Container>
//     );
//   }
// }

// export default App;
