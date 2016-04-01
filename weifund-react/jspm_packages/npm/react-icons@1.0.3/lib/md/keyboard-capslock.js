/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdKeyboardCapslock = (function (_React$Component) {
    _inherits(MdKeyboardCapslock, _React$Component);

    function MdKeyboardCapslock() {
        _classCallCheck(this, MdKeyboardCapslock);

        _React$Component.apply(this, arguments);
    }

    MdKeyboardCapslock.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm10 30v-3.3599999999999994h20v3.3599999999999994h-20z m10-16.016666666666666l-7.656666666666666 7.658333333333331-2.3433333333333337-2.341666666666665 10-10 10 10-2.3433333333333337 2.341666666666665z' })
            )
        );
    };

    return MdKeyboardCapslock;
})(React.Component);

exports['default'] = MdKeyboardCapslock;
module.exports = exports['default'];