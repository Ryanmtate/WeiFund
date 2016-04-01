/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaChevronCircleUp = (function (_React$Component) {
    _inherits(FaChevronCircleUp, _React$Component);

    function FaChevronCircleUp() {
        _classCallCheck(this, FaChevronCircleUp);

        _React$Component.apply(this, arguments);
    }

    FaChevronCircleUp.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm28.861428571428572 25.424285714285716l2.277142857142856-2.277142857142856q0.4242857142857126-0.4242857142857126 0.4242857142857126-1.0042857142857144t-0.4242857142857126-1.0042857142857144l-10.134285714285713-10.134285714285715q-0.4242857142857126-0.4242857142857144-1.0042857142857144-0.4242857142857144t-1.0042857142857144 0.4242857142857144l-10.134285714285715 10.134285714285715q-0.4242857142857144 0.4242857142857126-0.4242857142857144 1.0042857142857144t0.4242857142857144 1.0042857142857144l2.2771428571428576 2.277142857142856q0.4242857142857144 0.4242857142857126 1.0042857142857144 0.4242857142857126t1.0042857142857144-0.4242857142857126l6.852857142857143-6.852857142857143 6.852857142857143 6.852857142857143q0.4242857142857126 0.4242857142857126 1.0042857142857144 0.4242857142857126t1.0042857142857144-0.4242857142857126z m8.281428571428574-5.424285714285716q0 4.665714285714287-2.299999999999997 8.604285714285716t-6.237142857142857 6.238571428571426-8.605714285714292 2.3000000000000043-8.6-2.3000000000000043-6.242857142857143-6.238571428571426-2.295714285714286-8.604285714285716 2.3000000000000003-8.604285714285714 6.234285714285714-6.238571428571428 8.604285714285714-2.3000000000000003 8.605714285714285 2.3000000000000003 6.238571428571426 6.238571428571428 2.298571428571435 8.604285714285714z' })
            )
        );
    };

    return FaChevronCircleUp;
})(React.Component);

exports['default'] = FaChevronCircleUp;
module.exports = exports['default'];