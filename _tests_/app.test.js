import React from 'react';
import { render } from 'react-dom';
import App from '../client/src/components/App.jsx';

jest.mock('react-dom');
describe('Link', () => {
  it('should render correctly', () => {
    expect(render).toHaveBeenCalledWith(
      <App />, 'element-node'
    );
    expect(render).toHaveBeenCalledTimes(1);
  });
});
