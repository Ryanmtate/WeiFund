/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonRepoForked = (function (_React$Component) {
    _inherits(GoOcticonRepoForked, _React$Component);

    function GoOcticonRepoForked() {
        _classCallCheck(this, GoOcticonRepoForked);

        _React$Component.apply(this, arguments);
    }

    GoOcticonRepoForked.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm27.5 2.5c-2.8 0-5 2.2-5 5 0 1.8 1 3.4 2.5 4.3v3.2l-5 5-5-5v-3.2c1.5-0.9 2.5-2.5 2.5-4.3 0-2.8-2.2-5-5-5s-5 2.2-5 5c0 1.8 1 3.4 2.5 4.3v4.4l7.5 7.5v4.5c-1.5 0.9-2.5 2.5-2.5 4.3 0 2.8 2.2 5 5 5s5-2.2 5-5c0-1.8-1-3.4-2.5-4.3v-4.5l7.5-7.5v-4.4c1.5-0.9 2.5-2.5 2.5-4.3 0-2.8-2.2-5-5-5z m-15 8c-1.6 0-3-1.4-3-3s1.4-3 3-3 3 1.4 3 3-1.4 3-3 3z m7.5 25c-1.6 0-3-1.4-3-3s1.4-3 3-3 3 1.4 3 3-1.4 3-3 3z m7.5-25c-1.6 0-3-1.4-3-3s1.4-3 3-3 3 1.4 3 3-1.4 3-3 3z' })
            )
        );
    };

    return GoOcticonRepoForked;
})(React.Component);

exports['default'] = GoOcticonRepoForked;
module.exports = exports['default'];