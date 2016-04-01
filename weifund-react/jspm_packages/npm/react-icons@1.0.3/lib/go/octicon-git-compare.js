/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonGitCompare = (function (_React$Component) {
    _inherits(GoOcticonGitCompare, _React$Component);

    function GoOcticonGitCompare() {
        _classCallCheck(this, GoOcticonGitCompare);

        _React$Component.apply(this, arguments);
    }

    GoOcticonGitCompare.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm15 30h-2.5c-0.7 0-1.2-0.3-1.7-0.8s-0.8-1-0.8-1.7v-15.7c1.5-0.9 2.5-2.5 2.5-4.3 0-2.8-2.2-5-5-5s-5 2.2-5 5c0 1.8 1 3.4 2.5 4.3v15.7c0.1 2 0.9 3.7 2.3 5.2s3.2 2.2 5.2 2.3h2.5v5l7.5-7.5-7.5-7.5v5z m-7.5-25.5c1.6 0 3 1.4 3 3s-1.4 3-3 3-3-1.4-3-3 1.4-3 3-3z m27.5 23.7v-15.7c-0.1-2-0.9-3.7-2.3-5.2s-3.2-2.2-5.2-2.3h-2.5v-5l-7.5 7.5 7.5 7.5v-5h2.5c0.7 0 1.2 0.3 1.7 0.8s0.8 1 0.8 1.7v15.7c-1.5 0.9-2.5 2.5-2.5 4.3 0 2.8 2.2 5 5 5s5-2.2 5-5c0-1.8-1-3.4-2.5-4.3z m-2.5 7.3c-1.6 0-3-1.4-3-3s1.4-3 3-3 3 1.4 3 3-1.4 3-3 3z' })
            )
        );
    };

    return GoOcticonGitCompare;
})(React.Component);

exports['default'] = GoOcticonGitCompare;
module.exports = exports['default'];