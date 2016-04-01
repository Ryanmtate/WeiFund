/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdCallMissed = (function (_React$Component) {
    _inherits(MdCallMissed, _React$Component);

    function MdCallMissed() {
        _classCallCheck(this, MdCallMissed);

        _React$Component.apply(this, arguments);
    }

    MdCallMissed.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm32.65666666666667 11.64l2.3433333333333266 2.3433333333333337-15 15-11.64-11.64v7.656666666666666h-3.3599999999999994v-13.36h13.36v3.3599999999999994h-7.656666666666666l9.296666666666667 9.296666666666667z' })
            )
        );
    };

    return MdCallMissed;
})(React.Component);

exports['default'] = MdCallMissed;
module.exports = exports['default'];