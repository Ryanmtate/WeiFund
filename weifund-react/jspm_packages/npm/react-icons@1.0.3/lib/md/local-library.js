/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdLocalLibrary = (function (_React$Component) {
    _inherits(MdLocalLibrary, _React$Component);

    function MdLocalLibrary() {
        _classCallCheck(this, MdLocalLibrary);

        _React$Component.apply(this, arguments);
    }

    MdLocalLibrary.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 13.360000000000001q-2.0333333333333314 0-3.5166666666666657-1.4833333333333325t-1.4833333333333343-3.518333333333336 1.4833333333333343-3.5166666666666666 3.5166666666666657-1.4833333333333334 3.5166666666666657 1.4833333333333334 1.4833333333333343 3.5166666666666666-1.4833333333333343 3.5166666666666675-3.5166666666666657 1.4833333333333343z m0 5.8583333333333325q6.25-5.858333333333334 15-5.858333333333334v18.283333333333335q-8.671666666666667 0-15 5.936666666666664-6.328333333333333-5.938333333333333-15-5.938333333333333v-18.285q8.75 0 15 5.861666666666668z' })
            )
        );
    };

    return MdLocalLibrary;
})(React.Component);

exports['default'] = MdLocalLibrary;
module.exports = exports['default'];