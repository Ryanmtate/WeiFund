/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSignalWifiStatusbar1Bar = (function (_React$Component) {
    _inherits(MdSignalWifiStatusbar1Bar, _React$Component);

    function MdSignalWifiStatusbar1Bar() {
        _classCallCheck(this, MdSignalWifiStatusbar1Bar);

        _React$Component.apply(this, arguments);
    }

    MdSignalWifiStatusbar1Bar.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 35.4l8.7-10.9c-0.3-0.2-3.7-3-8.7-3s-8.4 2.8-8.7 3l8.7 10.9z' }),
                React.createElement('path', { d: 'm20 35.4l19.4-24.1c-0.8-0.6-8.2-6.7-19.4-6.7s-18.6 6.1-19.4 6.7l19.4 24.1 0 0 0 0z' })
            )
        );
    };

    return MdSignalWifiStatusbar1Bar;
})(React.Component);

exports['default'] = MdSignalWifiStatusbar1Bar;
module.exports = exports['default'];