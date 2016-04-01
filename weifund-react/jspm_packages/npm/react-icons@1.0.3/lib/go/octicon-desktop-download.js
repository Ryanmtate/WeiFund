/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonDesktopDownload = (function (_React$Component) {
    _inherits(GoOcticonDesktopDownload, _React$Component);

    function GoOcticonDesktopDownload() {
        _classCallCheck(this, GoOcticonDesktopDownload);

        _React$Component.apply(this, arguments);
    }

    GoOcticonDesktopDownload.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm10 15h7.5v-15h5v15h7.5l-10 10-10-10z m27.5-10h-10v2.5h10v20h-35v-20h10v-2.5h-10c-1.4 0-2.5 1.1-2.5 2.5v22.5c0 1.4 1.1 2.5 2.5 2.5h13.4c-0.7 1.5-2.2 3.5-5.9 5h20c-3.7-1.5-5.2-3.5-5.9-5h13.4c1.4 0 2.5-1.1 2.5-2.5v-22.5c0-1.4-1.1-2.5-2.5-2.5z' })
            )
        );
    };

    return GoOcticonDesktopDownload;
})(React.Component);

exports['default'] = GoOcticonDesktopDownload;
module.exports = exports['default'];