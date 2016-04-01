/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaArrowDown = (function (_React$Component) {
    _inherits(FaArrowDown, _React$Component);

    function FaArrowDown() {
        _classCallCheck(this, FaArrowDown);

        _React$Component.apply(this, arguments);
    }

    FaArrowDown.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm37.38857142857143 18.571428571428573q0 1.1828571428571415-0.8257142857142838 2.008571428571429l-14.531428571428574 14.552857142857139q-0.8714285714285701 0.8257142857142838-2.0314285714285703 0.8257142857142838-1.1828571428571415 0-2.008571428571429-0.8242857142857147l-14.531428571428576-14.554285714285708q-0.8485714285714279-0.802857142857146-0.8485714285714279-2.008571428571429 0-1.1828571428571415 0.8485714285714288-2.0314285714285703l1.6514285714285712-1.6742857142857144q0.871428571428571-0.8257142857142856 2.031428571428571-0.8257142857142856 1.1828571428571433 0 2.008571428571429 0.8257142857142856l6.562857142857144 6.562857142857142v-15.714285714285715q0-1.160000000000001 0.8485714285714288-2.0085714285714293t2.008571428571429-0.8485714285714288h2.8571428571428577q1.1600000000000001 0 2.008571428571429 0.8485714285714283t0.8485714285714252 2.008571428571429v15.714285714285715l6.562857142857144-6.562857142857144q0.8257142857142874-0.8257142857142856 2.0085714285714253-0.8257142857142856 1.1600000000000037 0 2.0314285714285703 0.8257142857142856l1.6742857142857162 1.6742857142857126q0.8257142857142838 0.8714285714285701 0.8257142857142838 2.0314285714285703z' })
            )
        );
    };

    return FaArrowDown;
})(React.Component);

exports['default'] = FaArrowDown;
module.exports = exports['default'];