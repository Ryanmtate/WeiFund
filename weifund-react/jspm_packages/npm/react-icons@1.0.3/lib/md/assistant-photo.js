/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdAssistantPhoto = (function (_React$Component) {
    _inherits(MdAssistantPhoto, _React$Component);

    function MdAssistantPhoto() {
        _classCallCheck(this, MdAssistantPhoto);

        _React$Component.apply(this, arguments);
    }

    MdAssistantPhoto.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm23.983333333333334 10h9.376666666666665v16.64h-11.716666666666669l-0.6266666666666652-3.2833333333333314h-9.374999999999998v11.64333333333333h-3.283333333333333v-28.363333333333333h15z' })
            )
        );
    };

    return MdAssistantPhoto;
})(React.Component);

exports['default'] = MdAssistantPhoto;
module.exports = exports['default'];