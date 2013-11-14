function SideCtrl($scope) {
  
  $scope.income = [{description:'Salary (After Taxes)', amount:5000}];
  $scope.expenses = [
    {description:'Rent', amount:1500},
    {description:'Cell Phone', amount:115},
    {description:'Groceries', amount:200},
    {description:'Utilites', amount:250}
  ];
  $scope.debts = [
    {description:'Credit Card', amount:75},
    {description:'Student Loan', amount:300}
  ];
  $scope.savings = [
    {description:'401K', amount:60},
    {description:'Emergency Savings', amount:75}
  ];

  $scope.delete = function(array, idx) {
    $scope[array].splice(idx, 1);
  }

  $scope.add = function() {
    $scope[$scope.arr].push({description:$scope.desc, amount:$scope.amt});
    $scope.desc = ''; $scope.amt = '';
  }

  $scope.sum = function(array) {
    var sum = 0;
    for (idx = 0; idx < $scope[array].length; idx++) {
      sum += $scope[array][idx].amount;
    }
    return sum;
  }

  $scope.sumOutgoing = function() {
    return $scope.sum('expenses') + $scope.sum('savings') + $scope.sum('debts');
  }

  $scope.sumRemaining = function() {
    return $scope.sum('income') - $scope.sumOutgoing();
  }

  $scope.amIBroke = function()  {
    return ($scope.sumRemaining() < 0);
  }

  $scope.clearData = function() {
    $scope.income = [];
    $scope.expenses = [];
    $scope.debts = [];
    $scope.savings = [];
  };
}