function calculateLoan(){
   
    var amount = document.getElementById("loanamt").value;
    var intrestrate =document.getElementById("Intrate").value ;
    var months =document.getElementById("Month").value;
    var intrest =  (amount*(intrestrate*.01)/months);
    var payment =((amount/months)+intrest).toFixed(2);
    payment = payment.toString();
    document.getElementById('payment').innerHTML = "Monthly Payment ="+payment


}