<?php
require 'controller/indexController.php';

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>

    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <link href="https://cdn.datatables.net/1.10.23/css/jquery.dataTables.min.css" rel="stylesheet">
    <script src="https://cdn.datatables.net/1.10.23/js/jquery.dataTables.min.js"></script>

    <script src="assets\js\index.js?v=<?php echo time(); ?>"></script>
</head>

<body>

    <div class="container" style="margin-top: 50px;">

        <div class="mb-3">
            <label class="form-label">User list</label>
            <select id="select-user" class="form-control">
                <option value="">-- please select user --</option>
            </select>
        </div>

        <div class="mb-3">
            <label class="form-label">Product list</label>
            <select id="select-product" class="form-control">
                <option value="">-- please select user --</option>
            </select>
        </div>

        <div class="mb-3" style="text-align: right;">
            <button type="button" class="btn btn-success" onclick="createOrder();">Submit</button>
        </div>

        <div class="mb-3">
            <table id="table-order" class="table table-striped" style="text-align: center; width:100%">
                <thead>
                    <tr>
                        <th>orerNumber</th>
                        <th>orderDate</th>
                        <th>productCode</th>
                        <th>userCode</th>
                        <th>adress</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>

    </div>

</body>

</html>