/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaNavicon = (function (_React$Component) {
    _inherits(FaNavicon, _React$Component);

    function FaNavicon() {
        _classCallCheck(this, FaNavicon);

        _React$Component.apply(this, arguments);
    }

    FaNavicon.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm26.7 26.9v2.1999999999999993q0 0.3999999999999986-0.3999999999999986 0.8000000000000007t-0.6999999999999993 0.3000000000000007h-24.5q-0.40000000000000135 0-0.8000000000000014-0.3000000000000007t-0.3-0.8000000000000007v-2.1999999999999993q0-0.5 0.3-0.8000000000000007t0.8-0.3000000000000007h24.5q0.3999999999999986 0 0.6999999999999993 0.3000000000000007t0.3999999999999986 0.8000000000000007z m0-8.899999999999999v2.1999999999999993q0 0.5-0.3999999999999986 0.8000000000000007t-0.6999999999999993 0.3000000000000007h-24.5q-0.40000000000000135 0-0.8000000000000014-0.3000000000000007t-0.3-0.8000000000000007v-2.1999999999999993q0-0.5 0.3-0.8000000000000007t0.8-0.3000000000000007h24.5q0.3999999999999986 0 0.6999999999999993 0.3000000000000007t0.3999999999999986 0.8000000000000007z m0-8.9v2.200000000000001q0 0.5-0.3999999999999986 0.8000000000000007t-0.6999999999999993 0.3000000000000007h-24.5q-0.40000000000000135 0-0.8000000000000014-0.3000000000000007t-0.3-0.8000000000000007v-2.200000000000001q0-0.5 0.3-0.8000000000000007t0.8-0.2999999999999998h24.5q0.3999999999999986 0 0.6999999999999993 0.2999999999999998t0.3999999999999986 0.8000000000000007z' })
            )
        );
    };

    return FaNavicon;
})(React.Component);

exports['default'] = FaNavicon;
module.exports = exports['default'];