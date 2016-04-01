/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoIssueOpened = (function (_React$Component) {
    _inherits(GoIssueOpened, _React$Component);

    function GoIssueOpened() {
        _classCallCheck(this, GoIssueOpened);

        _React$Component.apply(this, arguments);
    }

    GoIssueOpened.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 2.5c-9.665 0-17.5 7.835000000000001-17.5 17.5s7.835000000000001 17.5 17.5 17.5 17.5-7.835000000000001 17.5-17.5-7.835000000000001-17.5-17.5-17.5z m0 30c-6.904999999999999 0-12.5-5.596250000000001-12.5-12.5s5.595000000000001-12.5 12.5-12.5c6.903749999999999 0 12.5 5.594999999999999 12.5 12.5s-5.596250000000001 12.5-12.5 12.5z m-2.5-2.5h5v-5h-5v5z m0-7.5h5v-12.5h-5v12.5z' })
            )
        );
    };

    return GoIssueOpened;
})(React.Component);

exports['default'] = GoIssueOpened;
module.exports = exports['default'];