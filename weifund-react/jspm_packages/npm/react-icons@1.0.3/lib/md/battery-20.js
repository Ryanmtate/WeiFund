/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdBattery20 = (function (_React$Component) {
    _inherits(MdBattery20, _React$Component);

    function MdBattery20() {
        _classCallCheck(this, MdBattery20);

        _React$Component.apply(this, arguments);
    }

    MdBattery20.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm11.7 28.3v6.2c0 1.2 1 2.2 2.2 2.2h12.2c1.2 0 2.2-1 2.2-2.2v-6.2h-16.6z' }),
                React.createElement('path', { d: 'm28.3 8.9c0-1.2-1-2.2-2.2-2.2h-2.8v-3.4h-6.6v3.4h-2.8c-1.2 0-2.2 1-2.2 2.2v19.4h16.6v-19.4z' })
            )
        );
    };

    return MdBattery20;
})(React.Component);

exports['default'] = MdBattery20;
module.exports = exports['default'];