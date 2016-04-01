/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSignalWifiOff = (function (_React$Component) {
    _inherits(MdSignalWifiOff, _React$Component);

    function MdSignalWifiOff() {
        _classCallCheck(this, MdSignalWifiOff);

        _React$Component.apply(this, arguments);
    }

    MdSignalWifiOff.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm39.4 11.7c-0.7-0.6-8.2-6.7-19.4-6.7-2.5 0-4.8 0.3-6.9 0.8l17.2 17.2 9.1-11.3z m-11 13.7l-22.9-23-2.2 2.1 3.5 3.5c-3.6 1.6-5.8 3.4-6.2 3.7l19.4 24.1 0 0 0 0 6.5-8.1 5.6 5.6 2.1-2.2-5.8-5.7z' })
            )
        );
    };

    return MdSignalWifiOff;
})(React.Component);

exports['default'] = MdSignalWifiOff;
module.exports = exports['default'];