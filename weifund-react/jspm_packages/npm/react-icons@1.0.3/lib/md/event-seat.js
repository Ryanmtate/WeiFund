/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdEventSeat = (function (_React$Component) {
    _inherits(MdEventSeat, _React$Component);

    function MdEventSeat() {
        _classCallCheck(this, MdEventSeat);

        _React$Component.apply(this, arguments);
    }

    MdEventSeat.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm28.36 21.64h-16.71666666666667v-13.283333333333333q1.7763568394002505e-15-1.326666666666667 1.0133333333333354-2.341666666666667t2.3433333333333337-1.0150000000000006h10q1.3283333333333331 0 2.3433333333333337 1.0166666666666666t1.0166666666666657 2.3416666666666677v13.283333333333331z m-25-5h5v5h-5v-5z m28.28 0h5v5h-5v-5z m-25 18.36v-10h26.71666666666667v10h-5v-5h-16.715000000000003v5h-4.999999999999998z' })
            )
        );
    };

    return MdEventSeat;
})(React.Component);

exports['default'] = MdEventSeat;
module.exports = exports['default'];