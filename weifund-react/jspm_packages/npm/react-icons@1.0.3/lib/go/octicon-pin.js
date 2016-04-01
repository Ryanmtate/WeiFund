/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonPin = (function (_React$Component) {
    _inherits(GoOcticonPin, _React$Component);

    function GoOcticonPin() {
        _classCallCheck(this, GoOcticonPin);

        _React$Component.apply(this, arguments);
    }

    GoOcticonPin.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm25 3v2l1.2 2.5-11.2 7.5h-9.5c-1.1 0-1.7 1.3-0.9 2.1l7.9 7.9-10 12.5 12.5-10 7.9 7.9c0.8 0.8 2.1 0.2 2.1-0.9v-9.5l7.5-11.3 2.5 1.3h2c1.1 0 1.7-1.3 0.9-2.1l-10.8-10.8c-0.8-0.8-2.1-0.2-2.1 0.9z' })
            )
        );
    };

    return GoOcticonPin;
})(React.Component);

exports['default'] = GoOcticonPin;
module.exports = exports['default'];