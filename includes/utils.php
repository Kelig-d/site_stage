<?php
function escape(string $data) : string {
    return htmlentities($data, ENT_QUOTES, 'UTF-8');
}
?>