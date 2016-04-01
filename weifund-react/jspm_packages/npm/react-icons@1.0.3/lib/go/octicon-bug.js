/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonBug = (function (_React$Component) {
    _inherits(GoOcticonBug, _React$Component);

    function GoOcticonBug() {
        _classCallCheck(this, GoOcticonBug);

        _React$Component.apply(this, arguments);
    }

    GoOcticonBug.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm27.5 25h7.5v-2.5h-7.5v-2.5l7.9-2.6-0.8-2.3-7.1 2.4v-2.5c0-1.4-1.1-2.5-2.5-2.5v-2.5c0-1.2-0.9-2.2-2.1-2.4l2.6-2.6h4.5v-2.5h-5.5l-5 5h-1.5l-5-5h-5.5v2.5h4.5l2.6 2.6c-1.2 0.2-2.1 1.2-2.1 2.4v2.5c-1.4 0-2.5 1.1-2.5 2.5v2.5l-7.1-2.4-0.8 2.3 7.9 2.6v2.5h-7.5v2.5h7.5v2.5l-7.9 2.6 0.8 2.3 7.1-2.4v2.5c0 1.4 1.1 2.5 2.5 2.5h2.5l2.5-2.5v-17.5h2.5v17.5l2.5 2.5h2.5c1.4 0 2.5-1.1 2.5-2.5v-2.5l7.1 2.4 0.8-2.3-7.9-2.6v-2.5z m-5-12.5h-7.5v-2.5h7.5v2.5z' })
            )
        );
    };

    return GoOcticonBug;
})(React.Component);

exports['default'] = GoOcticonBug;
module.exports = exports['default'];