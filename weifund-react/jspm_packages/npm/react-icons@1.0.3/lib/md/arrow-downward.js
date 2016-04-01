/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdArrowDownward = (function (_React$Component) {
    _inherits(MdArrowDownward, _React$Component);

    function MdArrowDownward() {
        _classCallCheck(this, MdArrowDownward);

        _React$Component.apply(this, arguments);
    }

    MdArrowDownward.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm33.36 20l-13.36 13.36-13.36-13.36 2.421666666666667-2.3433333333333337 9.296666666666667 9.296666666666667v-20.313333333333333h3.2833333333333314v20.313333333333336l9.373333333333335-9.296666666666667z' })
            )
        );
    };

    return MdArrowDownward;
})(React.Component);

exports['default'] = MdArrowDownward;
module.exports = exports['default'];