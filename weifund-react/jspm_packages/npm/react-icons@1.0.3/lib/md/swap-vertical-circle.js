/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSwapVerticalCircle = (function (_React$Component) {
    _inherits(MdSwapVerticalCircle, _React$Component);

    function MdSwapVerticalCircle() {
        _classCallCheck(this, MdSwapVerticalCircle);

        _React$Component.apply(this, arguments);
    }

    MdSwapVerticalCircle.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 3.3c-9.2 0-16.7 7.5-16.7 16.7s7.5 16.7 16.7 16.7 16.7-7.5 16.7-16.7-7.5-16.7-16.7-16.7z m-9.2 11.7l5.9-5.8 5.8 5.8h-4.2v6.7h-3.3v-6.7h-4.2z m18.4 10l-5.9 5.8-5.8-5.8h4.2v-6.7h3.3v6.7h4.2z' })
            )
        );
    };

    return MdSwapVerticalCircle;
})(React.Component);

exports['default'] = MdSwapVerticalCircle;
module.exports = exports['default'];