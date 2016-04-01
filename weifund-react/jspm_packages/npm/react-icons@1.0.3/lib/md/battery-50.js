/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdBattery50 = (function (_React$Component) {
    _inherits(MdBattery50, _React$Component);

    function MdBattery50() {
        _classCallCheck(this, MdBattery50);

        _React$Component.apply(this, arguments);
    }

    MdBattery50.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm28.3 8.9c0-1.2-1-2.2-2.2-2.2h-2.8v-3.4h-6.6v3.4h-2.8c-1.2 0-2.2 1-2.2 2.2v12.8h16.6v-12.8z' }),
                React.createElement('path', { d: 'm11.7 21.7v12.8c0 1.2 1 2.2 2.2 2.2h12.2c1.2 0 2.2-1 2.2-2.2v-12.8h-16.6z' })
            )
        );
    };

    return MdBattery50;
})(React.Component);

exports['default'] = MdBattery50;
module.exports = exports['default'];