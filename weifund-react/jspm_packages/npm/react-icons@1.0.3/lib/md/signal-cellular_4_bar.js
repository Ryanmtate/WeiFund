/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSignalCellular4Bar = (function (_React$Component) {
    _inherits(MdSignalCellular4Bar, _React$Component);

    function MdSignalCellular4Bar() {
        _classCallCheck(this, MdSignalCellular4Bar);

        _React$Component.apply(this, arguments);
    }

    MdSignalCellular4Bar.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm3.3600000000000003 36.64000000000001l33.28333333333333-33.28333333333333v33.28333333333333h-33.285z' })
            )
        );
    };

    return MdSignalCellular4Bar;
})(React.Component);

exports['default'] = MdSignalCellular4Bar;
module.exports = exports['default'];