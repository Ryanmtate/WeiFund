/* */ 
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdRecordVoiceOver = (function (_React$Component) {
    _inherits(MdRecordVoiceOver, _React$Component);

    function MdRecordVoiceOver() {
        _classCallCheck(this, MdRecordVoiceOver);

        _React$Component.apply(this, arguments);
    }

    MdRecordVoiceOver.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm33.43833333333333 3.3600000000000003q4.844999999999999 5.078333333333332 4.844999999999999 11.756666666666668t-4.844999999999999 11.524999999999999l-2.7333333333333343-2.6566666666666663q3.4366666666666674-3.9833333333333343 3.4366666666666674-9.1t-3.4383333333333326-8.866666666666667z m-5.471666666666664 5.546666666666668q2.5 2.7333333333333325 2.5 6.171666666666667t-2.5 5.938333333333334l-2.8116666666666674-2.8133333333333326q1.0933333333333337-1.4833333333333343 1.0933333333333337-3.241666666666667t-1.0949999999999989-3.241666666666667z m-12.966666666666669 16.093333333333334q4.216666666666669 0 8.788333333333334 1.836666666666666t4.57 4.805v3.3583333333333343h-26.71666666666667v-3.3583333333333343q8.881784197001252e-16-2.9666666666666686 4.566666666666668-4.805t8.791666666666666-1.836666666666666z m-6.639999999999999-10q0-2.7333333333333343 1.9533333333333331-4.688333333333333t4.686666666666666-1.953333333333335 4.690000000000001 1.9533333333333331 1.9533333333333331 4.688333333333334-1.9533333333333331 4.688333333333333-4.690000000000001 1.9533333333333331-4.683333333333332-1.9533333333333296-1.956666666666667-4.688333333333336z' })
            )
        );
    };

    return MdRecordVoiceOver;
})(React.Component);

exports['default'] = MdRecordVoiceOver;
module.exports = exports['default'];