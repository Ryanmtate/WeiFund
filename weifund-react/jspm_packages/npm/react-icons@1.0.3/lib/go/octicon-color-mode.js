/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonColorMode = (function (_React$Component) {
    _inherits(GoOcticonColorMode, _React$Component);

    function GoOcticonColorMode() {
        _classCallCheck(this, GoOcticonColorMode);

        _React$Component.apply(this, arguments);
    }

    GoOcticonColorMode.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm32.5 5h-25c-1.4 0-2.5 1.1-2.5 2.5v25c0 1.4 1.1 2.5 2.5 2.5h25c1.4 0 2.5-1.1 2.5-2.5v-25c0-1.4-1.1-2.5-2.5-2.5z m-25 27.5v-25h25l-25 25z' })
            )
        );
    };

    return GoOcticonColorMode;
})(React.Component);

exports['default'] = GoOcticonColorMode;
module.exports = exports['default'];