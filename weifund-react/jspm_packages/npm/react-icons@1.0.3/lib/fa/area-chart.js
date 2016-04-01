/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaAreaChart = (function (_React$Component) {
    _inherits(FaAreaChart, _React$Component);

    function FaAreaChart() {
        _classCallCheck(this, FaAreaChart);

        _React$Component.apply(this, arguments);
    }

    FaAreaChart.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm40 32.5v2.5h-40v-30h2.5v27.5h37.5z m-7.5-20l5 17.5h-32.5v-11.25l8.75-11.25 11.25 11.25z' })
            )
        );
    };

    return FaAreaChart;
})(React.Component);

exports['default'] = FaAreaChart;
module.exports = exports['default'];