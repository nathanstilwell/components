Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Anchor = _styledComponents2.default.a.withConfig({
  displayName: "Link__Anchor",
  componentId: "sc-1bnl9r6-0"
})(["color:#0074d9;text-decoration:none;"]);

var Link = function Link(_ref) {
  var href = _ref.href,
      text = _ref.text;
  return _react2.default.createElement(
    Anchor,
    { target: "_blank", href: href },
    text
  );
};

exports.default = Link;