/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdFormatLineSpacing = (function (_React$Component) {
    _inherits(MdFormatLineSpacing, _React$Component);

    function MdFormatLineSpacing() {
        _classCallCheck(this, MdFormatLineSpacing);

        _React$Component.apply(this, arguments);
    }

    MdFormatLineSpacing.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm10 11.7h4.2l-5.9-5.9-5.8 5.9h4.2v16.6h-4.2l5.8 5.9 5.9-5.9h-4.2v-16.6z m6.7-3.4v3.4h20v-3.4h-20z m0 23.4h20v-3.4h-20v3.4z m0-10h20v-3.4h-20v3.4z' })
            )
        );
    };

    return MdFormatLineSpacing;
})(React.Component);

exports['default'] = MdFormatLineSpacing;
module.exports = exports['default'];