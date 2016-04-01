/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoEllipsis = (function (_React$Component) {
    _inherits(GoEllipsis, _React$Component);

    function GoEllipsis() {
        _classCallCheck(this, GoEllipsis);

        _React$Component.apply(this, arguments);
    }

    GoEllipsis.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm30 12.5h-20s-5 2.5-5 5v5s2.5 5 5 5h20s5-2.5 5-5v-5s-2.5-5-5-5z m-15 10h-5v-5h5v5z m7.5 0h-5v-5h5v5z m7.5 0h-5v-5h5v5z' })
            )
        );
    };

    return GoEllipsis;
})(React.Component);

exports['default'] = GoEllipsis;
module.exports = exports['default'];