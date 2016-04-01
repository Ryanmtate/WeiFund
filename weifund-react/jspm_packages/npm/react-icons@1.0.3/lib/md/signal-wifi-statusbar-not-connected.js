/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSignalWifiStatusbarNotConnected = (function (_React$Component) {
    _inherits(MdSignalWifiStatusbarNotConnected, _React$Component);

    function MdSignalWifiStatusbarNotConnected() {
        _classCallCheck(this, MdSignalWifiStatusbarNotConnected);

        _React$Component.apply(this, arguments);
    }

    MdSignalWifiStatusbarNotConnected.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm32.3 14.6c1.3 0 2.5 0.4 3.6 1l3.5-4.3c-0.8-0.6-8.2-6.7-19.4-6.7s-18.6 6.1-19.4 6.7l19.4 24.1 0 0 0 0 6.5-8.1c-1.2-1.3-1.9-3.1-1.9-5 0-4.2 3.5-7.7 7.7-7.7z' }),
                React.createElement('path', { d: 'm32.3 16.9c-3 0-5.4 2.4-5.4 5.4h2.7c0-1.5 1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7c0 0.7-0.3 1.4-0.8 1.9l-1.7 1.7c-0.9 1-1.5 2.3-1.5 3.8v0.7h2.7c0-2 0.6-2.8 1.5-3.8l1.2-1.2c0.8-0.8 1.3-1.9 1.3-3.1 0-3-2.4-5.4-5.4-5.4z m-1.5 18.4h3v-2.9h-3v2.9z' })
            )
        );
    };

    return MdSignalWifiStatusbarNotConnected;
})(React.Component);

exports['default'] = MdSignalWifiStatusbarNotConnected;
module.exports = exports['default'];