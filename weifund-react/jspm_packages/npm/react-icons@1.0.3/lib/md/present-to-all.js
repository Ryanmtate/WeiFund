/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdPresentToAll = (function (_React$Component) {
    _inherits(MdPresentToAll, _React$Component);

    function MdPresentToAll() {
        _classCallCheck(this, MdPresentToAll);

        _React$Component.apply(this, arguments);
    }

    MdPresentToAll.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm35 5h-30c-1.9 0-3.3 1.5-3.3 3.3v23.4c0 1.8 1.4 3.3 3.3 3.3h30c1.9 0 3.3-1.5 3.3-3.3v-23.4c0-1.8-1.4-3.3-3.3-3.3z m0 26.7h-30v-23.4h30v23.4z m-18.3-11.7h-3.4l6.7-6.7 6.7 6.7h-3.4v6.7h-6.6v-6.7z' })
            )
        );
    };

    return MdPresentToAll;
})(React.Component);

exports['default'] = MdPresentToAll;
module.exports = exports['default'];