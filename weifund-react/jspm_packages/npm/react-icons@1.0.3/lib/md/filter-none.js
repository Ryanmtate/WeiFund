/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdFilterNone = (function (_React$Component) {
    _inherits(MdFilterNone, _React$Component);

    function MdFilterNone() {
        _classCallCheck(this, MdFilterNone);

        _React$Component.apply(this, arguments);
    }

    MdFilterNone.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm35 28.36v-23.36h-23.36v23.36h23.36z m0-26.72q1.3283333333333331-4.440892098500626e-16 2.3433333333333337 1.0166666666666662t1.0166666666666657 2.3416666666666663v23.358333333333334q0 1.3283333333333331-1.0166666666666657 2.3049999999999997t-2.3433333333333337 0.9783333333333353h-23.36q-1.3283333333333331 0-2.3049999999999997-0.9766666666666666t-0.9749999999999996-2.3049999999999997v-23.358333333333338q0-1.33 0.9766666666666666-2.345t2.3066666666666666-1.0166666666666666h23.356666666666666z m-30 6.720000000000001v26.64h26.64v3.3599999999999994h-26.64q-1.3283333333333331 0-2.3433333333333333-1.0166666666666657t-1.0166666666666666-2.3416666666666686v-26.638333333333332h3.361666666666667z' })
            )
        );
    };

    return MdFilterNone;
})(React.Component);

exports['default'] = MdFilterNone;
module.exports = exports['default'];