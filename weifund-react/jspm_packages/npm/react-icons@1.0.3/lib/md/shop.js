/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdShop = (function (_React$Component) {
    _inherits(MdShop, _React$Component);

    function MdShop() {
        _classCallCheck(this, MdShop);

        _React$Component.apply(this, arguments);
    }

    MdShop.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm15 30l12.5-8.36-12.5-6.640000000000001v15z m1.6400000000000006-23.36v3.3599999999999994h6.716666666666669v-3.3599999999999994h-6.716666666666669z m10 3.3599999999999994h10v21.64q0 1.4066666666666663-0.9383333333333326 2.383333333333333t-2.3416666666666686 0.9766666666666666h-26.718333333333334q-1.4083333333333323 0-2.344999999999999-0.9766666666666666t-0.9383333333333335-2.383333333333333v-21.64h10v-3.3599999999999994q0-1.4066666666666663 0.9383333333333326-2.3433333333333337t2.3433333333333337-0.9383333333333335h6.716666666666669q1.408333333333335 0 2.344999999999999 0.9383333333333335t0.9400000000000013 2.3433333333333337v3.3599999999999994z' })
            )
        );
    };

    return MdShop;
})(React.Component);

exports['default'] = MdShop;
module.exports = exports['default'];