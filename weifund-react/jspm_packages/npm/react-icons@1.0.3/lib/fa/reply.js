/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaReply = (function (_React$Component) {
    _inherits(FaReply, _React$Component);

    function FaReply() {
        _classCallCheck(this, FaReply);

        _React$Component.apply(this, arguments);
    }

    FaReply.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm31.1 23q0 2.8999999999999986-2.1999999999999993 7.800000000000001 0 0.10000000000000142-0.1999999999999993 0.3999999999999986t-0.1999999999999993 0.6000000000000014q-0.10000000000000142 0.1999999999999993-0.1999999999999993 0.3000000000000007-0.1999999999999993 0.29999999999999716-0.5 0.29999999999999716t-0.3999999999999986-0.10000000000000142-0.1999999999999993-0.5q0-0.10000000000000142 0.10000000000000142-0.3999999999999986t0-0.3999999999999986q0.10000000000000142-1.1999999999999993 0.10000000000000142-2.1999999999999993 0-1.6999999999999993-0.3000000000000007-3.1000000000000014t-0.8000000000000007-2.3999999999999986q-0.6000000000000014-1-1.3999999999999986-1.8000000000000007t-1.9000000000000092-1.1999999999999993q-1-0.5-2.3000000000000007-0.6999999999999993t-2.6999999999999993-0.3999999999999986q-1.3000000000000007-0.10000000000000142-3-0.10000000000000142h-3.9000000000000004v4.399999999999999q0 0.5-0.3000000000000007 0.8000000000000007t-0.8000000000000007 0.3999999999999986q-0.5 0-0.8000000000000007-0.3999999999999986l-8.899999999999997-8.9q-0.3000000000000007-0.3000000000000007-0.3000000000000007-0.6999999999999993t0.3-0.8000000000000007l8.899999999999999-8.9q0.3000000000000007-0.2999999999999998 0.8000000000000007-0.2999999999999998t0.8000000000000007 0.2999999999999998q0.3000000000000007 0.2999999999999998 0.3000000000000007 0.7999999999999998v4.3999999999999995h3.8999999999999986q12.399999999999999 0 15.2 7 0.8999999999999986 2.3000000000000007 0.8999999999999986 5.800000000000001z' })
            )
        );
    };

    return FaReply;
})(React.Component);

exports['default'] = FaReply;
module.exports = exports['default'];