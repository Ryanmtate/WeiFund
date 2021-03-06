/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdVerticalAlignCenter = (function (_React$Component) {
    _inherits(MdVerticalAlignCenter, _React$Component);

    function MdVerticalAlignCenter() {
        _classCallCheck(this, MdVerticalAlignCenter);

        _React$Component.apply(this, arguments);
    }

    MdVerticalAlignCenter.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm6.640000000000001 18.36h26.71666666666667v3.2833333333333314h-26.715000000000003v-3.2833333333333314z m20-10l-6.640000000000001 6.640000000000001-6.639999999999999-6.639999999999999h4.999999999999998v-6.716666666666668h3.2833333333333314v6.716666666666668h5z m-13.28 23.280000000000005l6.639999999999999-6.640000000000004 6.640000000000001 6.640000000000001h-5v6.716666666666669h-3.2833333333333314v-6.716666666666669h-5z' })
            )
        );
    };

    return MdVerticalAlignCenter;
})(React.Component);

exports['default'] = MdVerticalAlignCenter;
module.exports = exports['default'];