/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonThumbsup = (function (_React$Component) {
    _inherits(GoOcticonThumbsup, _React$Component);

    function GoOcticonThumbsup() {
        _classCallCheck(this, GoOcticonThumbsup);

        _React$Component.apply(this, arguments);
    }

    GoOcticonThumbsup.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm37.5 17.6c0-2.8-2-5.1-5-5.1l-10 1.7c0.9-0.9 3.8-4.6 4.6-5.4 2-2 2-5.3 0-7.3-0.9-1-2.2-1.5-3.5-1.5-1.5 0-2.8 0.5-3.8 1.6 0 0-6.3 6.1-6.8 6.5-1.9 1.7-6.6 4.3-8 4.4h-2.5v22.5h2.5c0.9 0 2.7 1 4.4 1.8 2.8 1.5 6 3.2 9.4 3.2h8.7c2.7 0 5-2 5-4.6 0-0.3-0.3-0.7-0.4-1 1.5-1 2.5-2.7 2.5-4.6 0-0.6 0-1.1-0.2-1.6 1.6-1 2.7-2.7 2.7-4.7 0-0.9-0.2-1.7-0.6-2.4 0.9-1 1-2.2 1-3.5z m-2.5 0c0 1.5-0.8 2.8-2.5 2.8h-1c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 2.7-3.1 2.7h-2.5c1.8 0 3.2 1.8 3.2 3.6 0 1.7-1.1 2.7-2.8 2.7h-1.9c1.3 0 2.5 1.6 2.5 2.9 0 1.3-1.2 2.1-2.5 2.1h-8.7c-5.2 0-10.4-4.9-13.8-4.9v-17.6c2.6 0 7.7-3.4 11.1-6.2l5.4-5.5c0.6-0.6 1.4-0.8 2.1-0.8s1.3 0.2 1.8 0.7c1 1.1 1 2.8-0.1 3.9 0 0-8.1 10.4-7.8 10.4l15-2.5c1.6 0 2.5 1.1 2.5 2.6z' })
            )
        );
    };

    return GoOcticonThumbsup;
})(React.Component);

exports['default'] = GoOcticonThumbsup;
module.exports = exports['default'];