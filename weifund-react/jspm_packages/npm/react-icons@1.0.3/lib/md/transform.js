/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdTransform = (function (_React$Component) {
    _inherits(MdTransform, _React$Component);

    function MdTransform() {
        _classCallCheck(this, MdTransform);

        _React$Component.apply(this, arguments);
    }

    MdTransform.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm16.64 13.360000000000001v-3.360000000000001h10q1.3283333333333331 0 2.3433333333333337 1.0166666666666657t1.0166666666666657 2.34v10h-3.361666666666668v-10h-10z m20 16.64h-6.640000000000001v3.3599999999999994h3.3599999999999994l-5 5-5-5h3.2833333333333314v-3.3599999999999994h-13.283333333333333q-1.3283333333333331 0-2.3433333333333337-1.0166666666666657t-1.016666666666664-2.34v-13.283333333333333h-6.636666666666667v-3.360000000000001h6.636666666666667v-3.3599999999999994h-3.3566666666666665l5.000000000000001-5 5 5h-3.283333333333333v20h23.28333333333334v3.3599999999999994z' })
            )
        );
    };

    return MdTransform;
})(React.Component);

exports['default'] = MdTransform;
module.exports = exports['default'];