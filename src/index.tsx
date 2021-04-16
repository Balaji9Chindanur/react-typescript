import ReactDOM from 'react-dom';
import EventComponent from './events/EventComponent';

const App = () => {
    return (
        <div>
          <EventComponent></EventComponent>
        </div>
    )
}

ReactDOM.render(
    <App/>, document.getElementById('root')
);