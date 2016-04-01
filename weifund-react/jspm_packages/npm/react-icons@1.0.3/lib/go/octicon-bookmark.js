/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonBookmark = (function (_React$Component) {
    _inherits(GoOcticonBookmark, _React$Component);

    function GoOcticonBookmark() {
        _classCallCheck(this, GoOcticonBookmark);

        _React$Component.apply(this, arguments);
    }

    GoOcticonBookmark.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm12.5 35l7.5-5 7.5 5v-27.5c0-1.4-1.1-2.5-2.5-2.5h-10c-1.4 0-2.5 1.1-2.5 2.5v27.5z m2.8-22.7l3.5 0 1-3.2c0.1-0.4 0.3-0.4 0.4 0l1 3.2 3.5 0c0.3 0 0.4 0.2 0.1 0.4l-2.8 2 1.1 3.3c0.1 0.3 0 0.4-0.3 0.2l-2.8-2-2.8 2c-0.3 0.2-0.4 0.1-0.3-0.2l1.1-3.3-2.8-2c-0.3-0.2-0.2-0.4 0.1-0.4z' })
            )
        );
    };

    return GoOcticonBookmark;
})(React.Component);

exports['default'] = GoOcticonBookmark;
module.exports = exports['default'];