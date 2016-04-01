/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdReorder = (function (_React$Component) {
    _inherits(MdReorder, _React$Component);

    function MdReorder() {
        _classCallCheck(this, MdReorder);

        _React$Component.apply(this, arguments);
    }

    MdReorder.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm5 8.360000000000001h30v3.283333333333333h-30v-3.283333333333333z m0 9.999999999999998v-3.3599999999999994h30v3.3599999999999994h-30z m0 13.280000000000001v-3.2833333333333314h30v3.2833333333333314h-30z m0-6.640000000000001v-3.3599999999999994h30v3.3599999999999994h-30z' })
            )
        );
    };

    return MdReorder;
})(React.Component);

exports['default'] = MdReorder;
module.exports = exports['default'];