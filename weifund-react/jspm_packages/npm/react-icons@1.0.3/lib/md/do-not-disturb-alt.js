/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdDoNotDisturbAlt = (function (_React$Component) {
    _inherits(MdDoNotDisturbAlt, _React$Component);

    function MdDoNotDisturbAlt() {
        _classCallCheck(this, MdDoNotDisturbAlt);

        _React$Component.apply(this, arguments);
    }

    MdDoNotDisturbAlt.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 3.3c-9.2 0-16.7 7.5-16.7 16.7s7.5 16.7 16.7 16.7 16.7-7.5 16.7-16.7-7.5-16.7-16.7-16.7z m-13.3 16.7c0-7.3 6-13.3 13.3-13.3 3 0 5.8 1 8.2 2.8l-18.7 18.7c-1.8-2.4-2.8-5.2-2.8-8.2z m13.3 13.3c-3 0-5.8-1-8.2-2.8l18.7-18.7c1.8 2.4 2.8 5.2 2.8 8.2 0 7.3-6 13.3-13.3 13.3z' })
            )
        );
    };

    return MdDoNotDisturbAlt;
})(React.Component);

exports['default'] = MdDoNotDisturbAlt;
module.exports = exports['default'];