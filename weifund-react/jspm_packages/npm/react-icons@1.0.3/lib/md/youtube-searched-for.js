/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdYoutubeSearchedFor = (function (_React$Component) {
    _inherits(MdYoutubeSearchedFor, _React$Component);

    function MdYoutubeSearchedFor() {
        _classCallCheck(this, MdYoutubeSearchedFor);

        _React$Component.apply(this, arguments);
    }

    MdYoutubeSearchedFor.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm28.4 23.3h-1.4l-0.4-0.4c1.6-1.9 2.6-4.4 2.6-7.1 0-5.9-4.9-10.8-10.8-10.8s-10.9 5-10.9 10.8h-4.2l6.4 6.7 7-6.7h-5.9c0-4.1 3.4-7.5 7.6-7.5s7.5 3.4 7.5 7.5c0 4.2-3.4 7.5-7.5 7.5-1.1 0-2.1-0.2-3.1-0.6l-2.5 2.5c1.7 0.9 3.5 1.5 5.6 1.5 2.6 0 5.1-1 7-2.6l0.4 0.4v1.3l8.4 8.3 2.5-2.4-8.3-8.4z' })
            )
        );
    };

    return MdYoutubeSearchedFor;
})(React.Component);

exports['default'] = MdYoutubeSearchedFor;
module.exports = exports['default'];