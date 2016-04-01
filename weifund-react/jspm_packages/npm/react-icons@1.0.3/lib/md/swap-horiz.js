/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSwapHoriz = (function (_React$Component) {
    _inherits(MdSwapHoriz, _React$Component);

    function MdSwapHoriz() {
        _classCallCheck(this, MdSwapHoriz);

        _React$Component.apply(this, arguments);
    }

    MdSwapHoriz.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm35 15l-6.640000000000001 6.640000000000001v-5h-11.716666666666669v-3.283333333333333h11.716666666666669v-5z m-23.36 3.3599999999999994v5h11.716666666666669v3.2833333333333314h-11.716666666666667v5l-6.640000000000002-6.643333333333331z' })
            )
        );
    };

    return MdSwapHoriz;
})(React.Component);

exports['default'] = MdSwapHoriz;
module.exports = exports['default'];