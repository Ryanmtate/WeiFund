/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdDirectionsBoat = (function (_React$Component) {
    _inherits(MdDirectionsBoat, _React$Component);

    function MdDirectionsBoat() {
        _classCallCheck(this, MdDirectionsBoat);

        _React$Component.apply(this, arguments);
    }

    MdDirectionsBoat.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm33.3 35c-2.3 0-4.6-0.8-6.6-2.2-4.1 2.8-9.3 2.8-13.4 0-2 1.4-4.3 2.2-6.6 2.2h-3.4v3.3h3.4c2.3 0 4.5-0.5 6.6-1.6 4.2 2.1 9.2 2.1 13.4 0 2.1 1.1 4.3 1.6 6.6 1.6h3.4v-3.3h-3.4z m-26.7-3.3h0.1c2.6 0 5-1.5 6.6-3.4 1.7 1.9 4 3.4 6.7 3.4s5-1.5 6.7-3.4c1.6 1.9 4 3.4 6.6 3.4h0.1l3.2-11.2c0.1-0.4 0.1-0.9-0.1-1.3s-0.6-0.7-1-0.8l-2.2-0.7v-7.7c0-1.8-1.5-3.3-3.3-3.3h-5v-5h-10v5h-5c-1.8 0-3.3 1.5-3.3 3.3v7.7l-2.2 0.7c-0.4 0.1-0.8 0.4-1 0.8s-0.2 0.9-0.1 1.3l3.2 11.2z m3.4-21.7h20v6.6l-10-3.3-10 3.3v-6.6z' })
            )
        );
    };

    return MdDirectionsBoat;
})(React.Component);

exports['default'] = MdDirectionsBoat;
module.exports = exports['default'];