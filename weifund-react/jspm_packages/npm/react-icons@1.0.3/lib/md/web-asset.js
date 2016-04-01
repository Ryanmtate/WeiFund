/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdWebAsset = (function (_React$Component) {
    _inherits(MdWebAsset, _React$Component);

    function MdWebAsset() {
        _classCallCheck(this, MdWebAsset);

        _React$Component.apply(this, arguments);
    }

    MdWebAsset.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm31.640000000000004 30v-16.64h-23.28333333333334v16.64h23.283333333333335z m0-23.36q1.4066666666666698 0 2.3833333333333364 1.0166666666666666t0.9766666666666595 2.3400000000000007v20q0 1.326666666666668-1.0166666666666657 2.3416666666666686t-2.3416666666666686 1.0166666666666657h-23.28333333333333q-1.405000000000002 0-2.3833333333333346-1.0166666666666657t-0.9749999999999996-2.3383333333333383v-20q0-1.33 0.9766666666666666-2.3450000000000006t2.383333333333333-1.0166666666666666h23.283333333333335z' })
            )
        );
    };

    return MdWebAsset;
})(React.Component);

exports['default'] = MdWebAsset;
module.exports = exports['default'];