/* eslint-disable @typescript-eslint/no-var-requires */
require('jest-styled-components');
const configure = require('enzyme').configure;
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });
configure({ adapter: new Adapter() });
