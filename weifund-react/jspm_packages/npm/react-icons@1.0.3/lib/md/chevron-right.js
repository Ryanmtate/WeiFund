/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdChevronRight = (function (_React$Component) {
    _inherits(MdChevronRight, _React$Component);

    function MdChevronRight() {
        _classCallCheck(this, MdChevronRight);

        _React$Component.apply(this, arguments);
    }

    MdChevronRight.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm16.64 10l10 10-10 10-2.3433333333333337-2.3433333333333337 7.65666666666667-7.656666666666666-7.65666666666667-7.656666666666666z' })
            )
        );
    };

    return MdChevronRight;
})(React.Component);

exports['default'] = MdChevronRight;
module.exports = exports['default'];