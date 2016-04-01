/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdTurnedInNot = (function (_React$Component) {
    _inherits(MdTurnedInNot, _React$Component);

    function MdTurnedInNot() {
        _classCallCheck(this, MdTurnedInNot);

        _React$Component.apply(this, arguments);
    }

    MdTurnedInNot.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm28.3 5h-16.6c-1.9 0-3.3 1.5-3.3 3.3l-0.1 26.7 11.7-5 11.7 5v-26.7c0-1.8-1.5-3.3-3.4-3.3z m0 25l-8.3-3.6-8.3 3.6v-21.7h16.6v21.7z' })
            )
        );
    };

    return MdTurnedInNot;
})(React.Component);

exports['default'] = MdTurnedInNot;
module.exports = exports['default'];