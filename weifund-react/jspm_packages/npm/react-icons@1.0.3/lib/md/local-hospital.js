/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdLocalHospital = (function (_React$Component) {
    _inherits(MdLocalHospital, _React$Component);

    function MdLocalHospital() {
        _classCallCheck(this, MdLocalHospital);

        _React$Component.apply(this, arguments);
    }

    MdLocalHospital.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm30 23.36v-6.716666666666669h-6.640000000000001v-6.643333333333331h-6.716666666666669v6.641666666666666h-6.643333333333331v6.716666666666669h6.641666666666666v6.641666666666666h6.716666666666669v-6.640000000000001h6.641666666666666z m1.6400000000000041-18.36q1.3283333333333367 0 2.34333333333333 1.0166666666666666t1.0166666666666657 2.3400000000000007v23.28333333333333q0 1.326666666666668-1.0166666666666657 2.3416666666666686t-2.3433333333333337 1.0166666666666657h-23.28333333333333q-1.3266666666666689 0-2.3416666666666686-1.0166666666666657t-1.0150000000000006-2.341666666666665v-23.28333333333334q0-1.3266666666666653 1.0166666666666666-2.341666666666665t2.3400000000000007-1.0150000000000006h23.28333333333333z' })
            )
        );
    };

    return MdLocalHospital;
})(React.Component);

exports['default'] = MdLocalHospital;
module.exports = exports['default'];