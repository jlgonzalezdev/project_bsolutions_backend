import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import sum from './sum'

test('should sum correctly', () => {
  expect(sum(2,3)).toBe(5); 
});


// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
