/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonIssueReopened = (function (_React$Component) {
    _inherits(GoOcticonIssueReopened, _React$Component);

    function GoOcticonIssueReopened() {
        _classCallCheck(this, GoOcticonIssueReopened);

        _React$Component.apply(this, arguments);
    }

    GoOcticonIssueReopened.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm22.5 22.5h-5v-12.5h5v12.5z m-5 7.5h5v-5h-5v5z m15.8-5h-5.8l3.7 3.7c-2.6 3.4-6.6 5.6-11.2 5.6-7.9 0-14.3-6.4-14.3-14.3 0-0.9 0.1-1.7 0.3-2.5h-3.3c-0.1 0.8-0.2 1.6-0.2 2.5 0 9.6 7.9 17.5 17.5 17.5 5.5 0 10.3-2.5 13.5-6.5l4 4v-10h-4.2z m-26.6-10h5.8l-3.7-3.8c2.6-3.3 6.6-5.5 11.2-5.5 7.9 0 14.3 6.4 14.3 14.3 0 0.9-0.1 1.7-0.3 2.5h3.3c0.1-0.8 0.2-1.6 0.2-2.5 0-9.6-7.9-17.5-17.5-17.5-5.5 0-10.3 2.5-13.5 6.5l-4-4v10h4.2z' })
            )
        );
    };

    return GoOcticonIssueReopened;
})(React.Component);

exports['default'] = GoOcticonIssueReopened;
module.exports = exports['default'];