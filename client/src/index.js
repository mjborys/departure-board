import React from 'react';
import ReactDOM from 'react-dom';
import DepartureBoard from './DepartureBoard'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<DepartureBoard />, document.getElementById('root'));
registerServiceWorker();
