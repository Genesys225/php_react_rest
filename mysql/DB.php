<?php 
    class DB {
        private $servername = "localhost:3307";
        private $username = "root";
        private $password = "123456";
        private $dbname = "countries";
        private $conn;
        
        // Create connection
        public function connect(){
            $this->conn = null;
            try {
                $this->conn = new PDO('mysql:host=' . $this->servername . ";dbname=" . $this->dbname,
                $this->username, $this->password);
                $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch (PDOException $e) {
                echo "Connection failed: ". $e->getMessage();
            }

            return $this->conn;
        }
    }

?>