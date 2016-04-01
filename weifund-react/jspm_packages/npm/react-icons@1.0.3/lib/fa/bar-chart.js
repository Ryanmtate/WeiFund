/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaBarChart = (function (_React$Component) {
    _inherits(FaBarChart, _React$Component);

    function FaBarChart() {
        _classCallCheck(this, FaBarChart);

        _React$Component.apply(this, arguments);
    }

    FaBarChart.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm12.5 20v10h-5v-10h5z m7.5-10v20h-5v-20h5z m20 22.5v2.5h-40v-30h2.5v27.5h37.5z m-12.5-17.5v15h-5v-15h5z m7.5-7.5v22.5h-5v-22.5h5z' })
            )
        );
    };

    return FaBarChart;
})(React.Component);

exports['default'] = FaBarChart;
module.exports = exports['default'];