/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSignalWifiStatusbarConnectedNoInternet1 = (function (_React$Component) {
    _inherits(MdSignalWifiStatusbarConnectedNoInternet1, _React$Component);

    function MdSignalWifiStatusbarConnectedNoInternet1() {
        _classCallCheck(this, MdSignalWifiStatusbarConnectedNoInternet1);

        _React$Component.apply(this, arguments);
    }

    MdSignalWifiStatusbarConnectedNoInternet1.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm37.3 13.8l2.1-2.5c-0.8-0.6-8.2-6.7-19.4-6.7s-18.6 6.1-19.4 6.7l19.4 24.1 0 0 0 0 10.8-13.4v-8.2h6.5z' }),
                React.createElement('path', { d: 'm11.3 24.5l8.7 10.9v0 0l8.7-10.9c-0.3-0.2-3.7-3-8.7-3s-8.4 2.8-8.7 3z m22.5 10.9h3.1v-3.1h-3.1v3.1z m0-18.5v12.3h3.1v-12.3h-3.1z' })
            )
        );
    };

    return MdSignalWifiStatusbarConnectedNoInternet1;
})(React.Component);

exports['default'] = MdSignalWifiStatusbarConnectedNoInternet1;
module.exports = exports['default'];