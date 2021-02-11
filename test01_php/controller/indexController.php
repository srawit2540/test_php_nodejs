<?php

require __DIR__ . '/../models/indexModel.php';
$IndexModel = new IndexModel;

if (isset($_POST['method']) && $_POST['method'] == 'getusers') {

    $result = array();
    $result['result'] = true;
    $result['message'] = '';

    $param = array();
    $param['userId'] = isset($_POST['userId']) == null ? null : $_POST['userId'];

    $data = $IndexModel->getUser($param);

    $result['data'] = $data;

    echo json_encode($result);
    exit;
}
//
else if (isset($_POST['method']) && $_POST['method'] == 'getproduct') {

    $result = array();
    $result['result'] = true;
    $result['message'] = '';

    $param = array();
    $param['productId'] = isset($_POST['productId']) == null ? null : $_POST['productId'];

    $data = $IndexModel->getProduct($param);

    $result['data'] = $data;

    echo json_encode($result);
    exit;
}
//
else if (isset($_POST['method']) && $_POST['method'] == 'getorder') {

    $result = array();
    $result['result'] = true;
    $result['message'] = '';

    $param = array();
    $param['orderId'] = isset($_POST['orderId']) == null ? null : $_POST['orderId'];

    $data = $IndexModel->getOrder($param);
    $result['data'] = $data;

    $res_data = array();
    foreach ($data as $key => $value) {
        $arr_data = array();
        $arr_data['orderNumber'] = !isset($value->orderNumber) ? "" : $value->orderNumber;
        $arr_data['orderDate'] = !isset($value->orderDate) ? "" : $value->orderDate;
        $arr_data['productCode'] = !isset($value->productCode) ? "" : $value->productCode;
        $arr_data['userCode'] = !isset($value->userCode) ? "" : $value->userCode;
        $arr_data['address'] = !isset($value->address) ? "" : $value->address;

        array_push($res_data, $arr_data);
    }
    $result['data'] = $res_data;


    echo json_encode($result);
    exit;
}
//
else if (isset($_POST['method']) && $_POST['method'] == 'createorder') {

    $result = array();
    $result['result'] = true;
    $result['message'] = '';

    $params = array();

    $params['orderNumber'] = date("Ymdhis");
    $params['orderDate'] = date('Y-m-d');
    $params['productCode'] = !isset($_POST['productCode']) ? "" : $_POST['productCode'];
    $params['userCode'] = !isset($_POST['userCode']) ? "" : $_POST['userCode'];
    $params['address'] = 'uion_' . rand(1,200);

    $data = $IndexModel->createOrder($params);

    $result['data'] = $data;

    echo json_encode($result);
    exit;
}