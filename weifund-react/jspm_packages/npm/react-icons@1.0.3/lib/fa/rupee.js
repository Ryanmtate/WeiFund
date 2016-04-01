/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaRupee = (function (_React$Component) {
    _inherits(FaRupee, _React$Component);

    function FaRupee() {
        _classCallCheck(this, FaRupee);

        _React$Component.apply(this, arguments);
    }

    FaRupee.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm15.6 11.7v1.8000000000000007q0 0.1999999999999993-0.1999999999999993 0.40000000000000036t-0.40000000000000036 0.09999999999999964h-2.9000000000000004q-0.40000000000000036 2.5-2.200000000000001 4.100000000000001t-4.799999999999999 1.8999999999999986q2.9000000000000004 3.1000000000000014 8 9.3 0.1999999999999993 0.3000000000000007 0 0.6000000000000014-0.09999999999999964 0.3000000000000007-0.5 0.3000000000000007h-3.4000000000000004q-0.1999999999999993 0-0.40000000000000036-0.1999999999999993-5.3-6.400000000000002-8.6-9.900000000000002-0.2-0.1999999999999993-0.2-0.3999999999999986v-2.1999999999999993q0-0.1999999999999993 0.2-0.3999999999999986t0.4-0.1999999999999993h1.9q2.3 0 3.7-0.6999999999999993t1.8000000000000007-2.2000000000000064h-7.4q-0.29999999999999966 0-0.3999999999999997-0.09999999999999964t-0.2-0.40000000000000036v-1.8000000000000007q0-0.1999999999999993 0.2-0.40000000000000036t0.4-0.1999999999999993h7.1q-1-1.9000000000000004-4.6-1.9000000000000004h-2.4999999999999996q-0.3000000000000001 0-0.4000000000000001-0.1999999999999993t-0.2-0.40000000000000036v-2.3q0-0.20000000000000018 0.2-0.40000000000000036t0.4000000000000001-0.09999999999999964h14.4q0.1999999999999993 0 0.40000000000000036 0.09999999999999964t0.1999999999999993 0.40000000000000036v1.7999999999999998q0 0.1999999999999993-0.1999999999999993 0.40000000000000036t-0.40000000000000036 0.09999999999999964h-4q0.8000000000000007 1.0999999999999996 1.0999999999999996 2.5h2.9000000000000004q0.3000000000000007 0 0.40000000000000036 0.1999999999999993t0.1999999999999993 0.40000000000000036z' })
            )
        );
    };

    return FaRupee;
})(React.Component);

exports['default'] = FaRupee;
module.exports = exports['default'];