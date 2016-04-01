/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdClear = (function (_React$Component) {
    _inherits(MdClear, _React$Component);

    function MdClear() {
        _classCallCheck(this, MdClear);

        _React$Component.apply(this, arguments);
    }

    MdClear.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm31.640000000000004 10.703333333333333l-9.29666666666667 9.296666666666667 9.296666666666667 9.296666666666667-2.3433333333333337 2.3433333333333337-9.296666666666667-9.296666666666667-9.296666666666667 9.296666666666667-2.3433333333333337-2.3433333333333337 9.296666666666667-9.296666666666667-9.296666666666665-9.296666666666667 2.3433333333333337-2.3433333333333337 9.296666666666665 9.296666666666667 9.296666666666667-9.296666666666667z' })
            )
        );
    };

    return MdClear;
})(React.Component);

exports['default'] = MdClear;
module.exports = exports['default'];