"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var enzyme_1 = require("enzyme");
var styled_components_1 = require("styled-components");
var themes_1 = require("../../themes");
var Button_1 = require("../Sample/Button");
var clickFn = jest.fn();
describe('Button', function () {
    it('should simulate click', function () {
        var component = enzyme_1.mount(react_1.default.createElement(styled_components_1.ThemeProvider, { theme: themes_1.lightTheme },
            react_1.default.createElement(Button_1.Button, { onClickHandler: clickFn, value: "Hello" })));
        component.find(Button_1.Button).simulate('click');
        expect(clickFn).toHaveBeenCalled();
    });
});
//# sourceMappingURL=Button.test.js.map