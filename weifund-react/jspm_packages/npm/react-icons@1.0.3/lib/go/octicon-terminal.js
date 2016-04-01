/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonTerminal = (function (_React$Component) {
    _inherits(GoOcticonTerminal, _React$Component);

    function GoOcticonTerminal() {
        _classCallCheck(this, GoOcticonTerminal);

        _React$Component.apply(this, arguments);
    }

    GoOcticonTerminal.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 25h10v2.5h-10v-2.5z m-7.5 2.5l7.5-7.5-7.5-7.5-1.9 1.9 5.7 5.6-5.7 5.6 1.9 1.9z m25-20v25c0 1.4-1.1 2.5-2.5 2.5h-30c-1.4 0-2.5-1.1-2.5-2.5v-25c0-1.4 1.1-2.5 2.5-2.5h30c1.4 0 2.5 1.1 2.5 2.5z m-2.5 0h-30v25h30v-25z' })
            )
        );
    };

    return GoOcticonTerminal;
})(React.Component);

exports['default'] = GoOcticonTerminal;
module.exports = exports['default'];