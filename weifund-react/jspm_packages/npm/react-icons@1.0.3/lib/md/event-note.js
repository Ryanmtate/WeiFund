/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdEventNote = (function (_React$Component) {
    _inherits(MdEventNote, _React$Component);

    function MdEventNote() {
        _classCallCheck(this, MdEventNote);

        _React$Component.apply(this, arguments);
    }

    MdEventNote.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm23.36 23.36v3.2833333333333314h-11.716666666666667v-3.2833333333333314h11.716666666666667z m8.280000000000001 8.280000000000001v-18.283333333333335h-23.28333333333333v18.283333333333335h23.28333333333333z m0-26.64q1.3283333333333331 0 2.3433333333333337 1.0166666666666666t1.0166666666666657 2.3400000000000007v23.28333333333333q0 1.326666666666668-1.0166666666666657 2.3416666666666686t-2.3433333333333337 1.0166666666666657h-23.28333333333333q-1.405000000000002 0-2.3833333333333346-1.0166666666666657t-0.9733333333333345-2.341666666666665v-23.28333333333334q0-1.3266666666666653 0.9749999999999996-2.341666666666665t2.383333333333333-1.0150000000000006h1.6416666666666675v-3.36h3.3583333333333343v3.36h13.283333333333331v-3.36h3.3583333333333343v3.36h1.6400000000000006z m-3.280000000000001 11.64v3.3599999999999994h-16.71666666666667v-3.3599999999999994h16.71666666666667z' })
            )
        );
    };

    return MdEventNote;
})(React.Component);

exports['default'] = MdEventNote;
module.exports = exports['default'];