$(document).ready(function(){
    /* 이미지 슬라이드 */
    $("#main").hover(function(){ //진입시
        $(this).addClass("hover");
    }, function(){
        $(this).removeClass("hover");
    })


    $("#main .slider ul li").eq(1).addClass("active");
    setInterval(() => {
         var $hover = $("#main").hasClass("hover");

         if($hover){
            //아무것도 하지마
         }else{
            var $first = $("#main ul li").first();
            $("#main ul").stop().animate({"margin-left":"-200%"}, 500, function(){
                $("#main ul").append($first).css("margin-left", "-100%");
                $("#main .slider ul li").removeClass("active");
                $("#main .slider ul li").eq(1).addClass("active");
            });
         }
    }, 3000);

    //#4. 화살표 기능 부여 
    $("#main .slider .next").click(function(){
        var $first = $("#main ul li").first();
            $("#main ul").stop().animate({"margin-left":"-200%"}, 500, function(){
                $("#main ul").append($first).css("margin-left", "-100%");
                $("#main .slider ul li").removeClass("active");
                $("#main .slider ul li").eq(1).addClass("active");
                
            });
            return false;
    });

    $("#main .slider .prev").click(function(){
        var $last = $("#main ul li").last();
            $("#main ul").stop().animate({"margin-left":"0%"}, 500, function(){
                $("#main ul").prepend($last).css("margin-left", "-100%");
                $("#main .slider ul li").removeClass("active");
                $("#main .slider ul li").eq(1).addClass("active");
            });
            return false;
    });

    $(" .menu > ul > li").hover(function(){
        $(this).find("ul").stop().slideDown();
    }, function(){
        $(this).find("ul").stop().slideUp();
    });

    let product_array = [
        ["product_01.png" ,"자연에서 온 앰플", "네츄럴 앰플" , "18,200"],
        ["product_02.png" ,"수분촉촉 미스트 팡!", "캐롯 카밍워터 앰플" , "18,200"],
        ["product_03.png" ,"고급스러운 에센셜 화사하게", "고탄력 미스트 에센셜" , "18,200"],
        ["product_04.png" ,"수분 100% 촉촉", "순백의 미 워터스킨" , "18,200"]
    ];

    let product_case = ``;
    
    for(v of product_array){
            product_case += `  
            <div class="content">
            <div class="img_box" style="background-image: url(./img/${v[0]});">
            </div>
            <div class="txt_box">
                <span>${v[1]}</span>
                <h2>${v[2]}</h2>
                <p>${v[3]}<span>원</span></p>
            </div>
        </div>`;
        
    }
    let contents = document.querySelector('#cont1 .contents');
    contents.innerHTML = product_case;

    let product_insta = [
        ["product_08.png"],
        ["product_09.png"],
        ["product_10.png"],
        ["product_11.png"],
        ["product_12.png"],
        ["product_13.png"],
        ["product_14.png"],
        ["product_15.png"],
    ];

    let insta_case = ``;

    for(v of product_insta){
        insta_case += `
        <div class="img_box" style="background-image: url(./img/${v[0]});"></div>                
        `
    };

    let contents_insta = document.querySelector("#cont6 .contents");
    contents_insta.innerHTML = insta_case;
});

