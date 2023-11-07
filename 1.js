function redirectToPage() {
    var select = document.getElementById("products");
    var selectedOption = select.options[select.selectedIndex].value;
    
    // 检查所选选项的值，并根据值跳转到不同的页面
    switch (selectedOption) {
        case "商品":
            window.location.href = "商品.html";
            break;
        case "預購":
            window.location.href = "預購.html";
            break;
        case "現貨":
            window.location.href = "現貨.html";
            break;
    }
}