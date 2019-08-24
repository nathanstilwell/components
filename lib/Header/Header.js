Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _FillSpan = require("../FillSpan");

var _FillSpan2 = _interopRequireDefault(_FillSpan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Title = _styledComponents2.default.h1.withConfig({
  displayName: "Header__Title",
  componentId: "q412d6-0"
})(["margin:2rem 0 0 0;padding:0 2rem;font-size:1.5rem;text-align:center;@media only screen and (min-width:30rem){font-size:2rem;text-align:center;}@media only screen and (min-width:48rem){font-size:3rem;text-align:left;}@media only screen and (min-width:60rem){font-size:4.8rem;text-align:left;}@media only screen and (min-width:80rem){font-size:6rem;text-align:left;}@media only screen and (min-width:100rem){font-size:8rem;text-align:left;}@media only screen and (min-width:120rem){font-size:10rem;text-align:left;}@media only screen and (min-width:150rem){font-size:12rem;text-align:left;}"]);

var Header = function Header(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    "header",
    null,
    _react2.default.createElement(
      Title,
      null,
      _react2.default.createElement(
        _FillSpan2.default,
        null,
        children
      )
    )
  );
};

exports.default = Header;