/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSubdirectoryArrowLeft = (function (_React$Component) {
    _inherits(MdSubdirectoryArrowLeft, _React$Component);

    function MdSubdirectoryArrowLeft() {
        _classCallCheck(this, MdSubdirectoryArrowLeft);

        _React$Component.apply(this, arguments);
    }

    MdSubdirectoryArrowLeft.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm18.36 15l2.3433333333333337 2.3433333333333337-6.016666666666666 6.016666666666666h15.316666666666666v-16.721666666666664h3.3583333333333307v20h-18.671666666666663l6.016666666666666 6.016666666666666-2.344999999999999 2.3416666666666686-10-10z' })
            )
        );
    };

    return MdSubdirectoryArrowLeft;
})(React.Component);

exports['default'] = MdSubdirectoryArrowLeft;
module.exports = exports['default'];