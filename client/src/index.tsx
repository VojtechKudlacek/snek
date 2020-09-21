import React from 'react';
import ReactDOM from 'react-dom';
import { unregister } from 'services/workers';
import App from 'app';

ReactDOM.render(<App />, document.getElementById('root'));

unregister();
