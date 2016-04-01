/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdCallMade = (function (_React$Component) {
    _inherits(MdCallMade, _React$Component);

    function MdCallMade() {
        _classCallCheck(this, MdCallMade);

        _React$Component.apply(this, arguments);
    }

    MdCallMade.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm15 8.360000000000001h16.64v16.64h-3.2833333333333314v-11.016666666666666l-19.373333333333335 19.37833333333333-2.3433333333333337-2.344999999999999 19.376666666666665-19.375h-11.016666666666666v-3.2833333333333314z' })
            )
        );
    };

    return MdCallMade;
})(React.Component);

exports['default'] = MdCallMade;
module.exports = exports['default'];