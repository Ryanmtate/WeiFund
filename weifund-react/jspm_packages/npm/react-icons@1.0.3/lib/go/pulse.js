/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoPulse = (function (_React$Component) {
    _inherits(GoPulse, _React$Component);

    function GoPulse() {
        _classCallCheck(this, GoPulse);

        _React$Component.apply(this, arguments);
    }

    GoPulse.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm31.25 19.9975l-6.75-6.497499999999999-5.5 7.75-2.75-17.25-7.7925 15.997499999999999h-5.9575v5.002500000000001h9l2.25-4.5 2.25 13.5 9-12.75 4 3.75h8.5v-5.002499999999998h-6.25z' })
            )
        );
    };

    return GoPulse;
})(React.Component);

exports['default'] = GoPulse;
module.exports = exports['default'];