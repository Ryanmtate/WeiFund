/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSignalWifiStatusbarConnectedNoInternet = (function (_React$Component) {
    _inherits(MdSignalWifiStatusbarConnectedNoInternet, _React$Component);

    function MdSignalWifiStatusbarConnectedNoInternet() {
        _classCallCheck(this, MdSignalWifiStatusbarConnectedNoInternet);

        _React$Component.apply(this, arguments);
    }

    MdSignalWifiStatusbarConnectedNoInternet.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm37.3 13.8l2.1-2.5c-0.8-0.6-8.2-6.7-19.4-6.7s-18.6 6.1-19.4 6.7l19.4 24.1 0 0 0 0 10.8-13.4v-8.2h6.5z' }),
                React.createElement('path', { d: 'm33.8 35.4h3.1v-3.1h-3.1v3.1z m0-18.5v12.3h3.1v-12.3h-3.1z' })
            )
        );
    };

    return MdSignalWifiStatusbarConnectedNoInternet;
})(React.Component);

exports['default'] = MdSignalWifiStatusbarConnectedNoInternet;
module.exports = exports['default'];