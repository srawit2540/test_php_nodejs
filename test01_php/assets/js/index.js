var table;
$(document).ready(function () {
    getuser();
    getproduct();
    getTableOrder();
});

function reload() {
    table.ajax.reload();
}

function getuser() {
    $.ajax({
        "url": "./controller/indexController.php",
        "type": "POST",
        "data": {
            method: 'getusers'
        },
        "dataType": "JSON",
        success: function (res) {
            var html_option = '';
            $.each(res.data, function (index, item) {
                html_option += '<option value="' + item.userCode + '">' + item.firstName + '</option>';
                // console.log(item);
            });
            $("#select-user").append(html_option);
        }
    });
}

function getproduct() {
    $.ajax({
        "url": "./controller/indexController.php",
        "type": "POST",
        "data": {
            method: "getproduct"
        },
        "dataType": "JSON",
        success: function (res) {
            var html_option = '';
            $.each(res.data, function (index, item) {
                html_option += '<option value="' + item.productCode + '">' + item.productName + '</option>';
                // console.log(item);
            });
            $("#select-product").append(html_option);
        }
    });
}

function getTableOrder() {

    $.ajax({
        "url": "./controller/indexController.php",
        "type": "POST",
        "data": {
            method: "getorder"
        },
        "dataType": "JSON",
        success: function (res) {
            var html_table = '';
            $.each(res.data, function (index, item) {
                html_table += '<tr>';
                html_table += '<td>' + item.orderNumber + '</td>';
                html_table += '<td>' + item.orderDate + '</td>';
                html_table += '<td>' + item.productCode + '</td>';
                html_table += '<td>' + item.userCode + '</td>';
                html_table += '<td>' + item.address + '</td>';
                html_table += '</tr>';
            });
            $("#table-order").append(html_table);
        }
    });
}

function createOrder() {
    var userCode = $("#select-user").val();
    var productCode = $("#select-product").val();

    $.ajax({
        "url": "./controller/indexController.php",
        "type": "POST",
        "data": {
            method: "createorder",
            userCode: userCode,
            productCode: productCode
        },
        "dataType": "JSON",
        success: function (res) {
            // console.log(res)
            // getTableOrder();
            // window.reload();    
            location.reload();
        }
    });
}