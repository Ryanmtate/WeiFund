/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdCallMissedOutgoing = (function (_React$Component) {
    _inherits(MdCallMissedOutgoing, _React$Component);

    function MdCallMissedOutgoing() {
        _classCallCheck(this, MdCallMissedOutgoing);

        _React$Component.apply(this, arguments);
    }

    MdCallMissedOutgoing.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm5 13.983333333333334l2.3433333333333337-2.341666666666667 12.656666666666666 12.658333333333333 9.296666666666667-9.3h-7.656666666666666v-3.3566666666666674h13.36v13.356666666666667h-3.3599999999999994v-7.655000000000001l-11.64 11.638333333333335z' })
            )
        );
    };

    return MdCallMissedOutgoing;
})(React.Component);

exports['default'] = MdCallMissedOutgoing;
module.exports = exports['default'];