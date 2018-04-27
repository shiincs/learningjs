console.log('main.js loaded');

$(document).ready(function() {
    'use strict';
    console.log('main.js_jquery loaded');
    
    //Paper.js를 전역스코프에 설치
    paper.install(window);
    //Paper.js를 캔버스에 연결하고 Paper.js가 그림을 그릴 수 있도록 준비
    paper.setup(document.getElementById('mainCanvas'));

    //TODO(그림을 그리는 코드가 들어갈 자리)
    /* var c = Shape.Circle(200, 200, 100);
    c.fillColor = 'skyblue'; */

    //for문 돌려서 원 여러개 만들기
    /* var c;
    for(var x=25; x<400; x+=50) {
        for(var y=25; y<400; y+=50) {
            c = Shape.Circle(x, y, 20);
            c.fillColor = 'grey';
        }
    } */

    //사용자 입력(비동기적 이벤트)에 따라 원 그리기
    var tool = new Tool();  //tool 객체 생성
    console.log('tool object created');

    //원을 만들고 원 안에 텍스트 넣기
    var b = Shape.Circle(200, 200, 80); //Circle(x좌표, y좌표, 반지름) 좌표단위 : px
    b.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'Hello World';

    console.log('textCircle Created');

    //사용자 입력에 따른 원 생성
    //tool 객체에 onMouseDown 이벤트 핸들러 연결 후 event를 파라미터로 받는 function 호출
    tool.onMouseDown = function(event) {    
        // var c = Shape.Circle(event.point.x, event.point.y, 20);  event.point로 event가 발생하는 위치의 point 좌표를 받아온다.
        console.log('tool function used');

        var c = Shape.Circle(event.point, 20);  //x, y 좌표를 한번에 받는다.
        c.fillColor = 'black';
    };

    //Paper.js가 실제로 화면에 그림을 그려라
    paper.view.draw();
});