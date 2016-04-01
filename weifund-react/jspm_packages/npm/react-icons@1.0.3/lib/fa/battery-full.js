/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaBatteryFull = (function (_React$Component) {
    _inherits(FaBatteryFull, _React$Component);

    function FaBatteryFull() {
        _classCallCheck(this, FaBatteryFull);

        _React$Component.apply(this, arguments);
    }

    FaBatteryFull.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm33.3 12.4v13.4h-28.9v-13.4h28.9z m2.299999999999997 9.999999999999998h2.200000000000003v-6.6h-2.200000000000003v-5q0-0.3000000000000007-0.20000000000000284-0.40000000000000036t-0.3999999999999986-0.1999999999999993h-32.199999999999996q-0.29999999999999716 0-0.39999999999999725 0.1999999999999993t-0.20000000000000018 0.40000000000000036v16.6q0 0.3000000000000007 0.20000000000000018 0.3999999999999986t0.3999999999999999 0.1999999999999993h32.2q0.20000000000000284 0 0.3999999999999986-0.1999999999999993t0.20000000000000284-0.3999999999999986v-5z m4.399999999999999-6.6v6.6q0 0.8999999999999986-0.7000000000000028 1.6000000000000014t-1.5 0.6999999999999993v2.6999999999999993q0 1.1999999999999993-0.7999999999999972 2t-2 0.8000000000000007h-32.199999999999996q-1.1999999999999973 0-1.9999999999999973-0.8000000000000007t-0.8-2v-16.599999999999998q0-1.1999999999999993 0.8-2t2-0.8000000000000007h32.2q1.1000000000000014 0 2 0.8000000000000007t0.7999999999999972 2v2.6999999999999993q0.8999999999999986 0 1.5 0.6999999999999993t0.7000000000000028 1.5999999999999996z' })
            )
        );
    };

    return FaBatteryFull;
})(React.Component);

exports['default'] = FaBatteryFull;
module.exports = exports['default'];