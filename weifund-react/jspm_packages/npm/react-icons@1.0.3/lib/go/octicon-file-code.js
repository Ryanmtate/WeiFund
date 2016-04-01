/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonFileCode = (function (_React$Component) {
    _inherits(GoOcticonFileCode, _React$Component);

    function GoOcticonFileCode() {
        _classCallCheck(this, GoOcticonFileCode);

        _React$Component.apply(this, arguments);
    }

    GoOcticonFileCode.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm26.2 2.5h-18.7c-1.4 0-2.5 1.1-2.5 2.5v30c0 1.4 1.1 2.5 2.5 2.5h25c1.4 0 2.5-1.1 2.5-2.5v-23.8l-8.8-8.7z m6.3 32.5h-25v-30h17.5l7.5 7.5v22.5z m-15-17.5l-3.7 3.7 3.7 3.8-1.2 2.5-6.3-6.3 6.3-6.2 1.2 2.5z m6.2-2.5l6.3 6.2-6.3 6.3-1.2-2.5 3.7-3.8-3.7-3.7 1.2-2.5z' })
            )
        );
    };

    return GoOcticonFileCode;
})(React.Component);

exports['default'] = GoOcticonFileCode;
module.exports = exports['default'];