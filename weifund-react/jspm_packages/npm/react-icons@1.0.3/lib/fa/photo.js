/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaPhoto = (function (_React$Component) {
    _inherits(FaPhoto, _React$Component);

    function FaPhoto() {
        _classCallCheck(this, FaPhoto);

        _React$Component.apply(this, arguments);
    }

    FaPhoto.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm10.1 11.2q1 1 1 2.3000000000000007t-1 2.4000000000000004q-0.9000000000000004 0.9999999999999982-2.3 0.9999999999999982t-2.3999999999999995-1q-1-1-1-2.4000000000000004t1-2.299999999999999q1-1 2.4000000000000004-1t2.3000000000000007 1z m18.799999999999997 9v7.800000000000001h-24.5v-3.3000000000000007l5.600000000000001-5.599999999999998 2.8000000000000007 2.8000000000000007 8.900000000000002-8.9 7.199999999999999 7.200000000000001z m1.7000000000000028-12.2h-27.8q-0.20000000000000107 0-0.4000000000000008 0.1999999999999993t-0.20000000000000018 0.3000000000000007v21.2q0 0.1999999999999993 0.20000000000000018 0.3000000000000007t0.3999999999999999 0.1999999999999993h27.8q0.1999999999999993 0 0.3000000000000007-0.1999999999999993t0.1999999999999993-0.3000000000000007v-21.2q0-0.1999999999999993-0.1999999999999993-0.3000000000000007t-0.3000000000000007-0.20000000000000018z m2.700000000000003 0.5v21.2q0 1.1000000000000014-0.7999999999999972 1.8999999999999986t-1.8999999999999986 0.8000000000000007h-27.800000000000008q-1.2000000000000008 0-2.000000000000001-0.8000000000000007t-0.7999999999999998-1.8999999999999986v-21.2q0-1.0999999999999996 0.8-1.9000000000000004t1.9999999999999998-0.7999999999999998h27.8q1.1000000000000014 0 1.8999999999999986 0.7999999999999998t0.7999999999999972 1.9000000000000004z' })
            )
        );
    };

    return FaPhoto;
})(React.Component);

exports['default'] = FaPhoto;
module.exports = exports['default'];