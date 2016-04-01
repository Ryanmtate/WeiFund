/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonFilePdf = (function (_React$Component) {
    _inherits(GoOcticonFilePdf, _React$Component);

    function GoOcticonFilePdf() {
        _classCallCheck(this, GoOcticonFilePdf);

        _React$Component.apply(this, arguments);
    }

    GoOcticonFilePdf.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm26.2 2.5h-18.7c-1.4 0-2.5 1.1-2.5 2.5v30c0 1.4 1.1 2.5 2.5 2.5h25c1.4 0 2.5-1.1 2.5-2.5v-23.8l-8.8-8.7z m-18.7 2.5h10c-0.3 0.1-0.5 0.2-0.8 0.5-0.2 0.2-0.4 0.6-0.6 1.2-0.2 1-0.3 2.2-0.2 3.7s0.4 2.9 0.9 4.4c-0.6 1.9-1.6 4.1-2.8 6.7s-2 4.1-2.3 4.6c-0.3 0.1-0.9 0.3-1.7 0.7-0.8 0.4-1.6 0.9-2.5 1.6v-23.4z m11.1 12c1.1 2.8 2.1 4.6 2.9 5.2s1.6 1.2 2.3 1.4c-1.6 0.2-3.1 0.5-4.5 0.8-1.4 0.3-2.9 0.8-4.5 1.5 0-0.1 0.5-1.1 1.5-3.2s1.7-3.9 2.3-5.7z m13.9 18h-23.7c-0.2 0-0.4 0-0.5-0.1 0.5-0.1 1.2-0.5 1.9-1.1 1.1-0.9 2.6-2.9 4.4-5.9 0.8-0.3 1.5-0.6 2-0.8l1.1-0.3c1.1-0.4 2.3-0.6 3.6-0.9 1.2-0.2 2.5-0.4 3.7-0.5 1.1 0.6 2.3 1 3.5 1.4 1.2 0.3 2.2 0.5 3.1 0.5 0.3 0 0.6 0 0.9 0v7.7z m0-12.1c-0.5-0.3-1-0.6-1.6-0.8-0.6-0.1-1.2-0.2-1.9-0.2-1 0-2 0.1-3.1 0.2-0.5-0.2-1.4-0.7-2.4-1.6s-2.2-2.9-3.3-5.9c0.3-2 0.5-3.7 0.5-4.9s0-1.8 0-1.8c0.1-1.1-0.1-1.8-0.5-2.2s-0.9-0.7-1.5-0.7h6.3l7.5 7.5v10.4z' })
            )
        );
    };

    return GoOcticonFilePdf;
})(React.Component);

exports['default'] = GoOcticonFilePdf;
module.exports = exports['default'];