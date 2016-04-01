/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdFormatColorReset = (function (_React$Component) {
    _inherits(MdFormatColorReset, _React$Component);

    function MdFormatColorReset() {
        _classCallCheck(this, MdFormatColorReset);

        _React$Component.apply(this, arguments);
    }

    MdFormatColorReset.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm30 23.3c0-6.6-10-18-10-18s-2.2 2.5-4.6 5.9l14.4 14.3c0.1-0.7 0.2-1.4 0.2-2.2z m-1.5 5.2l-7.7-7.7-12-12-2.1 2.1 5.5 5.5c-1.3 2.5-2.2 4.9-2.2 6.9 0 5.6 4.5 10 10 10 2.5 0 4.8-0.9 6.6-2.5l4.4 4.4 2.1-2.1-4.6-4.6z' })
            )
        );
    };

    return MdFormatColorReset;
})(React.Component);

exports['default'] = MdFormatColorReset;
module.exports = exports['default'];