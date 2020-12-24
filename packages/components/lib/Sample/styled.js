function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tbackground-color: ", ";\n\tcolor: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from 'styled-components';
export var SampleButton = styled.button(_templateObject(), function (props) {
  return props.theme.color.backgroundColor;
}, function (props) {
  return props.theme.color.primary;
});
//# sourceMappingURL=styled.js.map