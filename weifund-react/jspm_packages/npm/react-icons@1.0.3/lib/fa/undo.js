/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaUndo = (function (_React$Component) {
    _inherits(FaUndo, _React$Component);

    function FaUndo() {
        _classCallCheck(this, FaUndo);

        _React$Component.apply(this, arguments);
    }

    FaUndo.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm25.6 13.9q1.1000000000000014 2.4999999999999982 1.1000000000000014 5.200000000000001t-1.1000000000000014 5.199999999999999q-1.1000000000000014 2.3999999999999986-2.8000000000000007 4.199999999999999t-4.300000000000001 2.8999999999999986q-2.5 1-5.199999999999999 1-3 0-5.6-1.1999999999999993t-4.6-3.6000000000000014q-0.10000000000000009-0.1999999999999993-0.10000000000000009-0.3999999999999986t0.10000000000000009-0.3000000000000007l2.4000000000000004-2.3999999999999986q0.20000000000000018-0.1999999999999993 0.40000000000000036-0.1999999999999993 0.2999999999999998 0.10000000000000142 0.40000000000000036 0.1999999999999993 1.2999999999999998 1.6999999999999993 3.0999999999999996 2.6000000000000014t3.9000000000000004 0.8999999999999986q1.8000000000000007 0 3.5000000000000018-0.6999999999999993t2.8000000000000007-1.8999999999999986q1.1999999999999993-1.1999999999999993 1.8999999999999986-2.8999999999999986t0.6999999999999993-3.3999999999999986q0-1.8000000000000007-0.6999999999999993-3.4000000000000004t-1.8999999999999986-2.9000000000000004q-1.1999999999999993-1.1999999999999993-2.8000000000000007-1.9000000000000004t-3.5-0.6999999999999993q-1.6999999999999993 0-3.1999999999999993 0.5999999999999996t-2.8 1.8000000000000007l2.399999999999994 2.399999999999995q0.5 0.5 0.1999999999999993 1.1999999999999993t-1 0.6999999999999993h-7.799999999999999q-0.3999999999999996 0-0.7999999999999996-0.3999999999999986t-0.3-0.6999999999999993v-7.800000000000001q0-0.7000000000000002 0.7-1 0.7-0.2999999999999998 1.2 0.20000000000000018l2.1999999999999997 2.2q1.9000000000000004-1.7000000000000002 4.300000000000001-2.7t4.9-0.9000000000000004q2.6999999999999993 0 5.199999999999999 1t4.300000000000001 2.8999999999999995q1.6999999999999993 1.8000000000000007 2.8000000000000007 4.199999999999999z' })
            )
        );
    };

    return FaUndo;
})(React.Component);

exports['default'] = FaUndo;
module.exports = exports['default'];