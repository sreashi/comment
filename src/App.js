import Comment from './Comment';
import { Container, Header, List } from "semantic-ui-react";

import pkg from 'semantic-ui-react/package.json'
import Example from "./Example";

import './App.css';
function App() {
  
// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

  return (
    <div className="App">
  <h1 style={{color:'black', padding: 10}}>Post</h1>   
      
  <Container style={{ margin: 20}}>
  <Header as="h3">Hello Everyone..😊 Comment Down Below</Header>
  

 
    </Container>
   
    <div className="comment">
    <Example/>
    <h1 style={{color:'#191970' ,fontSize: 18}}>Add Comments</h1>
    <Comment/>
    </div>
 
   
    
    </div>
  );
}

export default App;
