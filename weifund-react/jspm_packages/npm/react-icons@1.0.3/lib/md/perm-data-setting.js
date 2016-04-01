/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdPermDataSetting = (function (_React$Component) {
    _inherits(MdPermDataSetting, _React$Component);

    function MdPermDataSetting() {
        _classCallCheck(this, MdPermDataSetting);

        _React$Component.apply(this, arguments);
    }

    MdPermDataSetting.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm31.6 19.2c0.6 0 1.2 0 1.7 0.1l0-19.3-33.3 33.3h19.3c-0.1-0.5-0.1-1.1-0.1-1.6 0-6.9 5.6-12.5 12.5-12.5z m6.2 13.3c0.1-0.3 0.1-0.6 0.1-0.8 0-0.3 0-0.6-0.1-0.8l1.8-1.4c0.1-0.2 0.2-0.4 0.1-0.6l-1.7-2.8c-0.1-0.2-0.3-0.3-0.5-0.2l-2.1 0.8c-0.4-0.3-0.9-0.6-1.4-0.8l-0.3-2.2c0-0.2-0.2-0.4-0.4-0.4h-3.3c-0.2 0-0.4 0.2-0.4 0.4l-0.4 2.2c-0.5 0.2-0.9 0.5-1.4 0.8l-2-0.8c-0.2-0.1-0.4 0-0.6 0.2l-1.6 2.8c-0.1 0.2-0.1 0.4 0.1 0.6l1.7 1.4c0 0.2 0 0.5 0 0.8 0 0.3 0 0.5 0 0.8l-1.7 1.4c-0.2 0.1-0.2 0.3-0.1 0.5l1.6 2.9c0.1 0.2 0.4 0.2 0.6 0.2l2-0.9c0.5 0.4 0.9 0.6 1.4 0.8l0.4 2.2c0 0.3 0.2 0.4 0.4 0.4h3.3c0.2 0 0.4-0.1 0.4-0.4l0.3-2.2c0.5-0.2 1-0.4 1.4-0.8l2.1 0.9c0.2 0 0.4 0 0.5-0.2l1.7-2.9c0.1-0.2 0.1-0.4-0.1-0.5l-1.8-1.4z m-6.2 1.7c-1.3 0-2.5-1.2-2.5-2.5s1.2-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z' })
            )
        );
    };

    return MdPermDataSetting;
})(React.Component);

exports['default'] = MdPermDataSetting;
module.exports = exports['default'];