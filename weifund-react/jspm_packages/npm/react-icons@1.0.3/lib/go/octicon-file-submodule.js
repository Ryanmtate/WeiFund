/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonFileSubmodule = (function (_React$Component) {
    _inherits(GoOcticonFileSubmodule, _React$Component);

    function GoOcticonFileSubmodule() {
        _classCallCheck(this, GoOcticonFileSubmodule);

        _React$Component.apply(this, arguments);
    }

    GoOcticonFileSubmodule.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm27.5 17.5h-15v17.5h22.5c1.4 0 2.5-1.1 2.5-2.5v-12.5h-10v-2.5z m-2.5 5h-10v-2.5h10v2.5z m10-12.5h-15v-2.5c0-1.6-0.8-2.5-2.5-2.5h-12.5c-1.4 0-2.5 1.1-2.5 2.5v25c0 1.4 1.1 2.5 2.5 2.5h5v-17.5c0-1.4 1.1-2.5 2.5-2.5h15c1.4 0 2.5 1.1 2.5 2.5h7.5v-5c0-1.4-1.1-2.5-2.5-2.5z m-17.5 0h-12.5v-2.5h12.5v2.5z' })
            )
        );
    };

    return GoOcticonFileSubmodule;
})(React.Component);

exports['default'] = GoOcticonFileSubmodule;
module.exports = exports['default'];