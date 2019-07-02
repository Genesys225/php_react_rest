<?php 
class Countries  
{
    private $conn;
    private $table = 'apps_countries';
    public function __construct($db){
        $this->conn = $db;
    }
    public function read(){
        $sql = 'SELECT * FROM ' . $this->table;
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        return $stmt;
    }
}

require_once('DB.php');
?>