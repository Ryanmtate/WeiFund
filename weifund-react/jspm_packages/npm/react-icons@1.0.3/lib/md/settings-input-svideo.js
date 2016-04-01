/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSettingsInputSvideo = (function (_React$Component) {
    _inherits(MdSettingsInputSvideo, _React$Component);

    function MdSettingsInputSvideo() {
        _classCallCheck(this, MdSettingsInputSvideo);

        _React$Component.apply(this, arguments);
    }

    MdSettingsInputSvideo.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm13.3 19.2c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.2 2.5 2.5 2.5 2.5-1.1 2.5-2.5z m11.7-8.4c0-1.3-1.1-2.5-2.5-2.5h-5c-1.4 0-2.5 1.2-2.5 2.5s1.1 2.5 2.5 2.5h5c1.4 0 2.5-1.1 2.5-2.5z m-10.8 14.2c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5z m5.8-23.3c-10.1 0-18.3 8.2-18.3 18.3s8.2 18.3 18.3 18.3 18.3-8.2 18.3-18.3-8.2-18.3-18.3-18.3z m0 33.3c-8.3 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.7 15-15 15z m9.2-18.3c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.2 2.5-2.5-1.1-2.5-2.5-2.5z m-3.4 8.3c-1.3 0-2.5 1.1-2.5 2.5s1.2 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5z' })
            )
        );
    };

    return MdSettingsInputSvideo;
})(React.Component);

exports['default'] = MdSettingsInputSvideo;
module.exports = exports['default'];