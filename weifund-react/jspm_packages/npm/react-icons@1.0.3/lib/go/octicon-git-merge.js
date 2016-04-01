/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonGitMerge = (function (_React$Component) {
    _inherits(GoOcticonGitMerge, _React$Component);

    function GoOcticonGitMerge() {
        _classCallCheck(this, GoOcticonGitMerge);

        _React$Component.apply(this, arguments);
    }

    GoOcticonGitMerge.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm30 17.5c-1.8 0-3.4 1-4.3 2.5v0c-2.7 0-5.7-0.9-7.8-2.5-1.9-1.5-3.8-4.1-4.8-6.1 1.2-0.9 1.9-2.3 1.9-3.9 0-2.8-2.2-5-5-5s-5 2.2-5 5c0 1.8 1 3.4 2.5 4.3v16.4c-1.5 0.9-2.5 2.5-2.5 4.3 0 2.8 2.2 5 5 5s5-2.2 5-5c0-1.8-1-3.4-2.5-4.3v-9c1.7 1.7 3.6 3.1 5.7 4.2s5.1 1.6 7.5 1.6v0c0.9 1.5 2.5 2.5 4.3 2.5 2.8 0 5-2.2 5-5s-2.2-5-5-5z m-17 15c0 1.6-1.4 3-3 3s-3-1.4-3-3 1.4-3 3-3 3 1.4 3 3z m-3-22c-1.6 0-3-1.4-3-3s1.4-3 3-3 3 1.4 3 3-1.4 3-3 3z m20 15c-1.6 0-3-1.4-3-3s1.4-3 3-3 3 1.4 3 3-1.4 3-3 3z' })
            )
        );
    };

    return GoOcticonGitMerge;
})(React.Component);

exports['default'] = GoOcticonGitMerge;
module.exports = exports['default'];