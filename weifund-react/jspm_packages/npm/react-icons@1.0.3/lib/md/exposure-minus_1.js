/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdExposureMinus1 = (function (_React$Component) {
    _inherits(MdExposureMinus1, _React$Component);

    function MdExposureMinus1() {
        _classCallCheck(this, MdExposureMinus1);

        _React$Component.apply(this, arguments);
    }

    MdExposureMinus1.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm31.640000000000004 30h-3.283333333333335v-17.733333333333334l-5 1.7166666666666686v-2.8133333333333344l7.816666666666666-2.8133333333333344h0.466666666666665v21.64z m-25-11.64h13.359999999999996v3.2833333333333314h-13.36v-3.2833333333333314z' })
            )
        );
    };

    return MdExposureMinus1;
})(React.Component);

exports['default'] = MdExposureMinus1;
module.exports = exports['default'];