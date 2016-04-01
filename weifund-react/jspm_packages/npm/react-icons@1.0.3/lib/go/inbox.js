/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoInbox = (function (_React$Component) {
    _inherits(GoInbox, _React$Component);

    function GoInbox() {
        _classCallCheck(this, GoInbox);

        _React$Component.apply(this, arguments);
    }

    GoInbox.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm32.5 7.5h-25l-2.5 15v10h30v-10l-2.5-15z m-5 15l-2.5 5h-10l-2.5-5h-4.4125l1.9124999999999996-12.5h20l1.9125000000000014 12.5h-4.412500000000001z' })
            )
        );
    };

    return GoInbox;
})(React.Component);

exports['default'] = GoInbox;
module.exports = exports['default'];