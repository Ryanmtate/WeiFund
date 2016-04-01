/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaIndustry = (function (_React$Component) {
    _inherits(FaIndustry, _React$Component);

    function FaIndustry() {
        _classCallCheck(this, FaIndustry);

        _React$Component.apply(this, arguments);
    }

    FaIndustry.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm10 0q0.5800000000000001 0 1.0042857142857144 0.42428571428571427t0.4242857142857144 1.0042857142857144v19.88857142857143l11.964285714285717-9.57571428571429q0.37857142857142634-0.31285714285714405 0.8928571428571388-0.31285714285714405 0.5799999999999983 0 1.0042857142857144 0.4242857142857144t0.42428571428571615 1.0042857142857144v8.459999999999997l11.964285714285715-9.575714285714286q0.37857142857142634-0.3128571428571405 0.8928571428571388-0.3128571428571405 0.5799999999999983 0 1.0042857142857144 0.4242857142857144t0.42428571428571615 1.0042857142857144v25.71428571428571q0 0.5799999999999983-0.42428571428571615 1.0042857142857144t-1.0042857142857144 0.42428571428571615h-37.14285714285714q-0.5800000000000021 0-1.0042857142857162-0.42428571428571615t-0.4242857142857144-1.0042857142857144v-37.14285714285714q0-0.5800000000000021 0.42428571428571427-1.0042857142857162t1.0042857142857144-0.4242857142857144h8.571428571428571z' })
            )
        );
    };

    return FaIndustry;
})(React.Component);

exports['default'] = FaIndustry;
module.exports = exports['default'];