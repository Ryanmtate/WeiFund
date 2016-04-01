/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaPaste = (function (_React$Component) {
    _inherits(FaPaste, _React$Component);

    function FaPaste() {
        _classCallCheck(this, FaPaste);

        _React$Component.apply(this, arguments);
    }

    FaPaste.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm13.3 32.4h15.599999999999998v-11.099999999999998h-7.199999999999999q-0.6999999999999993 0-1.1999999999999993-0.5t-0.5-1.1000000000000014v-7.300000000000001h-6.699999999999999v20z m4.5-25v-1.0999999999999988q0-0.20000000000000018-0.1999999999999993-0.40000000000000036t-0.3999999999999986-0.09999999999999964h-12.200000000000003q-0.20000000000000018 0-0.40000000000000036 0.09999999999999964t-0.20000000000000018 0.40000000000000036v1.1000000000000005q0 0.2999999999999998 0.20000000000000018 0.40000000000000036t0.40000000000000036 0.1999999999999993h12.2q0.1999999999999993 0 0.3999999999999986-0.20000000000000018t0.1999999999999993-0.40000000000000036z m4.400000000000002 11.7h5.199999999999999l-5.199999999999999-5.199999999999999v5.199999999999999z m8.899999999999999 2.1999999999999993v11.700000000000003q0 0.7000000000000028-0.5 1.2000000000000028t-1.1999999999999993 0.5h-16.6q-0.6999999999999993 0-1.1999999999999993-0.5t-0.5-1.2000000000000028v-2.8000000000000007h-9.400000000000002q-0.6999999999999993 0-1.1999999999999993-0.5t-0.5-1.1999999999999993v-23.3q0-0.6999999999999993 0.5-1.1999999999999993t1.2-0.5h18.9q0.6999999999999993 0 1.1000000000000014 0.5t0.5 1.2000000000000002v5.7q0.3999999999999986 0.1999999999999993 0.6000000000000014 0.5l7.099999999999998 7.1q0.5 0.5 0.8999999999999986 1.3000000000000007t0.3000000000000007 1.5z' })
            )
        );
    };

    return FaPaste;
})(React.Component);

exports['default'] = FaPaste;
module.exports = exports['default'];