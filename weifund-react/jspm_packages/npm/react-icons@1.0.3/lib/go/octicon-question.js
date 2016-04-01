/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonQuestion = (function (_React$Component) {
    _inherits(GoOcticonQuestion, _React$Component);

    function GoOcticonQuestion() {
        _classCallCheck(this, GoOcticonQuestion);

        _React$Component.apply(this, arguments);
    }

    GoOcticonQuestion.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm17.5 25h5v5h-5v-5z m10-8.8c0 5.4-5 6.3-5 6.3h-5c0-1.4 1.1-2.5 2.5-2.5h1.2c0.8 0 1.3-0.5 1.3-1.3v-2.5c0-0.7-0.5-1.2-1.3-1.2h-2.4c-0.8 0-1.3 0.5-1.3 1.2v1.3h-5c0-3.8 3.8-7.5 7.5-7.5s7.5 2.5 7.5 6.2z m-7.5-10.5c7.9 0 14.3 6.4 14.3 14.3s-6.4 14.3-14.3 14.3-14.3-6.4-14.3-14.3 6.4-14.3 14.3-14.3m0-3.2c-9.6 0-17.5 7.9-17.5 17.5s7.9 17.5 17.5 17.5 17.5-7.9 17.5-17.5-7.9-17.5-17.5-17.5z' })
            )
        );
    };

    return GoOcticonQuestion;
})(React.Component);

exports['default'] = GoOcticonQuestion;
module.exports = exports['default'];