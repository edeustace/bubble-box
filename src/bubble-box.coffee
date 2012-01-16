window.com = ( window.com || {} )
com.ee = (com.ee || {})
com.ee.ui = (com.ee.ui || {})


class @com.ee.ui.BubbleBox
  constructor: (@canvas, options) -> 
    console.log "constructor: #{@canvas}, #{options}"
    @initConfig options
    context = @canvas.getContext("2d")
    @drawBubble context, 0, 0, @canvas.width, @canvas.height, @options.cornerRadius
  
  initConfig: (options) ->
    
    @options = 
      bg: "#ffffff"
      borderColor: "#99ff99"
      borderThickness: 3
      cornerRadius: 20
      arrowHeight: 25
      arrowWidth: 50

    $.extend @options, options
    null
 
 
  drawBubble: (ctx, x, y, w, h, r)->

    bh = h - @options.arrowHeight
    aw = Math.floor( @options.arrowWidth / 2 )
    halfW = Math.floor( w / 2 )

    bNudge =  @options.borderThickness

    _pn = (val) ->
      val + bNudge
    
    _mn = (val) ->
      val - bNudge

    ctx.strokeStyle = @options.borderColor
    ctx.fillStyle = @options.bg
    ctx.lineWidth = @options.borderThickness    
    ctx.beginPath()
    ctx.moveTo _pn(x + r), _pn(y) 

    #top-line
    ctx.lineTo _mn(x + w - r), _pn(y)

    #top-right
    ctx.quadraticCurveTo _mn(x + w), _pn(y) , _mn(x + w), _pn(y + r)

    #right-line
    ctx.lineTo _mn(x + w), _mn(y + bh - r)
    
    #bottom-right
    ctx.quadraticCurveTo _mn(x + w), _mn(y + bh), _mn(x + w - r), _mn(y + bh)

    #bottom-line
    ctx.lineTo _pn(x + halfW + aw), _mn(y + bh)
    ctx.lineTo _pn(x + halfW), _mn(y + h)
    ctx.lineTo _pn(x + halfW - aw), _mn(y + bh)
    ctx.lineTo _pn(x + r), _mn(y + bh)

    #bottom-left
    ctx.quadraticCurveTo _pn(x), _mn(y + bh), _pn(x), _mn(y + bh - r)


    ctx.lineTo _pn(x), _pn(y + r)
    
    #top-left
    ctx.quadraticCurveTo _pn(x), _pn(y), _pn(x + r), _pn(y)
    
    ctx.closePath()
    ctx.stroke()
    ctx.fill()
    null          
