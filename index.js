const principal = document.querySelector("#Loan_Amount");
const interest = document.querySelector("#Interest_Rate");
const tenure = document.querySelector("#Months_to_pay");
const calcul = document.querySelector("#Calculate");
const emi = document.querySelector("#result");
const reset = document.querySelector("#Reset");

function CalculateEmi() {
  if (principal.value === "" || interest.value === "" || tenure === "") {
    alert("Please Enter All The Values");
    return;
  } else {
    const p = principal.value;
    const r = interest.value / 1200;
    const n = tenure.value;
    const emivalue = (p * r * (1 + r) ** n) / ((1 + r) ** n - 1);
    emi.textContent = emivalue.toFixed(2);
  }
}

function resetbtn() {
  emi.textContent = "";
}

calcul.addEventListener("click", CalculateEmi);
reset.addEventListener("click", resetbtn());
