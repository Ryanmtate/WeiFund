/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaShare = (function (_React$Component) {
    _inherits(FaShare, _React$Component);

    function FaShare() {
        _classCallCheck(this, FaShare);

        _React$Component.apply(this, arguments);
    }

    FaShare.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm30.8 13.9q0.3000000000000007 0.3000000000000007 0.3000000000000007 0.8000000000000007t-0.3000000000000007 0.6999999999999993l-8.900000000000002 8.9q-0.3000000000000007 0.3999999999999986-0.8000000000000007 0.3999999999999986t-0.8000000000000007-0.3999999999999986q-0.3000000000000007-0.3000000000000007-0.3000000000000007-0.8000000000000007v-4.399999999999999h-3.8999999999999986q-1.6999999999999993 0-3 0.10000000000000142t-2.6999999999999993 0.3999999999999986q-1.3000000000000007 0.1999999999999993-2.3000000000000007 0.6999999999999993t-1.7999999999999998 1.1999999999999993q-0.9000000000000004 0.8000000000000007-1.3999999999999995 1.8000000000000007t-0.8999999999999986 2.3999999999999986q-0.2999999999999998 1.3999999999999986-0.2999999999999998 3.1000000000000014 0 1 0.10000000000000009 2.1999999999999993 0 0.10000000000000142 0 0.3999999999999986t0.10000000000000009 0.3999999999999986q0 0.29999999999999716-0.20000000000000018 0.5t-0.3999999999999999 0.10000000000000142q-0.20000000000000018 0-0.5-0.29999999999999716-0.10000000000000009-0.10000000000000142-0.20000000000000018-0.3000000000000007t-0.20000000000000018-0.6000000000000014q-0.10000000000000009-0.3000000000000007-0.20000000000000018-0.3999999999999986-2.1999999999999997-4.900000000000002-2.1999999999999997-7.800000000000001 0-3.5 0.9-5.800000000000001 2.8-7 15.199999999999998-7h3.900000000000002v-4.3999999999999995q0-0.5 0.3000000000000007-0.7999999999999998t0.8000000000000007-0.2999999999999998q0.5 0 0.8000000000000007 0.2999999999999998l8.900000000000002 8.9z' })
            )
        );
    };

    return FaShare;
})(React.Component);

exports['default'] = FaShare;
module.exports = exports['default'];