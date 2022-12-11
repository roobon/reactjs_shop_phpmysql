<?php
include('db_connect.php');

$sql = "SELECT * FROM products";
$result = mysqli_query($db_conn, $sql);

while ($row = mysqli_fetch_assoc($result)) {
    $products['id'] = $row['id'];
    $products['title'] = $row['title'];
    $products['author'] = $row['author'];
    $products['price'] = $row['price'];
    $products['img'] = $row['img'];
    $products['amount'] = $row['amount'];

    $myproducts['books'][] = $products;
}

echo json_encode(['success' => "Yes", 'prods' => $myproducts]);
