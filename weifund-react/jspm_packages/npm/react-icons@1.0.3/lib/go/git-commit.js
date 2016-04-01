/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoGitCommit = (function (_React$Component) {
    _inherits(GoGitCommit, _React$Component);

    function GoGitCommit() {
        _classCallCheck(this, GoGitCommit);

        _React$Component.apply(this, arguments);
    }

    GoGitCommit.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm29.64375 17.5c-1.1125000000000007-4.305-4.989999999999998-7.5-9.64375-7.5s-8.53 3.1950000000000003-9.645 7.5h-7.855v5h7.855c1.1150000000000002 4.306249999999999 4.9925 7.5 9.645 7.5s8.530000000000001-3.1937500000000014 9.64375-7.5h7.856249999999999v-5h-7.856249999999999z m-9.64375 7.5c-2.7600000000000016 0-5-2.241250000000001-5-5s2.240000000000002-5 5-5c2.758749999999999 0 5 2.240000000000002 5 5s-2.241250000000001 5-5 5z' })
            )
        );
    };

    return GoGitCommit;
})(React.Component);

exports['default'] = GoGitCommit;
module.exports = exports['default'];