Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _FillSpan = require("../FillSpan");

var _FillSpan2 = _interopRequireDefault(_FillSpan);

var _Link = require("../Link");

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Section = _styledComponents2.default.section.withConfig({
  displayName: "ListSection__Section",
  componentId: "sc-1pertvk-0"
})(["padding:0 2rem;margin:2rem 0 0 0;"]);
var SectionTitle = _styledComponents2.default.h2.withConfig({
  displayName: "ListSection__SectionTitle",
  componentId: "sc-1pertvk-1"
})(["font-size:1.5rem;"]);
var List = _styledComponents2.default.ul.withConfig({
  displayName: "ListSection__List",
  componentId: "sc-1pertvk-2"
})(["list-style:none;padding:0;margin:0;"]);
var ListItem = _styledComponents2.default.li.withConfig({
  displayName: "ListSection__ListItem",
  componentId: "sc-1pertvk-3"
})(["padding:0.5rem 0;"]);
var Img = _styledComponents2.default.img.withConfig({
  displayName: "ListSection__Img",
  componentId: "sc-1pertvk-4"
})(["height:1.5rem;width:1.5rem;margin:0 0.5rem 0 0;vertical-align:middle;"]);

var ListSection = function ListSection(_ref) {
  var title = _ref.title,
      links = _ref.links;
  return _react2.default.createElement(
    Section,
    null,
    _react2.default.createElement(
      SectionTitle,
      null,
      _react2.default.createElement(
        _FillSpan2.default,
        null,
        title
      )
    ),
    _react2.default.createElement(
      List,
      null,
      links.map(function (link, index) {
        return _react2.default.createElement(
          ListItem,
          { key: index },
          link.logo && _react2.default.createElement(Img, {
            src: "https://assets.nathanstilwell.com/logos/" + link.logo + ".svg",
            alt: link.logo + " icon"
          }),
          _react2.default.createElement(
            _FillSpan2.default,
            null,
            _react2.default.createElement(_Link2.default, { href: link.href, text: link.text })
          )
        );
      })
    )
  );
};

ListSection.defaultProps = {
  title: "",
  links: []
};

exports.default = ListSection;