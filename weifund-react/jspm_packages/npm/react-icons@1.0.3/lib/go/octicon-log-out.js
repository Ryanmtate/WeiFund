/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonLogOut = (function (_React$Component) {
    _inherits(GoOcticonLogOut, _React$Component);

    function GoOcticonLogOut() {
        _classCallCheck(this, GoOcticonLogOut);

        _React$Component.apply(this, arguments);
    }

    GoOcticonLogOut.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm30 22.5v-5h-10v-5h10v-5l10 7.5-10 7.5z m-5 7.5h-10v-22.5l-10-5h20v7.5h2.5v-7.5c0-1.4-1.1-2.5-2.5-2.5h-22.5c-1.4 0-2.5 1.1-2.5 2.5v28.4c0 1 0.5 1.9 1.4 2.3l13.6 6.8v-7.5h10c1.4 0 2.5-1.1 2.5-2.5v-10h-2.5v10z' })
            )
        );
    };

    return GoOcticonLogOut;
})(React.Component);

exports['default'] = GoOcticonLogOut;
module.exports = exports['default'];