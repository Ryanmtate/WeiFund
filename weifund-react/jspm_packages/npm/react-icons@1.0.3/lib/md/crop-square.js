/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdCropSquare = (function (_React$Component) {
    _inherits(MdCropSquare, _React$Component);

    function MdCropSquare() {
        _classCallCheck(this, MdCropSquare);

        _React$Component.apply(this, arguments);
    }

    MdCropSquare.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm30 30v-20h-20v20h20z m0-23.36q1.3283333333333331 0 2.3433333333333337 1.0166666666666666t1.0166666666666657 2.3416666666666677v20q0 1.326666666666668-1.0166666666666657 2.3416666666666686t-2.3433333333333337 1.0166666666666657h-20q-1.3283333333333331 0-2.3433333333333337-1.0166666666666657t-1.0166666666666657-2.3400000000000034v-20q0-1.33 1.0166666666666666-2.3450000000000006t2.343333333333333-1.0166666666666657h20z' })
            )
        );
    };

    return MdCropSquare;
})(React.Component);

exports['default'] = MdCropSquare;
module.exports = exports['default'];