import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';

import Main from './components/Main';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/chiquito" component={() => <h1>Hello</h1>} />
      </Switch>
      <GlobalStyles />
    </BrowserRouter>
  );
}
