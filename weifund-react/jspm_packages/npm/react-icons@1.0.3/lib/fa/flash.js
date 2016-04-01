/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaFlash = (function (_React$Component) {
    _inherits(FaFlash, _React$Component);

    function FaFlash() {
        _classCallCheck(this, FaFlash);

        _React$Component.apply(this, arguments);
    }

    FaFlash.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm15.4 13.4q0.3000000000000007 0.3000000000000007 0.09999999999999964 0.6999999999999993l-9.4 20.1q-0.20000000000000018 0.5-0.7000000000000002 0.5-0.09999999999999964 0-0.2999999999999998-0.10000000000000142-0.2999999999999998-0.10000000000000142-0.40000000000000036-0.29999999999999716t-0.09999999999999964-0.5l3.4000000000000004-14.100000000000005-7 1.8000000000000007h-0.19999999999999996q-0.30000000000000004 0-0.6-0.1999999999999993t-0.2-0.6999999999999993l3.5-14.3q0.10000000000000009-0.20000000000000107 0.2999999999999998-0.40000000000000124t0.5-0.09999999999999964h5.7q0.3000000000000007 0 0.5 0.20000000000000018t0.1999999999999993 0.5v0.2999999999999998l-3 8 6.9-1.6999999999999993h0.1999999999999993q0.3000000000000007 0 0.5999999999999996 0.3000000000000007z' })
            )
        );
    };

    return FaFlash;
})(React.Component);

exports['default'] = FaFlash;
module.exports = exports['default'];