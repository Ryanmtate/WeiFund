/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaSoccerBallO = (function (_React$Component) {
    _inherits(FaSoccerBallO, _React$Component);

    function FaSoccerBallO() {
        _classCallCheck(this, FaSoccerBallO);

        _React$Component.apply(this, arguments);
    }

    FaSoccerBallO.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm10.6 17.7l5-3.5999999999999996 4.9 3.5999999999999996-1.8999999999999986 5.800000000000001h-6.1l-1.9000000000000004-5.800000000000001z m-1.0999999999999996-12.899999999999999q2.9000000000000004-1.3000000000000007 6.1-1.3000000000000007t6.000000000000002 1.2999999999999998q2.8999999999999986 1.2000000000000002 5 3.3t3.3000000000000007 5q1.1999999999999993 2.799999999999999 1.1999999999999993 6.000000000000002t-1.1999999999999993 6q-1.3000000000000007 2.8999999999999986-3.3000000000000007 5t-5 3.299999999999997q-2.8999999999999986 1.2999999999999972-6 1.2999999999999972t-6.1-1.2999999999999972q-2.9000000000000004-1.2000000000000028-5-3.3000000000000007t-3.3-5q-1.200000000000002-2.799999999999997-1.200000000000002-5.9999999999999964t1.2-6q1.3-2.9000000000000004 3.3-5t5-3.3z m16.8 22.2q2.6000000000000014-3.5 2.6000000000000014-7.899999999999999v-0.10000000000000142l-1.8000000000000007 1.6000000000000014-4.100000000000001-3.8999999999999986 1-5.6 2.3999999999999986 0.1999999999999993q-2.6000000000000014-3.5999999999999996-6.800000000000001-4.9l0.8999999999999986 2.1999999999999993-4.9 2.6999999999999993-5-2.6999999999999993 0.9000000000000004-2.2q-4.2 1.2999999999999998-6.8 4.8999999999999995l2.3999999999999995-0.1999999999999993 1.0999999999999996 5.600000000000001-4.199999999999996 3.8999999999999986-1.7999999999999998-1.6000000000000014v0.10000000000000142q0 4.399999999999999 2.6000000000000005 7.899999999999999l0.5-2.3000000000000007 5.699999999999999 0.6999999999999993 2.4000000000000004 5.199999999999999-2 1.1999999999999993q2 0.6000000000000014 4.200000000000001 0.6000000000000014t4.100000000000001-0.6000000000000014l-2-1.1999999999999993 2.3999999999999986-5.199999999999999 5.699999999999999-0.6999999999999993 0.5 2.3000000000000007z' })
            )
        );
    };

    return FaSoccerBallO;
})(React.Component);

exports['default'] = FaSoccerBallO;
module.exports = exports['default'];