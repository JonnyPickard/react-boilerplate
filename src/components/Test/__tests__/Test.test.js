import React from 'react';
import Test from '../Test.js';
import testTheme from '../themes/Test.default.scss';

describe('<Test />', () => {
  it('renders succesfully', () => {
    const wrapper = mount(<Test theme={testTheme}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
