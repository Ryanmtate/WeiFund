/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaOpenid = (function (_React$Component) {
    _inherits(FaOpenid, _React$Component);

    function FaOpenid() {
        _classCallCheck(this, FaOpenid);

        _React$Component.apply(this, arguments);
    }

    FaOpenid.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm24.24285714285714 0v34.285714285714285l-6.071428571428569 2.857142857142854q-5.0914285714285725-0.4471428571428575-9.242857142857142-2.277142857142856t-6.540000000000001-4.654285714285713-2.388571428571428-6.08285714285714q0-3.1257142857142846 2.242857142857143-5.881428571428572t6.138571428571429-4.585714285714285 8.73857142857143-2.411428571428571v3.84q-4.842857142857143 0.8485714285714288-7.957142857142857 3.348571428571427t-3.1142857142857148 5.69142857142857q0 3.394285714285715 3.4485714285714293 5.9614285714285735t8.671428571428574 3.2371428571428567v-30.357142857142858z m14.928571428571438 12.991428571428571l0.8285714285714221 8.705714285714286-11.71857142857143-2.5428571428571445 3.2814285714285703-1.8542857142857159q-2.6571428571428584-1.5628571428571423-6.25-2.210000000000001v-3.8399999999999963q6.181428571428572 0.7371428571428567 10.735714285714288 3.5042857142857144z' })
            )
        );
    };

    return FaOpenid;
})(React.Component);

exports['default'] = FaOpenid;
module.exports = exports['default'];