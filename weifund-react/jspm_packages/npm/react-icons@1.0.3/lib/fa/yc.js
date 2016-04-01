/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaYc = (function (_React$Component) {
    _inherits(FaYc, _React$Component);

    function FaYc() {
        _classCallCheck(this, FaYc);

        _React$Component.apply(this, arguments);
    }

    FaYc.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm14 21l4.699999999999999-8.7h-2l-2.6999999999999993 5.399999999999999q-0.40000000000000036 0.8999999999999986-0.8000000000000007 1.6000000000000014l-0.6999999999999993-1.6000000000000014-2.6999999999999993-5.4h-2.1000000000000005l4.6000000000000005 8.6v5.600000000000001h1.6999999999999993v-5.5z m12.7-15.2v26.599999999999998h-26.7v-26.599999999999998h26.7z' })
            )
        );
    };

    return FaYc;
})(React.Component);

exports['default'] = FaYc;
module.exports = exports['default'];