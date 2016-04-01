/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdBatteryCharging60 = (function (_React$Component) {
    _inherits(MdBatteryCharging60, _React$Component);

    function MdBatteryCharging60() {
        _classCallCheck(this, MdBatteryCharging60);

        _React$Component.apply(this, arguments);
    }

    MdBatteryCharging60.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm26.1 6.7h-2.8v-3.4h-6.6v3.4h-2.8c-1.2 0-2.2 1-2.2 2.2v9.4h6.4l3.6-6.6v6.6h6.6v-9.4c0-1.2-1-2.2-2.2-2.2z' }),
                React.createElement('path', { d: 'm21.7 20.8h3.3l-6.7 12.5v-9.1h-3.3l3.1-5.9h-6.4v16.2c0 1.2 1 2.2 2.2 2.2h12.2c1.2 0 2.2-1 2.2-2.2v-16.2h-6.6v2.5z' })
            )
        );
    };

    return MdBatteryCharging60;
})(React.Component);

exports['default'] = MdBatteryCharging60;
module.exports = exports['default'];