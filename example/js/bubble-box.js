
  window.com = window.com || {};

  com.ee = com.ee || {};

  com.ee.ui = com.ee.ui || {};

  this.com.ee.ui.BubbleBox = (function() {

    function BubbleBox(canvas, options) {
      var context;
      this.canvas = canvas;
      console.log("constructor: " + this.canvas + ", " + options);
      this.initConfig(options);
      context = this.canvas.getContext("2d");
      this.drawBubble(context, 0, 0, this.canvas.width, this.canvas.height, this.options.cornerRadius);
    }

    BubbleBox.prototype.initConfig = function(options) {
      this.options = {
        bg: "#ffffff",
        borderColor: "#99ff99",
        borderThickness: 3,
        cornerRadius: 20,
        arrowHeight: 25,
        arrowWidth: 50
      };
      $.extend(this.options, options);
      return null;
    };

    BubbleBox.prototype.drawBubble = function(ctx, x, y, w, h, r) {
      var aw, bNudge, bh, halfW, _mn, _pn;
      bh = h - this.options.arrowHeight;
      aw = Math.floor(this.options.arrowWidth / 2);
      halfW = Math.floor(w / 2);
      bNudge = this.options.borderThickness;
      _pn = function(val) {
        return val + bNudge;
      };
      _mn = function(val) {
        return val - bNudge;
      };
      ctx.strokeStyle = this.options.borderColor;
      ctx.fillStyle = this.options.bg;
      ctx.lineWidth = this.options.borderThickness;
      ctx.beginPath();
      ctx.moveTo(_pn(x + r), _pn(y));
      ctx.lineTo(_mn(x + w - r), _pn(y));
      ctx.quadraticCurveTo(_mn(x + w), _pn(y), _mn(x + w), _pn(y + r));
      ctx.lineTo(_mn(x + w), _mn(y + bh - r));
      ctx.quadraticCurveTo(_mn(x + w), _mn(y + bh), _mn(x + w - r), _mn(y + bh));
      ctx.lineTo(_pn(x + halfW + aw), _mn(y + bh));
      ctx.lineTo(_pn(x + halfW), _mn(y + h));
      ctx.lineTo(_pn(x + halfW - aw), _mn(y + bh));
      ctx.lineTo(_pn(x + r), _mn(y + bh));
      ctx.quadraticCurveTo(_pn(x), _mn(y + bh), _pn(x), _mn(y + bh - r));
      ctx.lineTo(_pn(x), _pn(y + r));
      ctx.quadraticCurveTo(_pn(x), _pn(y), _pn(x + r), _pn(y));
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
      return null;
    };

    return BubbleBox;

  })();
