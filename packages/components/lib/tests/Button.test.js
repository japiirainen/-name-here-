import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../themes';
import { Button } from '../Sample/Button';
var clickFn = jest.fn();
describe('Button', function () {
  it('should simulate click', function () {
    var component = mount( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: lightTheme
    }, /*#__PURE__*/React.createElement(Button, {
      onClickHandler: clickFn,
      value: "Hello"
    })));
    component.find(Button).simulate('click');
    expect(clickFn).toHaveBeenCalled();
  });
});
//# sourceMappingURL=Button.test.js.map