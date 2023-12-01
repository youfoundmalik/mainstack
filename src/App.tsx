import { useFetchUser } from 'hooks/useFetchUser';
import RevenuePage from 'pages/dashboard/revenue';

const App = () => {
  useFetchUser();
  return <RevenuePage />;
};

export default App;
