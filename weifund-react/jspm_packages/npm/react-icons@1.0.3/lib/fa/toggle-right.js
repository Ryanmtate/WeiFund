/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaToggleRight = (function (_React$Component) {
    _inherits(FaToggleRight, _React$Component);

    function FaToggleRight() {
        _classCallCheck(this, FaToggleRight);

        _React$Component.apply(this, arguments);
    }

    FaToggleRight.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm18.4 18.2q0.5 0.3000000000000007 0.5 0.8999999999999986t-0.5 0.8999999999999986l-7.800000000000001 5.599999999999998q-0.5 0.3999999999999986-1.0999999999999996 0-0.5999999999999996-0.3000000000000007-0.5999999999999996-0.8999999999999986v-11.199999999999996q0-0.6999999999999993 0.5999999999999996-0.9000000000000004 0.5999999999999996-0.40000000000000036 1.0999999999999996 0l7.800000000000001 5.6z m3.8000000000000007 9.2v-16.599999999999998q0-0.3000000000000007-0.10000000000000142-0.40000000000000036t-0.3999999999999986-0.1999999999999993h-16.7q-0.20000000000000018 0-0.40000000000000036 0.1999999999999993t-0.20000000000000018 0.40000000000000036v16.6q0 0.3000000000000007 0.20000000000000018 0.3999999999999986t0.40000000000000036 0.1999999999999993h16.7q0.1999999999999993 0 0.3999999999999986-0.1999999999999993t0.10000000000000142-0.3999999999999986z m4.5-16.6v16.6q0 2.1000000000000014-1.5 3.6000000000000014t-3.5 1.3999999999999986h-16.7q-2.1 0-3.5-1.3999999999999986t-1.5-3.6000000000000014v-16.599999999999998q0-2.0999999999999996 1.5-3.5999999999999996t3.5-1.4000000000000012h16.7q2 0 3.5 1.3999999999999995t1.5 3.5999999999999996z' })
            )
        );
    };

    return FaToggleRight;
})(React.Component);

exports['default'] = FaToggleRight;
module.exports = exports['default'];