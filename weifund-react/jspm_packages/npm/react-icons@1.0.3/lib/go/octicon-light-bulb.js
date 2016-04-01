/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonLightBulb = (function (_React$Component) {
    _inherits(GoOcticonLightBulb, _React$Component);

    function GoOcticonLightBulb() {
        _classCallCheck(this, GoOcticonLightBulb);

        _React$Component.apply(this, arguments);
    }

    GoOcticonLightBulb.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm18.8 0c-7.6 0-13.8 5.5-13.8 12.5 0 2.3 1.4 5.6 2.5 7.5 3.4 5.6 4.5 7 5 10v2.5h12.5v-2.5c0.5-3 1.6-4.4 5-10 1.1-1.9 2.5-5.2 2.5-7.5 0-7-6.2-12.5-13.7-12.5z m9.1 18.7c-0.7 1.1-1.2 2-1.7 2.8-2.2 3.5-3.2 5.1-3.7 8.1 0 0.1 0 0.2 0 0.4h-7.5c0-0.2 0-0.3 0-0.4-0.5-3-1.5-4.6-3.7-8.1-0.5-0.8-1-1.7-1.7-2.8-1-1.7-2.1-4.6-2.1-6.2 0-5.5 5-10 11.3-10 3 0 5.8 1.1 8 3 2.1 1.8 3.2 4.3 3.2 7 0 1.6-1.1 4.5-2.1 6.2z m-15.4 16.3h12.5c-0.6 2.9-3.2 5-6.2 5s-5.7-2.1-6.3-5z' })
            )
        );
    };

    return GoOcticonLightBulb;
})(React.Component);

exports['default'] = GoOcticonLightBulb;
module.exports = exports['default'];