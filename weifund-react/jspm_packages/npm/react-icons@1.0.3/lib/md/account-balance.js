/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdAccountBalance = (function (_React$Component) {
    _inherits(MdAccountBalance, _React$Component);

    function MdAccountBalance() {
        _classCallCheck(this, MdAccountBalance);

        _React$Component.apply(this, arguments);
    }

    MdAccountBalance.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm19.14 1.6400000000000001l15.86 8.36v3.3599999999999994h-31.64v-3.3599999999999994z m7.5 15h5v11.716666666666669h-5v-11.716666666666669z m-23.28 20v-5h31.64v5h-31.64z m13.280000000000001-20h5v11.716666666666669h-5v-11.716666666666669z m-10 0h5v11.716666666666669h-5v-11.716666666666669z' })
            )
        );
    };

    return MdAccountBalance;
})(React.Component);

exports['default'] = MdAccountBalance;
module.exports = exports['default'];