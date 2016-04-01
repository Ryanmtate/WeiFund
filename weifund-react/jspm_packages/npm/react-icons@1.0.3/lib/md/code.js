/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdCode = (function (_React$Component) {
    _inherits(MdCode, _React$Component);

    function MdCode() {
        _classCallCheck(this, MdCode);

        _React$Component.apply(this, arguments);
    }

    MdCode.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm24.296666666666667 27.65666666666667l7.733333333333334-7.65666666666667-7.733333333333334-7.656666666666666 2.3433333333333337-2.3433333333333337 10 10-10 10z m-8.593333333333334 0l-2.343333333333332 2.34333333333333-10-10 10-10 2.3433333333333337 2.3433333333333337-7.733333333333334 7.656666666666666z' })
            )
        );
    };

    return MdCode;
})(React.Component);

exports['default'] = MdCode;
module.exports = exports['default'];