/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonDeviceCamera = (function (_React$Component) {
    _inherits(GoOcticonDeviceCamera, _React$Component);

    function GoOcticonDeviceCamera() {
        _classCallCheck(this, GoOcticonDeviceCamera);

        _React$Component.apply(this, arguments);
    }

    GoOcticonDeviceCamera.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm37.5 7.5h-20c0-1.4-1.1-2.5-2.5-2.5h-10c-1.4 0-2.5 1.1-2.5 2.5-1.4 0-2.5 1.1-2.5 2.5v22.5c0 1.4 1.1 2.5 2.5 2.5h35c1.4 0 2.5-1.1 2.5-2.5v-22.5c0-1.4-1.1-2.5-2.5-2.5z m-22.5 5h-10v-2.5h10v2.5z m11.2 17.5c-4.8 0-8.7-3.9-8.7-8.8s3.9-8.7 8.7-8.7 8.8 3.9 8.8 8.7-3.9 8.8-8.8 8.8z m6.3-8.8c0 3.5-2.8 6.3-6.3 6.3s-6.2-2.8-6.2-6.3 2.8-6.2 6.2-6.2 6.3 2.8 6.3 6.2z' })
            )
        );
    };

    return GoOcticonDeviceCamera;
})(React.Component);

exports['default'] = GoOcticonDeviceCamera;
module.exports = exports['default'];