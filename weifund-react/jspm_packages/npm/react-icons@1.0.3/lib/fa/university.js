/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaUniversity = (function (_React$Component) {
    _inherits(FaUniversity, _React$Component);

    function FaUniversity() {
        _classCallCheck(this, FaUniversity);

        _React$Component.apply(this, arguments);
    }

    FaUniversity.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm16.7 3.5l16.599999999999998 6.699999999999999v2.1999999999999993h-2.1999999999999993q0 0.5-0.3000000000000007 0.8000000000000007t-0.8999999999999986 0.3000000000000007h-26.5q-0.49999999999999867 0-0.7999999999999989-0.3000000000000007t-0.3999999999999999-0.8000000000000007h-2.1999999999999997v-2.1999999999999993l16.7-6.7z m-12.299999999999999 11.2h4.5v13.3h2.200000000000001v-13.3h4.5v13.3h2.1999999999999993v-13.3h4.400000000000002v13.3h2.1999999999999993v-13.3h4.5v13.3h1q0.5 0 0.8999999999999986 0.3000000000000007t0.3000000000000007 0.8000000000000007v1.1000000000000014h-28.900000000000002v-1.1000000000000014q8.881784197001252e-16-0.5 0.4000000000000008-0.8000000000000007t0.8000000000000003-0.3000000000000007h1v-13.3z m27.700000000000003 16.6q0.5 0 0.8999999999999986 0.3000000000000007t0.29999999999999716 0.7999999999999972v2.299999999999997h-33.3v-2.299999999999997q0-0.3999999999999986 0.4-0.8000000000000007t0.8000000000000002-0.3000000000000007h30.900000000000002z' })
            )
        );
    };

    return FaUniversity;
})(React.Component);

exports['default'] = FaUniversity;
module.exports = exports['default'];