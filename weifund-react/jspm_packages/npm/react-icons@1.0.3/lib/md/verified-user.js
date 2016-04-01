/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdVerifiedUser = (function (_React$Component) {
    _inherits(MdVerifiedUser, _React$Component);

    function MdVerifiedUser() {
        _classCallCheck(this, MdVerifiedUser);

        _React$Component.apply(this, arguments);
    }

    MdVerifiedUser.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm16.64 28.36l13.36-13.36-2.3433333333333337-2.3433333333333337-11.016666666666666 10.938333333333333-4.295-4.296666666666667-2.3450000000000006 2.3416666666666686z m3.3599999999999994-26.72l15 6.716666666666667v10.000000000000002q0 6.954999999999998-4.296666666666667 12.696666666666665t-10.703333333333333 7.305q-6.406666666666666-1.5633333333333326-10.703333333333333-7.305t-4.296666666666667-12.695v-10z' })
            )
        );
    };

    return MdVerifiedUser;
})(React.Component);

exports['default'] = MdVerifiedUser;
module.exports = exports['default'];