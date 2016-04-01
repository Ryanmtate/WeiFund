/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdPhotoSizeSelectActual = (function (_React$Component) {
    _inherits(MdPhotoSizeSelectActual, _React$Component);

    function MdPhotoSizeSelectActual() {
        _classCallCheck(this, MdPhotoSizeSelectActual);

        _React$Component.apply(this, arguments);
    }

    MdPhotoSizeSelectActual.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm35 5h-30c-1.7 0-3.3 1.7-3.3 3.3v23.4c0 1.8 1.5 3.3 3.3 3.3h30c1.7 0 3.3-1.7 3.3-3.3v-23.4c0-1.6-1.6-3.3-3.3-3.3z m-26.7 23.3l5.9-7.5 4.1 5.1 5.9-7.6 7.5 10h-23.4z' })
            )
        );
    };

    return MdPhotoSizeSelectActual;
})(React.Component);

exports['default'] = MdPhotoSizeSelectActual;
module.exports = exports['default'];