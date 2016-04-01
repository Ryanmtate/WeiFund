/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonPerson = (function (_React$Component) {
    _inherits(GoOcticonPerson, _React$Component);

    function GoOcticonPerson() {
        _classCallCheck(this, GoOcticonPerson);

        _React$Component.apply(this, arguments);
    }

    GoOcticonPerson.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm27.5 15h-15c-1.4 0-2.5 1.1-2.5 2.5v12.5h5v7.5c0 1.4 1.1 2.5 2.5 2.5h5c1.4 0 2.5-1.1 2.5-2.5v-7.5h5v-12.5c0-1.4-1.1-2.5-2.5-2.5z m0 12.5h-2.5v-5h-2.5v15h-5v-15h-2.5v5h-2.5v-10h15v10z m0-20c0-4.1-3.4-7.5-7.5-7.5s-7.5 3.4-7.5 7.5 3.4 7.5 7.5 7.5 7.5-3.4 7.5-7.5z m-7.5 5c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z' })
            )
        );
    };

    return GoOcticonPerson;
})(React.Component);

exports['default'] = GoOcticonPerson;
module.exports = exports['default'];