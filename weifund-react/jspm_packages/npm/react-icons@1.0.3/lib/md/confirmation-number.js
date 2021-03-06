/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdConfirmationNumber = (function (_React$Component) {
    _inherits(MdConfirmationNumber, _React$Component);

    function MdConfirmationNumber() {
        _classCallCheck(this, MdConfirmationNumber);

        _React$Component.apply(this, arguments);
    }

    MdConfirmationNumber.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm21.64 14.14v-3.283333333333333h-3.2833333333333314v3.283333333333333h3.2833333333333314z m0 7.5v-3.2833333333333314h-3.2833333333333314v3.2833333333333314h3.2833333333333314z m0 7.5v-3.2833333333333314h-3.2833333333333314v3.2833333333333314h3.2833333333333314z m15-12.5q-1.3283333333333331 0-2.3049999999999997 1.0166666666666657t-0.9750000000000014 2.3416666666666686 0.9766666666666666 2.3416666666666686 2.306666666666665 1.0166666666666657v6.638333333333335q0 1.3283333333333331-0.9766666666666666 2.3433333333333337t-2.3049999999999997 1.0166666666666657h-26.72q-1.3299999999999992 0-2.3066666666666658-1.0166666666666657t-0.9750000000000001-2.3433333333333337v-6.640000000000001q1.4066666666666667 0 2.3433333333333333-0.9766666666666666t0.9399999999999995-2.383333333333333q0-1.3283333333333331-0.9766666666666666-2.3433333333333337t-2.305-1.0166666666666657v-6.635000000000005q0-1.4083333333333332 0.976666666666667-2.383333333333333t2.3066666666666666-0.9783333333333335h26.716666666666665q1.3299999999999983 0 2.306666666666665 0.9766666666666666t0.9716666666666782 2.385v6.638333333333335z' })
            )
        );
    };

    return MdConfirmationNumber;
})(React.Component);

exports['default'] = MdConfirmationNumber;
module.exports = exports['default'];