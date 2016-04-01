/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonChecklist = (function (_React$Component) {
    _inherits(GoOcticonChecklist, _React$Component);

    function GoOcticonChecklist() {
        _classCallCheck(this, GoOcticonChecklist);

        _React$Component.apply(this, arguments);
    }

    GoOcticonChecklist.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm13.1 26c0.1-0.8 0.4-1.6 1-2.2l2.5-2.3c0.6-0.6 1.4-0.9 2.2-0.9s1.6 0.3 2.2 0.9l1.5 1.6 5-5v-10.6c0-1.4-1.1-2.5-2.5-2.5h-17.5c-1.4 0-2.5 1.1-2.5 2.5v22.5c0 1.4 1.1 2.5 2.5 2.5h10.6l-4.1-4.2c-0.6-0.6-0.9-1.4-0.9-2.3z m-0.6-18.5h12.5v2.5h-12.5v-2.5z m-2.5 7.5h-2.5v-2.5h2.5v2.5z m0-5h-2.5v-2.5h2.5v2.5z m2.5 2.5h12.5v2.5h-12.5v-2.5z m21.2 8.7l-11.2 11.3-6.2-6.4 2.5-2.4 3.7 3.8 8.7-8.8 2.5 2.5z' })
            )
        );
    };

    return GoOcticonChecklist;
})(React.Component);

exports['default'] = GoOcticonChecklist;
module.exports = exports['default'];