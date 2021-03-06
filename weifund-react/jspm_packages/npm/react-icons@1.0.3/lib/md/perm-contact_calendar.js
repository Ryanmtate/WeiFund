/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdPermContactCalendar = (function (_React$Component) {
    _inherits(MdPermContactCalendar, _React$Component);

    function MdPermContactCalendar() {
        _classCallCheck(this, MdPermContactCalendar);

        _React$Component.apply(this, arguments);
    }

    MdPermContactCalendar.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm30 30v-1.6400000000000006q0-2.2666666666666657-3.4383333333333326-3.711666666666666t-6.561666666666667-1.4483333333333341-6.566666666666666 1.4450000000000003-3.4333333333333336 3.7133333333333347v1.6416666666666657h20z m-10-20q-2.0333333333333314 0-3.5166666666666657 1.4833333333333343t-1.4833333333333343 3.5166666666666657 1.4833333333333343 3.5166666666666657 3.5166666666666657 1.4833333333333343 3.5166666666666657-1.4833333333333343 1.4833333333333343-3.5166666666666657-1.4833333333333343-3.5166666666666657-3.5166666666666657-1.4833333333333343z m11.64-5q1.3283333333333331 0 2.3433333333333337 1.0166666666666666t1.0166666666666657 2.3400000000000007v23.28333333333333q0 1.326666666666668-1.0166666666666657 2.3416666666666686t-2.3433333333333337 1.0166666666666657h-23.28333333333333q-1.405000000000002 0-2.3833333333333346-1.0166666666666657t-0.9733333333333345-2.341666666666665v-23.28333333333334q0-1.3266666666666653 0.9749999999999996-2.341666666666665t2.383333333333333-1.0150000000000006h1.6416666666666675v-3.36h3.3583333333333343v3.36h13.283333333333331v-3.36h3.3583333333333343v3.36h1.6400000000000006z' })
            )
        );
    };

    return MdPermContactCalendar;
})(React.Component);

exports['default'] = MdPermContactCalendar;
module.exports = exports['default'];