import { Switch} from 'react-router-dom'
import RoutesPages from './routes'
import './assets/style/style.css'

const App = () => {
  return (
    <Switch>
      <RoutesPages />
    </Switch>
  );
};
export default App;
