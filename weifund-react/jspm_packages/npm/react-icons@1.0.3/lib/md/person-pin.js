/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdPersonPin = (function (_React$Component) {
    _inherits(MdPersonPin, _React$Component);

    function MdPersonPin() {
        _classCallCheck(this, MdPersonPin);

        _React$Component.apply(this, arguments);
    }

    MdPersonPin.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm31.7 3.3h-23.4c-1.8 0-3.3 1.5-3.3 3.4v23.3c0 1.8 1.5 3.3 3.3 3.3h6.7l5 5 5-5h6.7c1.8 0 3.3-1.5 3.3-3.3v-23.3c0-1.9-1.5-3.4-3.3-3.4z m-11.7 5.5c2.5 0 4.5 2.1 4.5 4.5 0 2.5-2 4.5-4.5 4.5-2.5 0-4.5-2-4.5-4.5 0-2.4 2-4.5 4.5-4.5z m10 17.9h-20v-1.5c0-3.4 6.7-5.2 10-5.2s10 1.8 10 5.2v1.5z' })
            )
        );
    };

    return MdPersonPin;
})(React.Component);

exports['default'] = MdPersonPin;
module.exports = exports['default'];