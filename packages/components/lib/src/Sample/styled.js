"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleButton = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.SampleButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbackground-color: ", ";\n\tcolor: ", ";\n"], ["\n\tbackground-color: ", ";\n\tcolor: ", ";\n"])), function (props) { return props.theme.color.backgroundColor; }, function (props) { return props.theme.color.primary; });
var templateObject_1;
//# sourceMappingURL=styled.js.map