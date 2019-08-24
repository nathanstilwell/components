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

var DescriptionParagraph = _styledComponents2.default.p.withConfig({
  displayName: "Description__DescriptionParagraph",
  componentId: "sc-12w7mc0-0"
})(["font-size:1rem;padding:0 2rem;margin:2rem 0 0 0;width:83.33333%;@media only screen and (min-width:48rem){font-size:1.5rem;}@media only screen and (min-width:100rem){font-size:2rem;}"]);

var Description = function Description(_ref) {
  var children = _ref.children,
      theme = _ref.theme;
  return _react2.default.createElement(
    DescriptionParagraph,
    null,
    _react2.default.createElement(
      _FillSpan2.default,
      { theme: theme },
      children
    )
  );
};

exports.default = Description;