import Globalservice from '../service/Globalservice';

const GlobalServicesView = () => {
  const message = Globalservice.getMessage();
  return <div>{message}</div>;
};

export default GlobalServicesView;
