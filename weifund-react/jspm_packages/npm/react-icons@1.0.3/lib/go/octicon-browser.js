/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonBrowser = (function (_React$Component) {
    _inherits(GoOcticonBrowser, _React$Component);

    function GoOcticonBrowser() {
        _classCallCheck(this, GoOcticonBrowser);

        _React$Component.apply(this, arguments);
    }

    GoOcticonBrowser.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm15 7.5h2.5v2.5h-2.5v-2.5z m-5 0h2.5v2.5h-2.5v-2.5z m-5 0h2.5v2.5h-2.5v-2.5z m30 25h-30v-20h30v20z m0-22.5h-15v-2.5h15v2.5z m2.5-2.5c0-1.4-1.1-2.5-2.5-2.5h-30c-1.4 0-2.5 1.1-2.5 2.5v25c0 1.4 1.1 2.5 2.5 2.5h30c1.4 0 2.5-1.1 2.5-2.5v-25z' })
            )
        );
    };

    return GoOcticonBrowser;
})(React.Component);

exports['default'] = GoOcticonBrowser;
module.exports = exports['default'];