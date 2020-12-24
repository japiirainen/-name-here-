import React from 'react';
import { SampleButton } from './styled';
export var Button = function Button(_ref) {
  var value = _ref.value,
      onClickHandler = _ref.onClickHandler;
  return /*#__PURE__*/React.createElement(SampleButton, {
    onClick: onClickHandler
  }, value);
};
//# sourceMappingURL=Button.js.map