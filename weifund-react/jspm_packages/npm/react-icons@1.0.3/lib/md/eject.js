/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdEject = (function (_React$Component) {
    _inherits(MdEject, _React$Component);

    function MdEject() {
        _classCallCheck(this, MdEject);

        _React$Component.apply(this, arguments);
    }

    MdEject.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 8.360000000000001l11.093333333333334 16.64h-22.188333333333333z m-11.64 20h23.283333333333335v3.2833333333333314h-23.285000000000004v-3.2833333333333314z' })
            )
        );
    };

    return MdEject;
})(React.Component);

exports['default'] = MdEject;
module.exports = exports['default'];