/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonTools = (function (_React$Component) {
    _inherits(GoOcticonTools, _React$Component);

    function GoOcticonTools() {
        _classCallCheck(this, GoOcticonTools);

        _React$Component.apply(this, arguments);
    }

    GoOcticonTools.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm11.2 18.2c0.7 0.6 3.2 3.3 3.2 3.3l1.4-1.5-2.2-2.2 4.2-4.5s-1.9-1.9-1.1-1.1c0.8-3 0.1-6.3-2.1-8.6-2.3-2.4-5.4-3.1-8.3-2.3l4.8 5-1.2 4.9-4.8 1.3-4.8-5c-0.8 2.9 0 6.2 2.2 8.5 2.4 2.4 5.7 3.2 8.7 2.2z m16.1 4.8l-5.8 5.8 9.6 9.9c0.8 0.8 1.8 1.2 2.8 1.2 1.1 0 2.1-0.4 2.9-1.2 1.5-1.6 1.5-4.2 0-5.9l-9.5-9.8z m12.7-16.7l-6.1-6.3-18.1 18.6 2.2 2.3-10.8 11.2-2.4 1.3-3.5 5.7 0.9 0.9 5.5-3.6 1.3-2.6 10.8-11.1 2.2 2.3 18-18.7z' })
            )
        );
    };

    return GoOcticonTools;
})(React.Component);

exports['default'] = GoOcticonTools;
module.exports = exports['default'];