/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdFormatColorFill = (function (_React$Component) {
    _inherits(MdFormatColorFill, _React$Component);

    function MdFormatColorFill() {
        _classCallCheck(this, MdFormatColorFill);

        _React$Component.apply(this, arguments);
    }

    MdFormatColorFill.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm27.6 14.9l-14.9-14.9-2.4 2.4 4 3.9-8.6 8.6c-1 1-1 2.6 0 3.5l9.2 9.2c0.5 0.5 1.1 0.7 1.8 0.7s1.3-0.2 1.7-0.7l9.2-9.2c1-0.9 1-2.5 0-3.5z m-18.9 1.8l8-8 7.9 8h-15.9z m23 2.5s-3.4 3.6-3.4 5.8c0 1.8 1.5 3.3 3.4 3.3s3.3-1.5 3.3-3.3c0-2.2-3.3-5.8-3.3-5.8z' }),
                React.createElement('path', { d: 'm0 33.3h40v6.7h-40z' })
            )
        );
    };

    return MdFormatColorFill;
})(React.Component);

exports['default'] = MdFormatColorFill;
module.exports = exports['default'];