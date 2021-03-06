/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoGitMerge = (function (_React$Component) {
    _inherits(GoGitMerge, _React$Component);

    function GoGitMerge() {
        _classCallCheck(this, GoGitMerge);

        _React$Component.apply(this, arguments);
    }

    GoGitMerge.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm30 17.5c-1.8599999999999994 0-3.4624999999999986 1.0274999999999999-4.321249999999999 2.535-0.22500000000000142-0.01624999999999943-0.4437500000000014-0.03500000000000014-0.6787500000000009-0.03500000000000014-5.120000000000001 0-9.977500000000001-3.8999999999999986-11.75-8.727500000000001 1.0662500000000001-0.9162499999999998 1.75-2.26 1.75-3.772499999999999 0-2.76-2.24-5-5-5s-5 2.24-5 5c0 1.8450000000000006 1.0099999999999998 3.4399999999999995 2.5 4.307500000000001v16.385c-1.4900000000000002 0.8662500000000009-2.5 2.4624999999999986-2.5 4.306249999999999 0 2.7575000000000003 2.24 5 5 5s5-2.2424999999999997 5-5c0-1.8475000000000001-1.0099999999999998-3.44125-2.5-4.307500000000001v-8.995000000000001c3.2875000000000014 3.4787500000000016 7.827500000000001 5.803750000000001 12.5 5.803750000000001 0.25 0 0.45374999999999943-0.017499999999998295 0.6787500000000009-0.02499999999999858 0.8625000000000007 1.5 2.4662499999999987 2.5249999999999986 4.321249999999999 2.5249999999999986 2.758749999999999 0 5-2.241250000000001 5-5s-2.241250000000001-5-5-5z m-20 17.5c-1.3787500000000001 0-2.5-1.1187499999999986-2.5-2.5 0-1.379999999999999 1.1212499999999999-2.5 2.5-2.5 1.3825000000000003 0 2.5 1.120000000000001 2.5 2.5 0 1.3812500000000014-1.1174999999999997 2.5-2.5 2.5z m0-25c-1.3787500000000001 0-2.5-1.1174999999999997-2.5-2.5s1.1212499999999999-2.5 2.5-2.5c1.3825000000000003 0 2.5 1.1174999999999997 2.5 2.5s-1.1174999999999997 2.5-2.5 2.5z m20 15c-1.379999999999999 0-2.5-1.1187499999999986-2.5-2.5s1.120000000000001-2.5 2.5-2.5c1.3812500000000014 0 2.5 1.1174999999999997 2.5 2.5s-1.1187499999999986 2.5-2.5 2.5z' })
            )
        );
    };

    return GoGitMerge;
})(React.Component);

exports['default'] = GoGitMerge;
module.exports = exports['default'];