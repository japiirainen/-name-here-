"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var react_1 = __importDefault(require("react"));
var styled_1 = require("./styled");
var Button = function (_a) {
    var value = _a.value, onClickHandler = _a.onClickHandler;
    return (react_1.default.createElement(styled_1.SampleButton, { onClick: onClickHandler }, value));
};
exports.Button = Button;
//# sourceMappingURL=Button.js.map