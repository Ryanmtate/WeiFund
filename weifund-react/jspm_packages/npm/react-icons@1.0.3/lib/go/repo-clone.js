/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoRepoClone = (function (_React$Component) {
    _inherits(GoRepoClone, _React$Component);

    function GoRepoClone() {
        _classCallCheck(this, GoRepoClone);

        _React$Component.apply(this, arguments);
    }

    GoRepoClone.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm12.5 15h-2.5v2.5h2.5v-2.5z m-5-12.5h10v-2.5h-15s-2.5 1.25-2.5 2.5v30s1.25 2.5 2.5 2.5h5v5l3.75-3.75 3.75 3.75v-5h12.5s2.5-1.25 2.5-2.5v-7.5h-22.5v-22.5z m20 25v3.75s-0.5474999999999994 1.25-1.25 1.25h-11.25v-2.5h-7.5v2.5h-3.75s-1.25-0.625-1.25-1.25v-3.75h25z m-15-17.5h-2.5v2.5h2.5v-2.5z m-2.5 12.5h2.5v-2.5h-2.5v2.5z m27.5-22.5h-12.5s-2.5 1.25-2.5 2.5v15s1.25 2.5 2.5 2.5h2.5v2.5l1.25-1.25 1.25 1.25v-2.5h7.5s2.5-1.25 2.5-2.5v-15s-1.25-2.5-2.5-2.5z m-10 17.5h-1.25s-1.25-0.5874999999999986-1.25-1.25v-1.25h2.5v2.5z m10-1.25c0 0.625-0.5874999999999986 1.25-1.25 1.25h-6.25v-2.5h7.5v1.25z m0-3.75h-10v-10h8.75s1.25 0 1.25 1.25v8.75z m-25-7.5h-2.5v2.5h2.5v-2.5z' })
            )
        );
    };

    return GoRepoClone;
})(React.Component);

exports['default'] = GoRepoClone;
module.exports = exports['default'];