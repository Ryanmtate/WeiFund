/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoSteps = (function (_React$Component) {
    _inherits(GoSteps, _React$Component);

    function GoSteps() {
        _classCallCheck(this, GoSteps);

        _React$Component.apply(this, arguments);
    }

    GoSteps.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm12.8125 2.5c-2.93375 0-5.3125 3.9175000000000004-5.3125 8.75 0 2.6875 0.6649999999999991 5.541249999999998 1.3287499999999994 9.942499999999999 0.521250000000002 3.4499999999999993 1.7837500000000013 6.307500000000001 3.9837500000000006 6.307500000000001s3.6750000000000007-1.90625 3.6750000000000007-5.390000000000001c0-1.1875-0.9749999999999996-3.0749999999999993-1.0175-4.6875-0.07874999999999943-2.91 1.950000000000001-4.07 1.950000000000001-6.758749999999999 0-4.83125-1.672500000000003-8.16375-4.607500000000002-8.16375z m14.335 10c-2.93375 0-4.606249999999999 3.3312500000000007-4.606249999999999 8.162500000000001 0 2.6900000000000013 2.0287499999999987 3.8500000000000014 1.9499999999999993 6.758749999999999-0.04374999999999929 1.6125000000000007-1.0187500000000007 3.5025000000000013-1.0187500000000007 4.6875 0 3.4849999999999994 1.4750000000000014 5.391249999999999 3.6750000000000007 5.391249999999999s3.465-2.8587500000000006 3.9849999999999994-6.307500000000001c0.6625000000000014-4.4025 1.3287499999999994-7.25375 1.3287499999999994-9.942499999999999 0-4.8325-2.379999999999999-8.75-5.3125-8.75z' })
            )
        );
    };

    return GoSteps;
})(React.Component);

exports['default'] = GoSteps;
module.exports = exports['default'];