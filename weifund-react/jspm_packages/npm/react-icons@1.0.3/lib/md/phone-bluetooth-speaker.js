/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdPhoneBluetoothSpeaker = (function (_React$Component) {
    _inherits(MdPhoneBluetoothSpeaker, _React$Component);

    function MdPhoneBluetoothSpeaker() {
        _classCallCheck(this, MdPhoneBluetoothSpeaker);

        _React$Component.apply(this, arguments);
    }

    MdPhoneBluetoothSpeaker.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm24.5 15.8l3.8-3.8v6.3h0.9l4.7-4.7-3.5-3.6 3.5-3.6-4.7-4.7h-0.9v6.3l-3.8-3.8-1.2 1.2 4.7 4.6-4.7 4.6 1.2 1.2z m5.5-10.9l1.6 1.5-1.6 1.6v-3.1z m0 7.1l1.6 1.6-1.6 1.6v-3.2z m3.3 13.8c-2 0-4-0.3-5.9-0.9-0.6-0.2-1.2-0.1-1.7 0.4l-3.7 3.7c-4.7-2.4-8.6-6.3-11-11l3.7-3.7c0.5-0.4 0.6-1.1 0.4-1.7-0.6-1.8-0.9-3.8-0.9-5.9 0-0.9-0.8-1.7-1.7-1.7h-5.8c-0.9 0-1.7 0.8-1.7 1.7 0 15.6 12.7 28.3 28.3 28.3 1 0 1.7-0.7 1.7-1.7v-5.8c0-0.9-0.7-1.7-1.7-1.7z' })
            )
        );
    };

    return MdPhoneBluetoothSpeaker;
})(React.Component);

exports['default'] = MdPhoneBluetoothSpeaker;
module.exports = exports['default'];