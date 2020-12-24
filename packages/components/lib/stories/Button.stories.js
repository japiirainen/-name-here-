import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Button } from '../Sample/Button';
export default {
  title: 'Sample / Button',
  component: Button
};
export var withText = function withText() {
  return /*#__PURE__*/React.createElement(Button, {
    value: text('value', 'Click Me'),
    onClickHandler: action('button-click')
  });
};
withText.story = {
  parameters: {
    jest: ['Button.test.tsx']
  }
};
//# sourceMappingURL=Button.stories.js.map