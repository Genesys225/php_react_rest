<?php 
class City  
{
    private $conn;
    private $table = 'city';
    public function __construct($db){
        $this->conn = $db;
    }
    private function runQuery(String $query)
    {
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
    public function getAll(){
        $result = $this->runQuery('SELECT * FROM ' . $this->table);
        return $result;
    }
    public function getById(String $id)
    {
        $result = $this->runQuery("SELECT * FROM $this->table WHERE Code = $id "); 
        return $result;
    }
}

require_once($_SERVER["DOCUMENT_ROOT"] . '/mysql/DB.php');
?>