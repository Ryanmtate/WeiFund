/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonBell = (function (_React$Component) {
    _inherits(GoOcticonBell, _React$Component);

    function GoOcticonBell() {
        _classCallCheck(this, GoOcticonBell);

        _React$Component.apply(this, arguments);
    }

    GoOcticonBell.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm37.5 30v2.5h-35v-2.5l1.8-1.4c2-2 2.1-6.4 3-11.1 1.9-9.4 10.2-12.5 10.2-12.5 0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5c0 0 8.5 3.1 10.4 12.5 0.9 4.7 1 9.1 3 11.1l1.6 1.4z m-17.5 10c2.8 0 5-2.2 5-5h-10c0 2.8 2.2 5 5 5z' })
            )
        );
    };

    return GoOcticonBell;
})(React.Component);

exports['default'] = GoOcticonBell;
module.exports = exports['default'];