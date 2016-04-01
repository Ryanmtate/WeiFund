/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdCrop169 = (function (_React$Component) {
    _inherits(MdCrop169, _React$Component);

    function MdCrop169() {
        _classCallCheck(this, MdCrop169);

        _React$Component.apply(this, arguments);
    }

    MdCrop169.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm31.7 10h-23.4c-1.8 0-3.3 1.5-3.3 3.3v13.4c0 1.8 1.5 3.3 3.3 3.3h23.4c1.8 0 3.3-1.5 3.3-3.3v-13.4c0-1.8-1.5-3.3-3.3-3.3z m0 16.7h-23.4v-13.4h23.4v13.4z' })
            )
        );
    };

    return MdCrop169;
})(React.Component);

exports['default'] = MdCrop169;
module.exports = exports['default'];