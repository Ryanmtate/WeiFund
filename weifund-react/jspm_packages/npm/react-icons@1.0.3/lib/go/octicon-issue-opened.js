/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonIssueOpened = (function (_React$Component) {
    _inherits(GoOcticonIssueOpened, _React$Component);

    function GoOcticonIssueOpened() {
        _classCallCheck(this, GoOcticonIssueOpened);

        _React$Component.apply(this, arguments);
    }

    GoOcticonIssueOpened.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 5.7c7.9 0 14.3 6.4 14.3 14.3s-6.4 14.3-14.3 14.3-14.3-6.4-14.3-14.3 6.4-14.3 14.3-14.3m0-3.2c-9.6 0-17.5 7.9-17.5 17.5s7.9 17.5 17.5 17.5 17.5-7.9 17.5-17.5-7.9-17.5-17.5-17.5z m2.5 7.5h-5v12.5h5v-12.5z m0 15h-5v5h5v-5z' })
            )
        );
    };

    return GoOcticonIssueOpened;
})(React.Component);

exports['default'] = GoOcticonIssueOpened;
module.exports = exports['default'];