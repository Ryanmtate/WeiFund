/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdPresentToAll = (function (_React$Component) {
    _inherits(MdPresentToAll, _React$Component);

    function MdPresentToAll() {
        _classCallCheck(this, MdPresentToAll);

        _React$Component.apply(this, arguments);
    }

    MdPresentToAll.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm16.64 20h-3.283333333333333l6.643333333333333-6.639999999999999 6.636666666666667 6.639999999999999h-3.283333333333335v6.640000000000001h-6.716666666666669v-6.640000000000001z m18.36 11.716666666666669v-23.433333333333337h-30v23.433333333333337h30z m0-26.71666666666667q1.4066666666666663 0 2.383333333333333 0.9766666666666666t0.9766666666666666 2.383333333333333v23.283333333333335q0 1.4049999999999976-0.9766666666666666 2.3833333333333364t-2.383333333333333 0.9733333333333292h-30q-1.4066666666666667 0-2.3833333333333333-0.9750000000000014t-0.9766666666666666-2.383333333333333v-23.28333333333333q0-1.405000000000002 0.9766666666666666-2.3833333333333346t2.3833333333333333-0.9749999999999996h30z' })
            )
        );
    };

    return MdPresentToAll;
})(React.Component);

exports['default'] = MdPresentToAll;
module.exports = exports['default'];