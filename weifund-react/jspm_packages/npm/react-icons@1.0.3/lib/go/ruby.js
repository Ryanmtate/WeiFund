/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoRuby = (function (_React$Component) {
    _inherits(GoRuby, _React$Component);

    function GoRuby() {
        _classCallCheck(this, GoRuby);

        _React$Component.apply(this, arguments);
    }

    GoRuby.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm30 5h-20l-10 10 20 20 20-20-10-10z m-25 10l7.5-7.5h15l7.5 7.5-15 15-15-15z m22.5-5h-7.5v17.5l12.5-12.5-5-5z' })
            )
        );
    };

    return GoRuby;
})(React.Component);

exports['default'] = GoRuby;
module.exports = exports['default'];