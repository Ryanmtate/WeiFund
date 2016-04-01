/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonFileZip = (function (_React$Component) {
    _inherits(GoOcticonFileZip, _React$Component);

    function GoOcticonFileZip() {
        _classCallCheck(this, GoOcticonFileZip);

        _React$Component.apply(this, arguments);
    }

    GoOcticonFileZip.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm26.2 2.5h-18.7c-1.4 0-2.5 1.1-2.5 2.5v30c0 1.4 1.1 2.5 2.5 2.5h25c1.4 0 2.5-1.1 2.5-2.5v-23.8l-8.8-8.7z m6.3 32.5h-25v-30h7.5v2.5h2.5v-2.5h7.5l7.5 7.5v22.5z m-15-25v-2.5h2.5v2.5h-2.5z m-2.5 0h2.5v2.5h-2.5v-2.5z m2.5 5v-2.5h2.5v2.5h-2.5z m-2.5 0h2.5v2.5h-2.5v-2.5z m2.5 5v-2.5h2.5v2.5h-2.5z m-2.5 3.2c-1.5 0.9-2.5 2.5-2.5 4.3v2.5h10v-2.5c0-2.8-2.2-5-5-5v-2.5h-2.5v3.2z m5 1.8v2.5h-5v-2.5h5z' })
            )
        );
    };

    return GoOcticonFileZip;
})(React.Component);

exports['default'] = GoOcticonFileZip;
module.exports = exports['default'];