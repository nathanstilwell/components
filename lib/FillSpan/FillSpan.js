Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Span = _styledComponents2.default.span.withConfig({
  displayName: "FillSpan__Span",
  componentId: "sc-1g3499d-0"
})(["background:", ";"], function (props) {
  return props.theme.background;
});

var FillSpan = function FillSpan(_ref) {
  var theme = _ref.theme,
      children = _ref.children;
  return _react2.default.createElement(
    Span,
    { theme: theme },
    children
  );
};

Span.defaultProps = {
  theme: {
    background: "white"
  }
};

exports.default = FillSpan;