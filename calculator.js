(function () {
    
    var app = angular.module('calc', []);
    app.controller('CalcCtrl', ['$scope', function ($scope) {
        
        $scope.current_lbs = 100;
        $scope.lb_var = 0.5;
        $scope.clim_ops = ["59-68", "69-77", "78-86", "87-95", "95-104"];
        $scope.current_temp = "59-68";
        $scope.act_ops = ["sedentary", "mild", "moderate", "strenuous"];
        $scope.base_act = "sedentary";
        $scope.activity_conversion;
        $scope.temp_conversion;
        
        if ($scope.base_act=="sedentary") { 
                $scope.activity_conversion = 1.0; 
            }   else if ($scope.base_act=="mild") { 
                $scope.activity_conversion = 1.4; 
            }   else if ($scope.base_act=="moderate") { 
                $scope.activity_conversion = 1.8; 
            }   else { 
                $scope.activity_conversion = 2.3; 
            };
            
            if ( $scope.current_temp == "59-68") { 
                $scope.temp_conversion = 1.3; 
            }   else if ($scope.current_temp == "69-77") { 
                $scope.temp_conversion = 1.6; 
            }   else if ($scope.current_temp == "78-86") { 
                $scope.temp_conversion = 2.1; 
            }   else if ($scope.current_temp == "87-95") { 
                $scope.temp_conversion = 2.6; 
            }   else { 
                $scope.temp_conversion = 3.3; 
            };
    
        $scope.calc = function () {            
            $scope.empty = [];
            
            if ($scope.base_act=="sedentary") { 
                this.activity_conversion = 1.0; 
            }   else if ($scope.base_act=="mild") { 
                this.activity_conversion = 1.4; 
            }   else if ($scope.base_act=="moderate") { 
                this.activity_conversion = 1.8; 
            }   else { 
                this.activity_conversion = 2.3; 
            };
            
            if ( $scope.current_temp == "59-68") { 
                this.temp_conversion = 1.3; 
            }   else if ($scope.current_temp == "69-77") { 
                this.temp_conversion = 1.6; 
            }   else if ($scope.current_temp == "78-86") { 
                this.temp_conversion = 2.1; 
            }   else if ($scope.current_temp == "87-95") { 
                this.temp_conversion = 2.6; 
            }   else { 
                this.temp_conversion = 3.3; 
            };
            
            $scope.toOunces = ($scope.current_lbs * this.activity_conversion * this.temp_conversion * $scope.lb_var / 8).toFixed(0);
            
            for(i = 0; i < $scope.toOunces; i++){
                $scope.empty.push("<div></div>")
                document.getElementById("demo").innerHTML = $scope.empty;
            };
        }
    }]);
})();