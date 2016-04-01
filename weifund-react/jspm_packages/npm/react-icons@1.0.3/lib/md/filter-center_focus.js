/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdFilterCenterFocus = (function (_React$Component) {
    _inherits(MdFilterCenterFocus, _React$Component);

    function MdFilterCenterFocus() {
        _classCallCheck(this, MdFilterCenterFocus);

        _React$Component.apply(this, arguments);
    }

    MdFilterCenterFocus.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 15q2.0333333333333314 0 3.5166666666666657 1.4833333333333343t1.4833333333333343 3.5166666666666657-1.4833333333333343 3.5166666666666657-3.5166666666666657 1.4833333333333343-3.5166666666666657-1.4833333333333343-1.4833333333333343-3.5166666666666657 1.4833333333333343-3.5166666666666657 3.5166666666666657-1.4833333333333343z m11.64 16.64v-6.640000000000001h3.3599999999999994v6.640000000000001q0 1.3283333333333331-1.0166666666666657 2.3433333333333337t-2.3416666666666686 1.0166666666666657h-6.641666666666666v-3.361666666666668h6.641666666666666z m0-26.64q1.3283333333333331 0 2.3433333333333337 1.0166666666666666t1.0166666666666657 2.3400000000000007v6.643333333333333h-3.361666666666668v-6.643333333333333h-6.638333333333332v-3.3566666666666674h6.638333333333335z m-23.28 3.360000000000001v6.639999999999999h-3.3599999999999994v-6.639999999999999q0-1.3283333333333331 1.0166666666666666-2.3433333333333337t2.3400000000000007-1.0166666666666675h6.643333333333333v3.3616666666666664h-6.643333333333333z m1.7763568394002505e-15 16.64v6.640000000000001h6.639999999999999v3.3599999999999994h-6.639999999999999q-1.3283333333333331 0-2.3433333333333337-1.0166666666666657t-1.0166666666666675-2.34v-6.643333333333334h3.3616666666666664z' })
            )
        );
    };

    return MdFilterCenterFocus;
})(React.Component);

exports['default'] = MdFilterCenterFocus;
module.exports = exports['default'];