/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonGitCommit = (function (_React$Component) {
    _inherits(GoOcticonGitCommit, _React$Component);

    function GoOcticonGitCommit() {
        _classCallCheck(this, GoOcticonGitCommit);

        _React$Component.apply(this, arguments);
    }

    GoOcticonGitCommit.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm29.6 17.5c-1.1-4.3-5-7.5-9.6-7.5s-8.5 3.2-9.6 7.5h-7.9v5h7.9c1.1 4.3 5 7.5 9.6 7.5s8.5-3.2 9.6-7.5h7.9v-5h-7.9z m-9.6 8c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5 5.5 2.5 5.5 5.5-2.5 5.5-5.5 5.5z' })
            )
        );
    };

    return GoOcticonGitCommit;
})(React.Component);

exports['default'] = GoOcticonGitCommit;
module.exports = exports['default'];