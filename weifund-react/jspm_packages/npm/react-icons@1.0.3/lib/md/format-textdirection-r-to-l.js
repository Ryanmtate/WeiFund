/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdFormatTextdirectionRToL = (function (_React$Component) {
    _inherits(MdFormatTextdirectionRToL, _React$Component);

    function MdFormatTextdirectionRToL() {
        _classCallCheck(this, MdFormatTextdirectionRToL);

        _React$Component.apply(this, arguments);
    }

    MdFormatTextdirectionRToL.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm16.7 16.7v8.3h3.3v-18.3h3.3v18.3h3.4v-18.3h3.3v-3.4h-13.3c-3.7 0-6.7 3-6.7 6.7s3 6.7 6.7 6.7z m-3.4 11.6v-5l-6.6 6.7 6.6 6.7v-5h20v-3.4h-20z' })
            )
        );
    };

    return MdFormatTextdirectionRToL;
})(React.Component);

exports['default'] = MdFormatTextdirectionRToL;
module.exports = exports['default'];