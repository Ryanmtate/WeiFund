/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSignalCellular2Bar = (function (_React$Component) {
    _inherits(MdSignalCellular2Bar, _React$Component);

    function MdSignalCellular2Bar() {
        _classCallCheck(this, MdSignalCellular2Bar);

        _React$Component.apply(this, arguments);
    }

    MdSignalCellular2Bar.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm3.3 36.7h33.4v-33.4z' }),
                React.createElement('path', { d: 'm23.3 16.7l-20 20h20z' })
            )
        );
    };

    return MdSignalCellular2Bar;
})(React.Component);

exports['default'] = MdSignalCellular2Bar;
module.exports = exports['default'];