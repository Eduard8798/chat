import logo from './logo.svg';
import './App.css';
import ChatWrapper from "./chat/ChatWrapper";

import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import ChatMessageForm from "./chat/ChatMessageForm";

function App() {
  return (
    <div className="App">

<ChatWrapper/>
        <ChatMessageForm/>
        <ToastContainer/>
    </div>

  );
}

export default App;
