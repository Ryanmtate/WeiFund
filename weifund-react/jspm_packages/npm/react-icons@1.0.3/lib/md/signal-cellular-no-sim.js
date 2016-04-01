/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSignalCellularNoSim = (function (_React$Component) {
    _inherits(MdSignalCellularNoSim, _React$Component);

    function MdSignalCellularNoSim() {
        _classCallCheck(this, MdSignalCellularNoSim);

        _React$Component.apply(this, arguments);
    }

    MdSignalCellularNoSim.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm31.6 8.3c0-1.8-1.4-3.3-3.3-3.3h-11.6l-3.9 3.9 18.9 18.9-0.1-19.5z m-25.5-1.8l-2.1 2.1 4.3 4.3v18.8c0 1.8 1.5 3.3 3.4 3.3h16.7c0.5 0 1.1-0.2 1.6-0.4l3.1 3.1 2.1-2.1-29.1-29.1z' })
            )
        );
    };

    return MdSignalCellularNoSim;
})(React.Component);

exports['default'] = MdSignalCellularNoSim;
module.exports = exports['default'];