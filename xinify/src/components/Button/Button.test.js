/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import moxios from 'moxios';
import '@babel/polyfill';
import { Button } from './Button';

Enzyme.configure({ adapter: new Adapter() });

const rendering = (props) => (shallow(<Button {...props} />));

const func = jest.fn();

const props = [
  {
    handleSubmit: func,
    buttonText: 'Submit',
    buttonClass: 'form-button',
    buttonType: 'submit',
  },
  {
    handleSubmit: func,
    buttonText: 'Click Me',
    buttonClass: 'form-button',
    buttonType: 'button',
  },
];

describe('<Button /> component Unit Test.', () => {
  const component = rendering(props[0]);
  it('Getting options', () => {
    expect(component.find(`.${props[0].buttonClass}`)).toHaveLength(1);
  });
  it('prop check', () => {
    expect(component.find('button').text()).toBe(props[0].buttonText);
  });
  it('click check', () => {
    component.find('button').simulate('click');
    expect(props[0].handleSubmit).toHaveBeenCalled();
  });
  const wrapper = rendering(props[1]);
  it('type button component', () => {
    expect(wrapper.find('[type="submit"]')).toHaveLength(0);
    expect(wrapper.find('[type="button"]')).toHaveLength(1);
  });
});
