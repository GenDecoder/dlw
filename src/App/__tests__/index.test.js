import React from 'react';
import App from '../index';
import { mount } from 'enzyme';

it('Header has class equal to "App-header"', () => {
   const component = mount(<App />);
   expect(component.find('header').prop('className')).toEqual('App-header');
});
