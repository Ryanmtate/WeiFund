/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdFunctions = (function (_React$Component) {
    _inherits(MdFunctions, _React$Component);

    function MdFunctions() {
        _classCallCheck(this, MdFunctions);

        _React$Component.apply(this, arguments);
    }

    MdFunctions.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm30 6.640000000000001v5h-11.64l8.283333333333335 8.36-8.283333333333335 8.36h11.64v5h-20v-3.3599999999999994l10.86-10-10.86-10v-3.3599999999999994h20z' })
            )
        );
    };

    return MdFunctions;
})(React.Component);

exports['default'] = MdFunctions;
module.exports = exports['default'];