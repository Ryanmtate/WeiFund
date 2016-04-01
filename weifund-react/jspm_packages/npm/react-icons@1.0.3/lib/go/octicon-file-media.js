/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonFileMedia = (function (_React$Component) {
    _inherits(GoOcticonFileMedia, _React$Component);

    function GoOcticonFileMedia() {
        _classCallCheck(this, GoOcticonFileMedia);

        _React$Component.apply(this, arguments);
    }

    GoOcticonFileMedia.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 12.5h5v5h-5v-5z m15-1.3v23.8c0 1.4-1.1 2.5-2.5 2.5h-25c-1.4 0-2.5-1.1-2.5-2.5v-30c0-1.4 1.1-2.5 2.5-2.5h18.7l8.8 8.7z m-2.5 1.3l-7.5-7.5h-17.5v27.5l7.5-12.5 5 10 5-5 7.5 7.5v-20z' })
            )
        );
    };

    return GoOcticonFileMedia;
})(React.Component);

exports['default'] = GoOcticonFileMedia;
module.exports = exports['default'];