/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoFileDirectory = (function (_React$Component) {
    _inherits(GoFileDirectory, _React$Component);

    function GoFileDirectory() {
        _classCallCheck(this, GoFileDirectory);

        _React$Component.apply(this, arguments);
    }

    GoFileDirectory.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm35 7.5h-13.75s-1.25-0.625-1.25-1.25v-1.25s-1.25-2.5-2.5-2.5h-12.5s-2.5 1.25-2.5 2.5v27.5h35v-22.5s-1.25-2.5-2.5-2.5z m-17.5 0h-12.5v-1.25s0.625-1.25 1.25-1.25h10s1.25 0.5875000000000004 1.25 1.25v1.25z' })
            )
        );
    };

    return GoFileDirectory;
})(React.Component);

exports['default'] = GoFileDirectory;
module.exports = exports['default'];