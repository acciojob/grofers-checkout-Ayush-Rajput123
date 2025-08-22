const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const Prices = document.getElementsByClassName("price");
const total=document.getElementById("total")
const getSum = () => {
  let totalsum=0
	for(let val of Prices){
	  totalsum +=parseFloat(val.textContent) || 0
  }
	total.textContent=totalsum
	return totalsum
};
getSumBtn.addEventListener("click", getSum);

