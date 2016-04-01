/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdUndo = (function (_React$Component) {
    _inherits(MdUndo, _React$Component);

    function MdUndo() {
        _classCallCheck(this, MdUndo);

        _React$Component.apply(this, arguments);
    }

    MdUndo.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20.86 13.360000000000001q5.703333333333333 0 10.233333333333334 3.360000000000001t6.329999999999998 8.671666666666667l-3.9066666666666663 1.25q-1.3283333333333331-4.063333333333333-4.805-6.600000000000001t-7.850000000000001-2.539999999999999q-4.844999999999999 0-8.595 3.126666666666665l6.0933333333333355 6.016666666666666h-15v-15l5.938333333333333 6.013333333333332q4.92-4.296666666666667 11.561666666666667-4.296666666666667z' })
            )
        );
    };

    return MdUndo;
})(React.Component);

exports['default'] = MdUndo;
module.exports = exports['default'];