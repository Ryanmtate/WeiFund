/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdPictureAsPdf = (function (_React$Component) {
    _inherits(MdPictureAsPdf, _React$Component);

    function MdPictureAsPdf() {
        _classCallCheck(this, MdPictureAsPdf);

        _React$Component.apply(this, arguments);
    }

    MdPictureAsPdf.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm23.36 19.14v-5h1.6400000000000006v5h-1.6400000000000006z m-16.72-9.14v23.36h23.36v3.2833333333333314h-23.36q-1.3283333333333331 0-2.3049999999999997-0.9783333333333317t-0.9750000000000001-2.306666666666665v-23.358333333333334h3.2833333333333337z m8.36 5.860000000000001v-1.7166666666666668h1.6400000000000006v1.7166666666666668h-1.6400000000000006z m19.14-1.7200000000000006v-2.5h-5v10h2.5v-3.2833333333333314h2.5v-2.5h-2.5v-1.7166666666666668h2.5z m-6.640000000000001 5v-5q0-1.0166666666666657-0.7033333333333331-1.7583333333333329t-1.7966666666666669-0.7433333333333341h-4.140000000000001v10.000000000000002h4.140000000000001q1.0933333333333337 0 1.7966666666666669-0.7416666666666671t0.7033333333333331-1.7600000000000016z m-8.36-3.280000000000001v-1.7166666666666668q0-1.0166666666666675-0.7416666666666671-1.7599999999999998t-1.7600000000000016-0.7416666666666671h-4.138333333333332v10h2.5v-3.2833333333333314h1.6400000000000006q1.0166666666666657 0 1.7583333333333329-0.7399999999999984t0.7399999999999984-1.7566666666666677z m14.219999999999999-12.5q1.3283333333333331 0 2.3049999999999997 0.9766666666666666t0.9750000000000014 2.3049999999999997v20q0 1.3283333333333331-0.9766666666666666 2.3433333333333337t-2.306666666666665 1.0166666666666657h-20q-1.3283333333333331 0-2.3433333333333337-1.0166666666666657t-1.0133333333333354-2.341666666666665v-20q0-1.3283333333333331 1.0166666666666657-2.3049999999999997t2.3433333333333337-0.9766666666666666h20z' })
            )
        );
    };

    return MdPictureAsPdf;
})(React.Component);

exports['default'] = MdPictureAsPdf;
module.exports = exports['default'];