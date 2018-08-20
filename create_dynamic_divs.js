
var _loop_1 = function (i) {
    div = document.createElement("div");
    div.className = "soso";
    div.onclick = function () {
        document.getElementsByClassName("soso")[i].style.backgroundColor = "green";
    };
    document.body.appendChild(div);
};
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
