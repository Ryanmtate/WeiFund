/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdPanoramaWideAngle = (function (_React$Component) {
    _inherits(MdPanoramaWideAngle, _React$Component);

    function MdPanoramaWideAngle() {
        _classCallCheck(this, MdPanoramaWideAngle);

        _React$Component.apply(this, arguments);
    }

    MdPanoramaWideAngle.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 10c4.1 0 7.9 0.3 12.1 1.1 0.8 2.9 1.2 5.9 1.2 8.9 0 3-0.4 6-1.2 8.9-4.3 0.8-8 1.1-12.1 1.1s-7.9-0.3-12.2-1.1c-0.7-2.9-1.1-5.9-1.1-8.9 0-3 0.4-6 1.2-8.9 4.3-0.8 8-1.1 12.1-1.1m0-3.3c-4.6 0-8.7 0.4-13.2 1.2l-1.6 0.2-0.4 1.5c-1 3.5-1.5 7-1.5 10.4s0.5 6.9 1.5 10.4l0.4 1.5 1.6 0.2c4.5 0.8 8.6 1.2 13.2 1.2s8.7-0.4 13.3-1.2l1.5-0.2 0.4-1.5c1-3.5 1.5-7 1.5-10.4s-0.5-6.9-1.5-10.4l-0.4-1.5-1.5-0.2c-4.6-0.8-8.7-1.2-13.3-1.2z' })
            )
        );
    };

    return MdPanoramaWideAngle;
})(React.Component);

exports['default'] = MdPanoramaWideAngle;
module.exports = exports['default'];