/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaWarning = (function (_React$Component) {
    _inherits(FaWarning, _React$Component);

    function FaWarning() {
        _classCallCheck(this, FaWarning);

        _React$Component.apply(this, arguments);
    }

    FaWarning.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm17.8 27.4v-3.3000000000000007q0-0.1999999999999993-0.1999999999999993-0.3999999999999986t-0.3999999999999986-0.1999999999999993h-3.3000000000000007q-0.1999999999999993 0-0.40000000000000036 0.1999999999999993t-0.1999999999999993 0.3999999999999986v3.3000000000000007q0 0.3000000000000007 0.1999999999999993 0.3999999999999986t0.40000000000000036 0.1999999999999993h3.3000000000000007q0.1999999999999993 0 0.3999999999999986-0.1999999999999993t0.1999999999999993-0.3999999999999986z m-0.10000000000000142-6.5l0.3999999999999986-7.9q0-0.3000000000000007-0.1999999999999993-0.40000000000000036-0.1999999999999993-0.1999999999999993-0.3999999999999986-0.1999999999999993h-3.9000000000000004q-0.09999999999999964 0-0.40000000000000036 0.1999999999999993-0.09999999999999964 0.09999999999999964-0.09999999999999964 0.40000000000000036l0.3000000000000007 7.9q0 0.1999999999999993 0.09999999999999964 0.3000000000000007t0.40000000000000036 0.10000000000000142h3.299999999999999q0.1999999999999993 0 0.3999999999999986-0.10000000000000142t0.10000000000000142-0.3000000000000007z m-0.1999999999999993-16.2l13.3 24.4q0.6000000000000014 1.1000000000000014 0 2.1999999999999993-0.3000000000000007 0.5-0.8000000000000007 0.7999999999999972t-1.1000000000000014 0.29999999999999716h-26.7q-0.5999999999999992 0-1.0999999999999992-0.29999999999999716t-0.8-0.8000000000000007q-0.6-1.1000000000000014 0-2.1999999999999993l13.299999999999999-24.399999999999995q0.3000000000000007-0.4999999999999991 0.8000000000000007-0.7999999999999989t1.1999999999999993-0.3999999999999999q0.5999999999999996 0 1.0999999999999996 0.3999999999999999t0.8000000000000007 0.7999999999999998z' })
            )
        );
    };

    return FaWarning;
})(React.Component);

exports['default'] = FaWarning;
module.exports = exports['default'];