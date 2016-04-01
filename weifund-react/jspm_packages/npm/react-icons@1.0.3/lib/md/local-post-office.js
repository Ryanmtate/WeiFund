/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdLocalPostOffice = (function (_React$Component) {
    _inherits(MdLocalPostOffice, _React$Component);

    function MdLocalPostOffice() {
        _classCallCheck(this, MdLocalPostOffice);

        _React$Component.apply(this, arguments);
    }

    MdLocalPostOffice.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm33.3 6.7h-26.6c-1.9 0-3.3 1.5-3.3 3.3l-0.1 20c0 1.8 1.5 3.3 3.4 3.3h26.6c1.9 0 3.4-1.5 3.4-3.3v-20c0-1.8-1.5-3.3-3.4-3.3z m0 6.6l-13.3 8.4-13.3-8.4v-3.3l13.3 8.3 13.3-8.3v3.3z' })
            )
        );
    };

    return MdLocalPostOffice;
})(React.Component);

exports['default'] = MdLocalPostOffice;
module.exports = exports['default'];