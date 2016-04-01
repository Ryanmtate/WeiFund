/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdViewAgenda = (function (_React$Component) {
    _inherits(MdViewAgenda, _React$Component);

    function MdViewAgenda() {
        _classCallCheck(this, MdViewAgenda);

        _React$Component.apply(this, arguments);
    }

    MdViewAgenda.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm33.36 5q0.7033333333333331 0 1.1716666666666669 0.4666666666666668t0.46666666666666856 1.1733333333333338v10q0 0.7033333333333331-0.46666666666666856 1.211666666666666t-1.173333333333332 0.5100000000000016h-28.358333333333334q-0.7033333333333331 0-1.1716666666666669-0.5083333333333329t-0.4666666666666668-1.2100000000000009v-10q0-0.7033333333333331 0.4666666666666668-1.1716666666666669t1.1716666666666669-0.47166666666666757h28.36z m0 16.64q0.7033333333333331 0 1.1716666666666669 0.5083333333333329t0.46666666666666856 1.2100000000000009v10q0 0.7033333333333331-0.46666666666666856 1.1716666666666669t-1.173333333333332 0.46666666666666856h-28.358333333333334q-0.7033333333333331 0-1.1716666666666669-0.46666666666666856t-0.4666666666666668-1.173333333333332v-10q0-0.7033333333333331 0.4666666666666668-1.211666666666666t1.1716666666666669-0.5066666666666677h28.36z' })
            )
        );
    };

    return MdViewAgenda;
})(React.Component);

exports['default'] = MdViewAgenda;
module.exports = exports['default'];