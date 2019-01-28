import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('la app levanta, y no se rompe', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
