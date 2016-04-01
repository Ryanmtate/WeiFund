/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoQuestion = (function (_React$Component) {
    _inherits(GoQuestion, _React$Component);

    function GoQuestion() {
        _classCallCheck(this, GoQuestion);

        _React$Component.apply(this, arguments);
    }

    GoQuestion.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm17.5 30h5v-5h-5v5z m2.5-20c-3.75 0-7.5 3.75-7.5 7.5h5c0-1.25 1.25-2.5 2.5-2.5s2.5 1.25 2.5 2.5c0 2.5-5 2.5-5 5h5c2.5-0.8599999999999994 5-2.5 5-6.25s-3.75-6.25-7.5-6.25z m0-10c-11.055 0-20 8.945-20 20s8.945 20 20 20 20-8.945 20-20-8.945-20-20-20z m0 35c-8.28125 0-15-6.71875-15-15s6.71875-15 15-15 15 6.71875 15 15-6.71875 15-15 15z' })
            )
        );
    };

    return GoQuestion;
})(React.Component);

exports['default'] = GoQuestion;
module.exports = exports['default'];