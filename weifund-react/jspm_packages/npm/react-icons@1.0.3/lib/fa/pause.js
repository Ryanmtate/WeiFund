/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaPause = (function (_React$Component) {
    _inherits(FaPause, _React$Component);

    function FaPause() {
        _classCallCheck(this, FaPause);

        _React$Component.apply(this, arguments);
    }

    FaPause.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm37.142857142857146 4.285714285714286v31.42857142857143q0 0.5799999999999983-0.42428571428571615 1.0042857142857144t-1.0042857142857144 0.42428571428571615h-11.42857142857143q-0.5799999999999983 0-1.0042857142857144-0.42428571428571615t-0.4242857142857126-1.0042857142857144v-31.42857142857143q0-0.5799999999999992 0.4242857142857126-1.0042857142857136t1.0042857142857144-0.42428571428571393h11.42857142857143q0.5799999999999983 0 1.0042857142857144 0.4242857142857144t0.42428571428571615 1.004285714285714z m-20.000000000000004 0v31.42857142857143q0 0.5799999999999983-0.4242857142857126 1.0042857142857144t-1.0042857142857144 0.42428571428571615h-11.42857142857143q-0.5799999999999992 0-1.0042857142857136-0.42428571428571615t-0.42428571428571393-1.0042857142857144v-31.42857142857143q0-0.5799999999999992 0.4242857142857144-1.0042857142857136t1.004285714285714-0.42428571428571393h11.42857142857143q0.5799999999999983 0 1.0042857142857144 0.4242857142857144t0.4242857142857126 1.004285714285714z' })
            )
        );
    };

    return FaPause;
})(React.Component);

exports['default'] = FaPause;
module.exports = exports['default'];