/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonOrganization = (function (_React$Component) {
    _inherits(GoOcticonOrganization, _React$Component);

    function GoOcticonOrganization() {
        _classCallCheck(this, GoOcticonOrganization);

        _React$Component.apply(this, arguments);
    }

    GoOcticonOrganization.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm14.4 12.4c1.3 1.6 3.3 2.6 5.6 2.6s4.3-1 5.6-2.6c0.9 1.5 2.5 2.6 4.4 2.6 2.8 0 5-2.2 5-5s-2.2-5-5-5c-1 0-1.9 0.3-2.7 0.8-0.8-3.3-3.7-5.8-7.3-5.8s-6.5 2.5-7.3 5.8c-0.8-0.5-1.7-0.8-2.7-0.8-2.8 0-5 2.2-5 5s2.2 5 5 5c1.9 0 3.5-1.1 4.4-2.6z m13-3.8c0.5-0.9 1.5-1.6 2.6-1.6 1.6 0 3 1.4 3 3s-1.4 3-3 3-2.9-1.3-3-2.9c0.2-0.5 0.3-1 0.4-1.5z m-7.4-6.1c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z m-10 10.5c-1.6 0-3-1.4-3-3s1.4-3 3-3c1.1 0 2.1 0.7 2.6 1.6 0.1 0.5 0.2 1 0.4 1.5-0.1 1.6-1.4 2.9-3 2.9z m25 2h-30c-1.4 0-2.5 1.1-2.5 2.5v7.5c0 1.4 1.1 2.5 2.5 2.5v5c0 1.4 1.1 2.5 2.5 2.5h2.5c1.4 0 2.5-1.1 2.5-2.5v-2.5h2.5v7.5c0 1.4 1.1 2.5 2.5 2.5h5c1.4 0 2.5-1.1 2.5-2.5v-7.5h2.5v2.5c0 1.4 1.1 2.5 2.5 2.5h2.5c1.4 0 2.5-1.1 2.5-2.5v-5c1.4 0 2.5-1.1 2.5-2.5v-7.5c0-1.4-1.1-2.5-2.5-2.5z m-25 17.5h-2.5v-7.5h-2.5v-7.5h5v15z m17.5-5h-2.5v-5h-2.5v15h-5v-15h-2.5v5h-2.5v-10h15v10z m7.5-2.5h-2.5v7.5h-2.5v-15h5v7.5z' })
            )
        );
    };

    return GoOcticonOrganization;
})(React.Component);

exports['default'] = GoOcticonOrganization;
module.exports = exports['default'];