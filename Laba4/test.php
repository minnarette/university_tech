<div>
    <form action="" method="post">
        <label>Введите свое имя</label>
        <input type="textbox" name="firstName" required>
        <input type="submit" name="submit">
    </form>
    <a href="./alina.php">click here</a>
    <a href="./song.php">your song</a>
</div>
<?php

if ($_POST['submit']) {
    $Aname = (string)$_POST['firstName'];

    setcookie("TestCookie", $Aname);
}

// if (isset($_COOKIE['cookie'])) {
//     foreach ($_COOKIE['cookie'] as $name => $value) {
//         $name = htmlspecialchars($name);
//         $value = htmlspecialchars($value);
//         echo "$name : $value <br />\n";
//     }
// }
?>