/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdInvertColorsOff = (function (_React$Component) {
    _inherits(MdInvertColorsOff, _React$Component);

    function MdInvertColorsOff() {
        _classCallCheck(this, MdInvertColorsOff);

        _React$Component.apply(this, arguments);
    }

    MdInvertColorsOff.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm34.4 34.8l-3.9-3.9-10.5-10.5-5.9-6-2.4-2.3-4.6-4.6-2.1 2.1 4.6 4.7c-4.2 5.2-3.9 12.9 1 17.8 2.6 2.6 6 3.9 9.4 3.9 3 0 5.9-1 8.4-3l4.5 4.5 2.1-2.1-0.6-0.6z m-14.4-2.2c-2.7 0-5.2-1-7.1-2.9-1.9-1.9-2.9-4.4-2.9-7 0-2.2 0.7-4.3 2-6l8 7.9v8.1z m0-24.1v7.6l12.1 12.1c2.3-4.9 1.4-10.9-2.7-15l-9.4-9.4-6.2 6.2 2.4 2.3 3.8-3.8z' })
            )
        );
    };

    return MdInvertColorsOff;
})(React.Component);

exports['default'] = MdInvertColorsOff;
module.exports = exports['default'];