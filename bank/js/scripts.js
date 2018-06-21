function BankAccount(name, amount){
  this.name = name;
  this.balance = amount;
};

BankAccount.prototype.withDraw = function(amount){
  this.balance -= amount;
};

BankAccount.prototype.deposit = function(amount){
  this.balance += amount;
};


function formatUSD(tempString)
{
  return tempString.toLocaleString('en-US',{style: 'currency', currency: 'USD'});
}

var clearFields = function(){
  $("#name").val("")
  $("#initialBalance").val("")
  $("#deposit").val("")
  $("#withDraw").val("")
};



$(function(){
  $("#createAccount").click(function(){
    var inputtedName = $("#name").val();
    var inputtedAmount = parseInt($("#initialBalance").val());
    debugger;
    var error = function(){
      if(inputtedName === "" || inputtedAmount === NaN){
        alert("Invalid entry")
      }
    }
    error();

     onlyBankAccount = new BankAccount(inputtedName, inputtedAmount);

     $(".balance").text(formatUSD(onlyBankAccount.balance));

     console.log(onlyBankAccount.name)
     $(".name").append(onlyBankAccount.name + "<b>"+" be STACKING PAPER "+"</b>" );
     clearFields();
  });


  $("#addDeposit").click(function(){
    var inputtedDeposit = parseInt($("#deposit").val());
    onlyBankAccount.deposit(inputtedDeposit);
    $(".balance").text(formatUSD(onlyBankAccount.balance))
     clearFields();
  });

  $("#subtractDeposit").click(function(){
    var inputtedWithdraw = parseInt($("#withDraw").val());
    onlyBankAccount.withDraw(inputtedWithdraw);
    $(".balance").text(formatUSD(onlyBankAccount.balance))
     clearFields();
  });
});
