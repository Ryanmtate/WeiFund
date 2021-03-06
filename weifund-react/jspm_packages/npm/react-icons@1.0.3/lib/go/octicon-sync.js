/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonSync = (function (_React$Component) {
    _inherits(GoOcticonSync, _React$Component);

    function GoOcticonSync() {
        _classCallCheck(this, GoOcticonSync);

        _React$Component.apply(this, arguments);
    }

    GoOcticonSync.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm30.6 18.5c0.5 3.2-0.5 6.5-3 9-3.7 3.6-9.4 4.1-13.5 1.4l2.9-2.9-10.8-1.5 1.5 10.5 3.3-3.1c5.9 4.3 14.3 3.9 19.6-1.4 3.1-3.1 4.6-7.1 4.4-11.1l-4.4-0.9z m-18.2-6c3.7-3.6 9.4-4.1 13.5-1.3l-2.9 2.8 10.7 1.5-1.5-10.5-3.2 3.2c-5.9-4.4-14.3-4-19.6 1.3-3.1 3.1-4.6 7.1-4.4 11.1l4.4 0.9c-0.5-3.2 0.5-6.5 3-9z' })
            )
        );
    };

    return GoOcticonSync;
})(React.Component);

exports['default'] = GoOcticonSync;
module.exports = exports['default'];