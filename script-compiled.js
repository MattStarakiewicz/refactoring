"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stopwatch = function (_React$Component) {
  _inherits(Stopwatch, _React$Component);

  function Stopwatch() {
    _classCallCheck(this, Stopwatch);

    var _this = _possibleConstructorReturn(this, (Stopwatch.__proto__ || Object.getPrototypeOf(Stopwatch)).call(this));

    _this.state = {
      timerOn: false,
      timerStart: 0,
      timerTime: 0
    };
    return _this;
  }

  _createClass(Stopwatch, [{
    key: "startTimer",
    value: function startTimer() {
      var _this2 = this;

      this.setState({
        timerOn: true,
        timerTime: this.state.timerTime,
        timerStart: Date.now() - this.state.timerTime
      });
      this.timer = setInterval(function () {
        _this2.setState({
          timerTime: Date.now() - _this2.state.timerStart
        });
      }, 10);
    }
  }, {
    key: "stopTimer",
    value: function stopTimer() {
      this.setState({ timerOn: false });
      clearInterval(this.timer);
    }
  }, {
    key: "render",
    value: function render() {
      var timerTime = this.state.timerTime;

      var miliseconds = ("0" + Math.floor(timerTime / 10) % 100).slice(-2);
      var seconds = ("0" + Math.floor(timerTime / 1000) % 60).slice(-2);
      var minutes = ("0" + Math.floor(timerTime / 60000) % 60).slice(-2);

      return React.createElement(
        "div",
        { className: 'timer' },
        React.createElement(
          "div",
          { className: 'stopwatch-title' },
          "React Stopwatch"
        ),
        React.createElement(
          "div",
          { className: 'stopwatch' },
          minutes,
          " : ",
          seconds,
          " : ",
          miliseconds
        ),
        React.createElement(
          "nav",
          { className: 'controls' },
          React.createElement(
            "a",
            { href: '#', className: 'button', onClick: this.startTimer.bind(this) },
            "Start "
          ),
          React.createElement(
            "a",
            { href: '#', className: 'button', onClick: this.stopTimer.bind(this) },
            "Stop "
          )
        )
      );
    }
  }]);

  return Stopwatch;
}(React.Component);

ReactDOM.render(React.createElement(Stopwatch, null), document.getElementById('app'));
