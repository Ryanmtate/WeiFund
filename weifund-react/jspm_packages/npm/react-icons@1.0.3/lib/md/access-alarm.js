/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdAccessAlarm = (function (_React$Component) {
    _inherits(MdAccessAlarm, _React$Component);

    function MdAccessAlarm() {
        _classCallCheck(this, MdAccessAlarm);

        _React$Component.apply(this, arguments);
    }

    MdAccessAlarm.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 33.36q4.843333333333334 0 8.241666666666667-3.4383333333333326t3.3999999999999986-8.283333333333331-3.3999999999999986-8.24-8.241666666666667-3.398333333333335-8.241666666666667 3.3999999999999986-3.4000000000000004 8.240000000000002 3.4000000000000004 8.283333333333331 8.241666666666667 3.4350000000000023z m0-26.720000000000002q6.25 0 10.625 4.413333333333334t4.375 10.58666666666667-4.375 10.586666666666666-10.625 4.413333333333341-10.625-4.413333333333334-4.375-10.586666666666673 4.375-10.586666666666668 10.625-4.413333333333332z m0.8599999999999994 6.720000000000001v8.750000000000002l6.640000000000001 3.9066666666666663-1.25 2.0333333333333314-7.890000000000001-4.690000000000001v-10h2.5z m-7.733333333333334-7.733333333333333l-7.659999999999998 6.403333333333337-2.1083333333333334-2.5 7.658333333333334-6.406666666666668z m23.513333333333335 3.9050000000000002l-2.1099999999999994 2.576666666666666-7.656666666666666-6.483333333333333 2.1099999999999994-2.5z' })
            )
        );
    };

    return MdAccessAlarm;
})(React.Component);

exports['default'] = MdAccessAlarm;
module.exports = exports['default'];