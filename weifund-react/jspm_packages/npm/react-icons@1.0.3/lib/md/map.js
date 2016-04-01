/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdMap = (function (_React$Component) {
    _inherits(MdMap, _React$Component);

    function MdMap() {
        _classCallCheck(this, MdMap);

        _React$Component.apply(this, arguments);
    }

    MdMap.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm25 31.640000000000004v-19.766666666666673l-10-3.511666666666663v19.766666666666666z m9.140000000000008-26.640000000000004q0.8599999999999923 0 0.8599999999999923 0.8600000000000003v25.156666666666666q0 0.625-0.625 0.783333333333335l-9.375 3.1999999999999993-10-3.5133333333333354-8.906666666666668 3.4383333333333326-0.2333333333333334 0.07833333333333314q-0.8616666666666664 0-0.8616666666666664-0.8599999999999994v-25.156666666666663q0-0.625 0.6233333333333331-0.7833333333333332l9.378333333333334-3.198333333333334 10 3.5133333333333336 8.905000000000001-3.4383333333333344z' })
            )
        );
    };

    return MdMap;
})(React.Component);

exports['default'] = MdMap;
module.exports = exports['default'];