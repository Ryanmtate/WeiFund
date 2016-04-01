/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaSquareO = (function (_React$Component) {
    _inherits(FaSquareO, _React$Component);

    function FaSquareO() {
        _classCallCheck(this, FaSquareO);

        _React$Component.apply(this, arguments);
    }

    FaSquareO.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm29.285714285714285 5.714285714285714h-18.571428571428573q-1.4714285714285715 0-2.522857142857143 1.048571428571429t-1.0485714285714254 2.522857142857143v18.571428571428577q0 1.4714285714285715 1.048571428571429 2.5228571428571414t2.522857142857143 1.048571428571428h18.571428571428573q1.4714285714285715 0 2.522857142857145-1.048571428571428t1.048571428571428-2.522857142857145v-18.571428571428573q0-1.4714285714285715-1.048571428571428-2.522857142857143t-2.5228571428571485-1.0485714285714272z m6.428571428571431 3.571428571428572v18.571428571428577q0 2.6571428571428584-1.8857142857142861 4.5428571428571445t-4.5428571428571445 1.885714285714279h-18.571428571428573q-2.6571428571428584 0-4.542857142857144-1.8857142857142861t-1.8857142857142826-4.542857142857141v-18.571428571428573q0-2.6571428571428575 1.8857142857142861-4.542857142857144t4.542857142857144-1.885714285714284h18.571428571428573q2.6571428571428584 0 4.542857142857141 1.8857142857142857t1.8857142857142861 4.542857142857144z' })
            )
        );
    };

    return FaSquareO;
})(React.Component);

exports['default'] = FaSquareO;
module.exports = exports['default'];