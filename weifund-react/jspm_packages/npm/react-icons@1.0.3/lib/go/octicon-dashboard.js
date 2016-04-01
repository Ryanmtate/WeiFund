/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonDashboard = (function (_React$Component) {
    _inherits(GoOcticonDashboard, _React$Component);

    function GoOcticonDashboard() {
        _classCallCheck(this, GoOcticonDashboard);

        _React$Component.apply(this, arguments);
    }

    GoOcticonDashboard.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 12.5h-2.5v-2.5h2.5v2.5z m10 7.5h-2.5v2.5h2.5v-2.5z m-17.5-7.5h-2.5v2.5h2.5v-2.5z m-2.5 7.5h-2.5v2.5h2.5v-2.5z m27.5-13.8l-1.3-1.2-16.2 12.5c-0.2 0-2.5 0-2.5 0-1.4 0-2.5 1.1-2.5 2.5v2.5c0 1.4 1.1 2.5 2.5 2.5h2.5c1.4 0 2.5-1.1 2.5-2.5v-2.3l15-14z m-4 10.3c0.5 1.5 0.8 3.1 0.8 4.7 0 8.6-7 15.6-15.5 15.6s-15.6-7-15.6-15.6 7-15.5 15.6-15.5c3 0 5.7 0.9 8.1 2.4l2.4-2.4c-3-2-6.6-3.2-10.5-3.2-10.4 0-18.8 8.4-18.8 18.7s8.4 18.8 18.8 18.8 18.7-8.4 18.7-18.8c0-2.5-0.5-5-1.5-7.2l-2.5 2.5z' })
            )
        );
    };

    return GoOcticonDashboard;
})(React.Component);

exports['default'] = GoOcticonDashboard;
module.exports = exports['default'];