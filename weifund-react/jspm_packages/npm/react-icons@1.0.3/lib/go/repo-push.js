/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoRepoPush = (function (_React$Component) {
    _inherits(GoRepoPush, _React$Component);

    function GoRepoPush() {
        _classCallCheck(this, GoRepoPush);

        _React$Component.apply(this, arguments);
    }

    GoRepoPush.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm22.5 12.5l-7.5 10h5v17.5h5v-17.5h5l-7.5-10z m-7.5 0h2.5v-2.5h-2.5v2.5z m2.5-7.5h-2.5v2.5h2.5v-2.5z m15-5h-25s-2.5 1.25-2.5 2.5v30s1.25 2.5 2.5 2.5h5v5l5-5v-5h-5v2.5h-3.75s-1.25-0.5474999999999994-1.25-1.25v-3.75h10v-2.5h-5v-22.5h20.0375l-0.03750000000000142 22.5h-5v2.5h5v3.75s-0.5874999999999986 1.25-1.25 1.25h-3.75v2.5h5s2.5-1.25 2.5-2.5v-30s-1.25-2.5-2.5-2.5z' })
            )
        );
    };

    return GoRepoPush;
})(React.Component);

exports['default'] = GoRepoPush;
module.exports = exports['default'];