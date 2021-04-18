import ReactDOM from 'react-dom';
import UserSearch from './refs/UserSearch';

const App = () => {
    return (
        <div>
          <UserSearch></UserSearch>
        </div>
    )
}
ReactDOM.render(
    <App/>, document.getElementById('root')
);