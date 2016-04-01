/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaPlug = (function (_React$Component) {
    _inherits(FaPlug, _React$Component);

    function FaPlug() {
        _classCallCheck(this, FaPlug);

        _React$Component.apply(this, arguments);
    }

    FaPlug.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm39.174285714285716 10.111428571428572q0.8257142857142838 0.8257142857142856 0.8257142857142838 2.008571428571429t-0.8257142857142838 2.031428571428572l-8.951428571428572 8.928571428571429 3.348571428571425 3.3485714285714288-3.5714285714285694 3.5714285714285694q-3.638571428571428 3.6385714285714315-8.694285714285716 4.162857142857142t-9.185714285714285-2.2428571428571438l-8.079999999999998 8.080000000000002h-4.040000000000001v-4.039999999999999l8.08-8.079999999999998q-2.767142857142858-4.12857142857143-2.242857142857143-9.185714285714283t4.162857142857143-8.69428571428572l3.571428571428571-3.571428571428571 3.348571428571427 3.3485714285714288 8.928571428571427-8.951428571428572q0.8485714285714323-0.8257142857142856 2.031428571428574-0.8257142857142856t2.008571428571429 0.8257142857142856 0.8257142857142874 2.02-0.8257142857142838 2.02l-8.92857142857143 8.951428571428572 5.222857142857144 5.222857142857144 8.951428571428572-8.928571428571429q0.8485714285714252-0.8257142857142856 2.0314285714285703-0.8257142857142856t2.008571428571429 0.8257142857142856z' })
            )
        );
    };

    return FaPlug;
})(React.Component);

exports['default'] = FaPlug;
module.exports = exports['default'];