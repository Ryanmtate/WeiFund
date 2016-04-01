/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaBarChartO = (function (_React$Component) {
    _inherits(FaBarChartO, _React$Component);

    function FaBarChartO() {
        _classCallCheck(this, FaBarChartO);

        _React$Component.apply(this, arguments);
    }

    FaBarChartO.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm11.1 19.1v8.899999999999999h-4.3999999999999995v-8.899999999999999h4.400000000000001z m6.700000000000001-8.9v17.799999999999997h-4.5v-17.8h4.5z m17.8 20v2.200000000000003h-35.6v-26.600000000000005h2.2v24.4h33.4z m-11.200000000000003-15.500000000000004v13.3h-4.399999999999999v-13.3h4.399999999999999z m6.700000000000003-6.699999999999999v20h-4.399999999999999v-20h4.399999999999999z' })
            )
        );
    };

    return FaBarChartO;
})(React.Component);

exports['default'] = FaBarChartO;
module.exports = exports['default'];