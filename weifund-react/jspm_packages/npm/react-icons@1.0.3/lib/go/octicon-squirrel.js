/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonSquirrel = (function (_React$Component) {
    _inherits(GoOcticonSquirrel, _React$Component);

    function GoOcticonSquirrel() {
        _classCallCheck(this, GoOcticonSquirrel);

        _React$Component.apply(this, arguments);
    }

    GoOcticonSquirrel.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm30 2.5c-5.5 0-10 3.3-10 7.3 0 4.8 1.2 7.6 0 15.2 0-11.3-6.9-15.9-10-15.9 0.1-1.2-1.2-1.6-1.2-1.6s-0.6 0.3-0.8 0.8c-0.6-0.7-1.4-0.6-1.4-0.6l-0.3 1.4s-4.6 1.6-4.6 8.1c0.5 0.8 3.8 1.5 6.2 1 2.2 0.2 1.7 2 1.2 2.5-2.1 2.1-4.1-0.7-6.6-0.7s-2.5 2.5 0 2.5 2.5 2.5 7.5 2.5c-7.7 3 0 10 0 10h-2.5c-2.5 0-2.5 2.5-2.5 2.5h15c7.5 0 12.5-2.5 12.5-8.7 0-2.1-1.1-4.5-2.5-6.3-2.8-3.7 0.6-6.7 2.5-5s7.5 2.5 7.5-5c0-5.5-4.5-10-10-10z m-23.7 12.5c-0.7 0-1.3-0.6-1.3-1.3 0-0.6 0.6-1.2 1.3-1.2 0.6 0 1.2 0.6 1.2 1.2 0 0.7-0.6 1.3-1.2 1.3z' })
            )
        );
    };

    return GoOcticonSquirrel;
})(React.Component);

exports['default'] = GoOcticonSquirrel;
module.exports = exports['default'];