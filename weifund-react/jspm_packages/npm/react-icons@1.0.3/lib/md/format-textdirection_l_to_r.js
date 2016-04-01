/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdFormatTextdirectionLToR = (function (_React$Component) {
    _inherits(MdFormatTextdirectionLToR, _React$Component);

    function MdFormatTextdirectionLToR() {
        _classCallCheck(this, MdFormatTextdirectionLToR);

        _React$Component.apply(this, arguments);
    }

    MdFormatTextdirectionLToR.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm35 30l-6.640000000000001 6.640000000000001v-5h-20v-3.2833333333333314h20v-5z m-20-13.36q-2.7333333333333343 0-4.688333333333333-1.9533333333333331t-1.953333333333335-4.686666666666667 1.9533333333333331-4.69 4.688333333333334-1.9533333333333331h13.36v3.283333333333333h-3.3599999999999994v18.358333333333334h-3.3599999999999994v-18.361666666666668h-3.2833333333333314v18.363333333333333h-3.356666666666669v-8.363333333333333z' })
            )
        );
    };

    return MdFormatTextdirectionLToR;
})(React.Component);

exports['default'] = MdFormatTextdirectionLToR;
module.exports = exports['default'];