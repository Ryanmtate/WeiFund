/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdFormatColorText = (function (_React$Component) {
    _inherits(MdFormatColorText, _React$Component);

    function MdFormatColorText() {
        _classCallCheck(this, MdFormatColorText);

        _React$Component.apply(this, arguments);
    }

    MdFormatColorText.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm0 33.3h40v6.7h-40z' }),
                React.createElement('path', { d: 'm18.3 5l-9.1 23.3h3.7l1.9-5h10.4l1.9 5h3.7l-9.1-23.3h-3.4z m-2.3 15l4-10.5 4 10.5h-8z' })
            )
        );
    };

    return MdFormatColorText;
})(React.Component);

exports['default'] = MdFormatColorText;
module.exports = exports['default'];