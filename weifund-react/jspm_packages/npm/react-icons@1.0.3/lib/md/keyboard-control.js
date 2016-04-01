/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdKeyboardControl = (function (_React$Component) {
    _inherits(MdKeyboardControl, _React$Component);

    function MdKeyboardControl() {
        _classCallCheck(this, MdKeyboardControl);

        _React$Component.apply(this, arguments);
    }

    MdKeyboardControl.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 16.64q1.3283333333333331 0 2.3433333333333337 1.0166666666666657t1.0166666666666657 2.3416666666666686-1.0166666666666657 2.3416666666666686-2.3433333333333337 1.0166666666666657-2.3433333333333337-1.0166666666666657-1.0166666666666657-2.3400000000000034 1.0166666666666657-2.344999999999999 2.3433333333333337-1.0166666666666657z m10 0q1.3283333333333331 0 2.3433333333333337 1.0166666666666657t1.0166666666666657 2.3416666666666686-1.0166666666666657 2.3416666666666686-2.3433333333333337 1.0166666666666657-2.3433333333333337-1.0166666666666657-1.0166666666666657-2.3433333333333337 1.0166666666666657-2.344999999999999 2.3433333333333337-1.0133333333333354z m-20 0q1.3283333333333331 0 2.3433333333333337 1.0166666666666657t1.0166666666666657 2.3416666666666686-1.0166666666666657 2.3416666666666686-2.3433333333333337 1.0166666666666657-2.3433333333333337-1.0166666666666657-1.0166666666666657-2.3400000000000034 1.0166666666666666-2.344999999999999 2.343333333333333-1.0166666666666657z' })
            )
        );
    };

    return MdKeyboardControl;
})(React.Component);

exports['default'] = MdKeyboardControl;
module.exports = exports['default'];