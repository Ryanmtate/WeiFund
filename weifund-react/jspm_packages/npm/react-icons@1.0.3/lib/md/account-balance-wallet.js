/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdAccountBalanceWallet = (function (_React$Component) {
    _inherits(MdAccountBalanceWallet, _React$Component);

    function MdAccountBalanceWallet() {
        _classCallCheck(this, MdAccountBalanceWallet);

        _React$Component.apply(this, arguments);
    }

    MdAccountBalanceWallet.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm35 30v1.7c0 1.8-1.5 3.3-3.3 3.3h-23.4c-1.8 0-3.3-1.5-3.3-3.3v-23.4c0-1.8 1.5-3.3 3.3-3.3h23.4c1.8 0 3.3 1.5 3.3 3.3v1.7h-15c-1.8 0-3.3 1.5-3.3 3.3v13.4c0 1.8 1.5 3.3 3.3 3.3h15z m-15-3.3h16.7v-13.4h-16.7v13.4z m6.7-4.2c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z' })
            )
        );
    };

    return MdAccountBalanceWallet;
})(React.Component);

exports['default'] = MdAccountBalanceWallet;
module.exports = exports['default'];