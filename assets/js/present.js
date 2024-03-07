var to = "Quyên iêu ơi";
var gift_url = "https://www.facebook.com/";
("http://www.amazon.com/gp/product/B00X4WHP5E/ref=ods_xs_ae_shurl?tag=googhydr-20&hvadid=74652194316&hvpos=1t1&hvexid=&hvnetw=g&hvrand=7560558939874219351&hvpone=&hvptwo=&hvqmt=b&hvdev=c&ref=pd_sl_2vatdqwe3p_b");
var gift_image_url = "./assets/img/quyen.jpg";

var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");

function init() {
    var _giftLink, _giftImg;

    if (gift_url) {
        _giftLink = document.createElement("a");
        _giftLink.href = gift_url;
        _giftLink.target = "_blank";
        presentImage.appendChild(_giftLink);
    }

    if (gift_image_url) {
        _giftImg = document.createElement("img");
        _giftImg.src = gift_image_url;
        if (_giftLink) {
            _giftLink.appendChild(_giftImg);
        } else {
            presentImage.appendChild(_giftImg);
        }
    }

    document.getElementById("card").style.opacity = "0";
    document.getElementById("card").style.transform =
        "translateX(-200%) rotate(45deg)";

    // Lắng nghe sự kiện click trên phần tử "present"
    present.addEventListener(
        "click",
        function (e) {
            // Thêm hoặc xoá lớp "open" cho phần tử "present"
            present.classList.toggle("open");

            // Lấy phần tử "card"
            var card = document.getElementById("card");

            // Hiển thị phần tử "card" với hiệu ứng
            card.style.opacity = "1";
            card.style.transform = "translateX(0%) rotate(0deg)";
        },
        false
    );

    nametag.innerText = to;
}

init();
