/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoPlaybackFastForward = (function (_React$Component) {
    _inherits(GoPlaybackFastForward, _React$Component);

    function GoPlaybackFastForward() {
        _classCallCheck(this, GoPlaybackFastForward);

        _React$Component.apply(this, arguments);
    }

    GoPlaybackFastForward.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm5 30l15-10-15-10v20z m30-10l-15-10v20l15-10z' })
            )
        );
    };

    return GoPlaybackFastForward;
})(React.Component);

exports['default'] = GoPlaybackFastForward;
module.exports = exports['default'];