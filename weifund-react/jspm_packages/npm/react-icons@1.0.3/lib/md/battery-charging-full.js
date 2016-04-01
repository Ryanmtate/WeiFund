/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdBatteryChargingFull = (function (_React$Component) {
    _inherits(MdBatteryChargingFull, _React$Component);

    function MdBatteryChargingFull() {
        _classCallCheck(this, MdBatteryChargingFull);

        _React$Component.apply(this, arguments);
    }

    MdBatteryChargingFull.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm26.1 6.7h-2.8v-3.4h-6.6v3.4h-2.8c-1.2 0-2.2 1-2.2 2.2v25.5c0 1.3 1 2.3 2.2 2.3h12.2c1.2 0 2.2-1 2.2-2.2v-25.6c0-1.2-1-2.2-2.2-2.2z m-7.8 26.6v-9.1h-3.3l6.7-12.5v9.1h3.3l-6.7 12.5z' })
            )
        );
    };

    return MdBatteryChargingFull;
})(React.Component);

exports['default'] = MdBatteryChargingFull;
module.exports = exports['default'];