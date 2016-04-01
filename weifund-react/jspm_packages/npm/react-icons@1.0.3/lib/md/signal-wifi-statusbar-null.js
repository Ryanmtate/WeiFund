/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSignalWifiStatusbarNull = (function (_React$Component) {
    _inherits(MdSignalWifiStatusbarNull, _React$Component);

    function MdSignalWifiStatusbarNull() {
        _classCallCheck(this, MdSignalWifiStatusbarNull);

        _React$Component.apply(this, arguments);
    }

    MdSignalWifiStatusbarNull.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 7.7c6.5 0 11.7 2.3 14.9 4.2l-14.9 18.6-14.9-18.6c3.2-1.9 8.4-4.2 14.9-4.2m0-3.1c-11.2 0-18.6 6.1-19.4 6.7l19.4 24.1 0 0 0 0 19.4-24.1c-0.8-0.6-8.2-6.7-19.4-6.7z' })
            )
        );
    };

    return MdSignalWifiStatusbarNull;
})(React.Component);

exports['default'] = MdSignalWifiStatusbarNull;
module.exports = exports['default'];