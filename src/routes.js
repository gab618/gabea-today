import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';

import Main from './components/Main';
import Chiquito from './components/Chiquito';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/chiquito" component={Chiquito} />
      </Switch>
      <GlobalStyles />
    </BrowserRouter>
  );
}
