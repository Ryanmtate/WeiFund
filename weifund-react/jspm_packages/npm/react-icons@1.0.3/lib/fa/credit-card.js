/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaCreditCard = (function (_React$Component) {
    _inherits(FaCreditCard, _React$Component);

    function FaCreditCard() {
        _classCallCheck(this, FaCreditCard);

        _React$Component.apply(this, arguments);
    }

    FaCreditCard.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm36.666666666666664 4q1.3733333333333348 0 2.3546666666666667 0.9786666666666664t0.978666666666669 2.3546666666666667v25.333333333333332q0 1.3733333333333348-0.978666666666669 2.3546666666666667t-2.3546666666666667 0.978666666666669h-33.33333333333333q-1.3733333333333333 0-2.3546666666666667-0.978666666666669t-0.978666666666669-2.3546666666666667v-25.333333333333332q0-1.373333333333333 0.9786666666666666-2.3546666666666667t2.3546666666666667-0.9786666666666655h33.33333333333333z m-33.33333333333333 2.666666666666666q-0.2706666666666666 0-0.46933333333333316 0.19733333333333292t-0.19733333333333603 0.46933333333333405v4.666666666666667h34.666666666666664v-4.666666666666667q0-0.27066666666666706-0.19733333333333292-0.46933333333333316t-0.4693333333333314-0.1973333333333338h-33.33333333333333z m33.33333333333333 26.666666666666664q0.2706666666666635 0 0.4693333333333314-0.19733333333333292t0.19733333333333292-0.4693333333333314v-12.666666666666664h-34.666666666666664v12.666666666666664q2.220446049250313e-15 0.2706666666666635 0.19733333333333558 0.4693333333333314t0.46933333333333316 0.19733333333333292h33.33333333333333z m-31.333333333333332-2.6666666666666643v-2.666666666666668h5.333333333333334v2.666666666666668h-5.333333333333333z m8 0v-2.666666666666668h8v2.666666666666668h-8z' })
            )
        );
    };

    return FaCreditCard;
})(React.Component);

exports['default'] = FaCreditCard;
module.exports = exports['default'];