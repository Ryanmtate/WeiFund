/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonMention = (function (_React$Component) {
    _inherits(GoOcticonMention, _React$Component);

    function GoOcticonMention() {
        _classCallCheck(this, GoOcticonMention);

        _React$Component.apply(this, arguments);
    }

    GoOcticonMention.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm22 3.9c-8.9-1.1-17 5.2-18.1 14.1-1.1 8.9 5.2 17 14.1 18.1 2.8 0.4 5.7 0 8.4-1.1l0 0c0.9-0.4 1.3-1.5 0.9-2.5-0.4-1-1.5-1.4-2.4-1v0c-2.1 0.9-4.3 1.2-6.4 0.9-6.9-0.8-11.7-7.1-10.9-13.9 0.8-6.9 7.1-11.7 13.9-10.9 6.9 0.8 11.7 7.1 10.9 13.9-0.2 1.4-0.8 2.2-2.4 2.2-1.7 0-2.5-1.8-2.5-3.2v-4.9c0-1-0.8-1.9-1.9-1.9-0.4 0-0.7 0.2-1 0.4-1-0.8-2.2-1.4-3.7-1.5-4.1-0.5-7.8 2.4-8.3 6.5-0.5 4.1 2.4 7.8 6.5 8.3 2.2 0.3 4.5-0.5 6.2-2 0.9 1.1 2.3 1.8 3.9 2 3.4 0.4 6.5-2 6.9-5.4 1.1-8.9-5.2-17-14.1-18.1z m1.7 16.6c-0.2 2-2.1 3.5-4.2 3.2-2-0.2-3.5-2.1-3.2-4.2 0.2-2 2.1-3.5 4.2-3.2 2 0.2 3.5 2.1 3.2 4.2z' })
            )
        );
    };

    return GoOcticonMention;
})(React.Component);

exports['default'] = GoOcticonMention;
module.exports = exports['default'];