/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdPause = (function (_React$Component) {
    _inherits(MdPause, _React$Component);

    function MdPause() {
        _classCallCheck(this, MdPause);

        _React$Component.apply(this, arguments);
    }

    MdPause.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm23.36 8.360000000000001h6.640000000000001v23.28333333333334h-6.640000000000001v-23.285000000000004z m-13.36 23.28v-23.28333333333333h6.640000000000001v23.28333333333333h-6.640000000000001z' })
            )
        );
    };

    return MdPause;
})(React.Component);

exports['default'] = MdPause;
module.exports = exports['default'];