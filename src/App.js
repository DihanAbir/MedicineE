import './App.css';
import Routes from './Routes';
import MessengerCustomerChat from 'react-messenger-customer-chat';

function App() {
  return (
    <>
      <Routes />
      <MessengerCustomerChat pageId="100140325776597" appId="863242971232093" />
    </>
  );
}

export default App;
