/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdGamepad = (function (_React$Component) {
    _inherits(MdGamepad, _React$Component);

    function MdGamepad() {
        _classCallCheck(this, MdGamepad);

        _React$Component.apply(this, arguments);
    }

    MdGamepad.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm27.5 15h9.14v10h-9.14l-5-5z m-12.5 12.5l5-5 5 5v9.14h-10v-9.14z m-2.5-12.5l5 5-5 5h-9.14v-10h9.14z m12.5-2.5l-5 5-5-5v-9.14h10v9.14z' })
            )
        );
    };

    return MdGamepad;
})(React.Component);

exports['default'] = MdGamepad;
module.exports = exports['default'];