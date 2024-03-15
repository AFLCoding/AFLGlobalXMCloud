import Globalservice from '../service/Globalservice';

function GlobalServicesView() {
  const message = Globalservice.getMessage();

  return <div>{message}</div>;
}

export default GlobalServicesView;