/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSignalWifi3BarLock = (function (_React$Component) {
    _inherits(MdSignalWifi3BarLock, _React$Component);

    function MdSignalWifi3BarLock() {
        _classCallCheck(this, MdSignalWifi3BarLock);

        _React$Component.apply(this, arguments);
    }

    MdSignalWifi3BarLock.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { opacity: '.3', d: 'm20 5c-11.2 0-18.7 6.2-19.3 6.7l5.3 6.5 14 17.6 5.8-7.1v-4.4c0-3.6 2.4-6.6 5.5-7.8 0.5-0.2 0.9-0.3 1.4-0.3 0.5-0.2 1-0.2 1.5-0.2 0.6 0 1.1 0 1.6 0.2l3.5-4.5c-0.6-0.5-8.1-6.7-19.3-6.7z' }),
                React.createElement('path', { d: 'm38.3 26.7v-2.5c0-2.4-1.8-4.2-4.1-4.2s-4.2 1.8-4.2 4.2v2.5c-0.8 0-1.7 0.8-1.7 1.6v6.7c0 0.8 0.9 1.7 1.7 1.7h8.3c0.9 0 1.7-0.9 1.7-1.7v-6.7c0-0.8-0.8-1.6-1.7-1.6z m-1.6 0h-5v-2.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v2.5z m-16.7 9.1l5.8-7.1v-4.4c0-3.6 2.4-6.6 5.5-7.8-2.5-1.5-6.5-3.2-11.3-3.2-8 0-13.3 4.4-14.2 4.9' })
            )
        );
    };

    return MdSignalWifi3BarLock;
})(React.Component);

exports['default'] = MdSignalWifi3BarLock;
module.exports = exports['default'];