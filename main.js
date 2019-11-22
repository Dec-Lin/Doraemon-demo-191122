!function () {
    let duration = 20
    $('.actions').on('click', 'button', function (e) {
        let $button = $(e.currentTarget)
        let speed = $button.attr('date-speed')
        $button.addClass('active')
            .siblings('.active').removeClass('active')
        switch (speed) {
            case 'slow':
                duration = 50
                break
            case 'normal':
                duration = 20
                break
            case 'fast':
                duration = 1
                break
        }
    })

    function writeCode(code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id
        id = setTimeout(function run() {
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight

            if (n < code.length) {
                id = setTimeout(run, duration)
            } else {
                fn && fn.call()
            }
        }, duration)
    }
    let code = `
   .preview{
        height:100vh;
        background:#93b8ca;
      }
      .head{
        width:516px;
        height:490px;
        border:2px solid black;
        border-radius:47% 47% 45% 45%;
        background:#1E90FF;
        position:relative;
        top:50px;
        left:55px;
       
      }
      /*
       *再画个围巾
       */
      .scarf{
          border:2px solid black;
          width:396px;
          height:60px;
          position:absolute;
          bottom:-1px;
          left:57px;
          background:#FF0000;
          border-radius: 40px 40px;
          z-index:1;
      }
       /*
        *然后画张脸
        */
    .face{
        width:444px;
        height:360px;
        border:2px solid black;
        position:absolute;
        bottom:0;
        left:34px;
        background:white;
        border-radius:47% 47% 45% 45%;
    }
     /*画眼睛*/
    .face .eye{
        width:110px;
        height:134px;
        border:2px solid black;
        border-radius:47% 47% 45% 45%;
        position:absolute;
        background:white;
    }
    /*
     *接下来画左眼
     */
    .face .eye.left{
        top:-60px;
        left:110px;
    }
    /*
     *然后画右眼
     */
    .face .eye.right{
        top:-60px;
        right:110px;
    }
    /*
     *还有眼珠
     */
    .face .eye > .eyeball{
        width:26px;
        height:26px;
        border-radius:50%;
        background:black;
        position:absolute;
        
    }
    /*
     *先画左眼珠
     */
    .face .eye.left > .eyeball{
        top:65px;
        right:10px;
    }
    /*
     *再画右眼珠
     */
    .face .eye.right > .eyeball{
        top:65px;
        left:10px;
    }
    /*
     *画鼻子
     */
    .face .nose{
        width:60px;
        height:60px;
        border:2px solid black;
        border-radius:50%;
        background:red;
        position:absolute;
        top:52px;
        left:190px;
    }
    /*
     *让鼻子发光
     */
    .face .nose .nose-circle{
        width:18px;
        height:18px;
        border:none;
        border-radius:50%;
        background:white;
        position:absolute;
        top:12px;
        right:6px;
        box-shadow: 0px 0px 2px 2px rgba(255, 255, 255, 0.4);
    }
    
    /*
     *黄色的小铃铛
     */
    .bell{
        width:84px;
        height:84px;
        border:2px solid black;
        border-radius:50%;
        background:#FFFF00;
        position:absolute;
        bottom:-40px;
        left:215px;
        z-index:2;
    }
    /*
     *铃铛上的线
     */
    .bell .line:first-child{
        width:80px;
        border-top:2px solid black;
        position:absolute;
        top:26px;
        left:0;
    }
    /*
     *还是铃铛上的线
     */
    .bell .line:nth-child(2){
        width:80px;
        border-top:2px solid black;
        position:absolute;
        top:34px;
        left:0;
    }
    /*
     *依然是铃铛上的线
     */
    .bell .line:nth-child(3){
        width:2px;
        height:34px;
        border-left:2px solid black;
        position:absolute;
        top:46px;
        left:50%;
        margin-left:-1px;
    }
    /*
     *现在是铃铛上的圆
     */
    .bell .circle{
        width:26px;
        height:18px;
        border-radius:50%;
        background:black;
        position:absolute;
        top:40px;
        left:50%;
        margin-left:-13px
    }
    /*
     *到嘴巴了
     */
    .face .mouth{
        height: 216px;
        width: 264px;
        position: absolute;
        top: 50px;
        left: 90px;
        border-bottom: 2px solid #000;
        border-radius: 0 0 45% 45%;
    }
    .face .mouth .mouth-line{
        width:2px;
        height:156px;
        border-left:2px solid black;
        position:absolute;
        top:60px;
        left:50%;
        margin-left:-2px;
    
    }
    /*
     *最后是好几根胡子
     */
    .face .mustache-left > .mustache,
    .face .mustache-right > .mustache{
        width:124px;
        height:2px;
        position:absolute;
    }
    .face .mustache-left > .mustache.a{
        border-top:2px solid black;
        top:114px;
        left:50px;
        transform:rotate(20deg);
    }
    .face .mustache-left > .mustache.b{
        border-top:2px solid black;
        top:154px;
        left:45px; 
    }
    .face .mustache-left > .mustache.c{
        border-top:2px solid black;
        top:196px;
        left:50px;
        transform:rotate(160deg);
    }
    .face .mustache-right > .mustache.d{
        border-top:2px solid black;
        top:196px;
        right:50px;
        transform:rotate(20deg);
    }
    .face .mustache-right > .mustache.e{
        border-top:2px solid black;
        top:154px;
        right:45px; 
    }
    .face .mustache-right > .mustache.f{
        border-top:2px solid black;
        top:114px;
        right:50px;
        transform:rotate(160deg);
    }
    /*
     *OK
     *
     *搞定
     *告辞
     *
     * /
     `
    writeCode(code)

}.call()