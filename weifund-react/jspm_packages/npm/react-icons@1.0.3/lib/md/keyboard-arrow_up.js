/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdKeyboardArrowUp = (function (_React$Component) {
    _inherits(MdKeyboardArrowUp, _React$Component);

    function MdKeyboardArrowUp() {
        _classCallCheck(this, MdKeyboardArrowUp);

        _React$Component.apply(this, arguments);
    }

    MdKeyboardArrowUp.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm12.343333333333334 25.703333333333337l-2.3433333333333337-2.3433333333333373 10-10 10 10-2.3433333333333337 2.3433333333333337-7.656666666666666-7.656666666666666z' })
            )
        );
    };

    return MdKeyboardArrowUp;
})(React.Component);

exports['default'] = MdKeyboardArrowUp;
module.exports = exports['default'];