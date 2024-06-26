import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Home';
import newContat from './pages/NewContact';
import editContact from './pages/EditContact';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/new" component={newContat} />
      <Route path="/edit/:id" component={editContact} />
    </Switch>
  );
}
