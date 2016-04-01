/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdExposurePlus1 = (function (_React$Component) {
    _inherits(MdExposurePlus1, _React$Component);

    function MdExposurePlus1() {
        _classCallCheck(this, MdExposurePlus1);

        _React$Component.apply(this, arguments);
    }

    MdExposurePlus1.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm33.36 30h-3.3599999999999994v-17.733333333333334l-5 1.7166666666666686v-2.8133333333333344l7.813333333333333-2.8133333333333344h0.5466666666666669v21.64z m-16.72-18.36v6.716666666666669h6.716666666666669v3.2833333333333314h-6.716666666666669v6.716666666666669h-3.283333333333333v-6.716666666666669h-6.716666666666668v-3.2833333333333314h6.716666666666668v-6.716666666666669h3.283333333333333z' })
            )
        );
    };

    return MdExposurePlus1;
})(React.Component);

exports['default'] = MdExposurePlus1;
module.exports = exports['default'];