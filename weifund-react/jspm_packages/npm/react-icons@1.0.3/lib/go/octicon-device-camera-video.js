/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonDeviceCameraVideo = (function (_React$Component) {
    _inherits(GoOcticonDeviceCameraVideo, _React$Component);

    function GoOcticonDeviceCameraVideo() {
        _classCallCheck(this, GoOcticonDeviceCameraVideo);

        _React$Component.apply(this, arguments);
    }

    GoOcticonDeviceCameraVideo.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm38 7.7l-13 9.1v-6.8c0-1.4-1.1-2.5-2.5-2.5h-20c-1.4 0-2.5 1.1-2.5 2.5v22.5c0 1.4 1.1 2.5 2.5 2.5h20c1.4 0 2.5-1.1 2.5-2.5v-6.8l13 9.1c0.8 0.6 2 0 2-1.1v-25c0-1-1.2-1.6-2-1z' })
            )
        );
    };

    return GoOcticonDeviceCameraVideo;
})(React.Component);

exports['default'] = GoOcticonDeviceCameraVideo;
module.exports = exports['default'];