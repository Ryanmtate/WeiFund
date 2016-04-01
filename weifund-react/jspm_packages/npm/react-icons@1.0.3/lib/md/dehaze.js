/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdDehaze = (function (_React$Component) {
    _inherits(MdDehaze, _React$Component);

    function MdDehaze() {
        _classCallCheck(this, MdDehaze);

        _React$Component.apply(this, arguments);
    }

    MdDehaze.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm3.3600000000000003 9.14h33.28333333333333v3.3599999999999994h-33.285v-3.3599999999999994z m0 8.36h33.28333333333333v3.3599999999999994h-33.285v-3.3599999999999994z m0 8.36h33.28333333333333v3.2833333333333314h-33.285v-3.2833333333333314z' })
            )
        );
    };

    return MdDehaze;
})(React.Component);

exports['default'] = MdDehaze;
module.exports = exports['default'];