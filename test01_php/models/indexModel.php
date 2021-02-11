<?php
// include_once 'php-db.php';
require_once __DIR__ . '/../config/NodeMongoConnect.php';


class IndexModel
{
    public $db;

    function __construct()
    {
        $conn = new database;
        $this->db = $conn->dbname;
    }

    function getUser($params = array())
    {
        $param = $params;
        $data = $this->sendCurl('/users', $param, 'GET');
        return $data;
    }

    function getProduct($params = array())
    {
        $param = $params;
        $data = $this->sendCurl('/products', $param, 'GET');
        return $data;
    }

    function getOrder($params = array())
    {
        $param = $params;
        $data = $this->sendCurl('/orders', $param, 'GET');
        return $data;
    }
    
    function createOrder($params = array())
    {
        $param = $params;
        $data = $this->sendCurl('/orders', $param, 'POST');
        return $data;
    }

    function sendCurl($path = '', $jsonData, $method)
    {
        $ch = curl_init($this->db . $path);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);
        $query = http_build_query(['data' => json_encode($jsonData)]);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $query);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($ch);
        curl_close($ch);
        return json_decode($response);
    }
}
