/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdBrightness5 = (function (_React$Component) {
    _inherits(MdBrightness5, _React$Component);

    function MdBrightness5() {
        _classCallCheck(this, MdBrightness5);

        _React$Component.apply(this, arguments);
    }

    MdBrightness5.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 30q4.140000000000001 0 7.07-2.9299999999999997t2.9299999999999997-7.07-2.9299999999999997-7.07-7.07-2.9299999999999997-7.07 2.9299999999999997-2.9299999999999997 7.07 2.9299999999999997 7.07 7.07 2.9299999999999997z m13.36-4.453333333333333v7.813333333333333h-7.813333333333333l-5.546666666666667 5.466666666666669-5.546666666666667-5.466666666666669h-7.813333333333333v-7.813333333333333l-5.466666666666667-5.546666666666667 5.466666666666667-5.546666666666667v-7.813333333333333h7.813333333333333l5.546666666666667-5.466666666666667 5.546666666666667 5.466666666666667h7.813333333333333v7.813333333333333l5.466666666666669 5.546666666666667z' })
            )
        );
    };

    return MdBrightness5;
})(React.Component);

exports['default'] = MdBrightness5;
module.exports = exports['default'];