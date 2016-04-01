/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var TiMediaPause = (function (_React$Component) {
    _inherits(TiMediaPause, _React$Component);

    function TiMediaPause() {
        _classCallCheck(this, TiMediaPause);

        _React$Component.apply(this, arguments);
    }

    TiMediaPause.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm13.333333333333334 10c-1.8399999999999999 0-3.333333333333334 1.493333333333334-3.333333333333334 3.333333333333334v13.333333333333334c0 1.8399999999999999 1.493333333333334 3.333333333333332 3.333333333333334 3.333333333333332s3.333333333333334-1.4933333333333323 3.333333333333334-3.333333333333332v-13.333333333333334c0-1.8399999999999999-1.493333333333334-3.333333333333334-3.333333333333334-3.333333333333334z m11.666666666666666 0c-1.8399999999999999 0-3.333333333333332 1.493333333333334-3.333333333333332 3.333333333333334v13.333333333333334c0 1.8399999999999999 1.4933333333333323 3.333333333333332 3.333333333333332 3.333333333333332s3.333333333333332-1.4933333333333323 3.333333333333332-3.333333333333332v-13.333333333333334c0-1.8399999999999999-1.4933333333333323-3.333333333333334-3.333333333333332-3.333333333333334z' })
            )
        );
    };

    return TiMediaPause;
})(React.Component);

exports['default'] = TiMediaPause;
module.exports = exports['default'];