document.getElementById('expenseForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  var expenseName = document.getElementById('expenseName').value;
  var expenseAmount = document.getElementById('expenseAmount').value;
  
  var expenseItem = document.createElement('div');
  expenseItem.innerHTML = '<strong>' + expenseName + '<strong>' + expenseAmount + '<strong>' + category +  '<strong>'+ date;
  
  document.getElementById('expenseList').appendChild(expenseItem);
  
  document.getElementById('expenseName').value = '';
  document.getElementById('expenseAmount').value = '';
  document.getElementById('category').value = '';
  document.getElementById('date').value ='';
  

});