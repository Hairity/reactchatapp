import { ChatEngine } from 'react-chat-engine'

import ChatFeed from './components/ChatFeed'

import './App.css'

const App = () => {
  return (
    <ChatEngine
      height='100vh'
      projectID="
8216286b-3d31-438f-9a42-bcbf7cef63bc"
      userName="Willy Wonka"
      userSecret="power"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}


    />
  )
}

export default App