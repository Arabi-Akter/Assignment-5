const allBtn= document.getElementsByClassName("all-btn");
for(const btn of allBtn){
    btn.addEventListener("click",function(event){
        
        
        event.target.style.backgroundColor="Green";
        event.target.style.color="white";

        const seatName= event.target.parentNode.children[0].innerText;
        console.log(seatName);
        const className= event.target.parentNode.children[1].innerText;
        console.log(className);
        const price= event.target.parentNode.children[2].innerText;
        console.log(price);
        const selectedContainer = document.getElementById("table-Body-Conatiner");

        event.target.setAttribute("disabled", false);

        if (getValueById("seat-count") + 1 > 4) 
        {
            alert("You already Select 4 seat");
            return;
        }

        const tr = document.createElement("tr");
        // tr.classList.add("selected-players");
       const td1 = document.createElement('td');
       const td2 = document.createElement('td');
       const td3 = document.createElement('td');
       td1.innerText=seatName;
       td2.innerText=className;
       td3.innerText=price;
       tr.appendChild(td1);
       tr.appendChild(td2);
       tr.appendChild(td3);
       selectedContainer.appendChild(tr);

       updateTotalCost(price);
       updateGrandTotal();
       updateLefSeat();

        seatCount(); 
    })
}




function updateTotalCost(price) {
    const previousTotal = document.getElementById("total-price").innerText;
    const convertedTotal = parseInt(previousTotal);
    const convertedPrice = parseInt(price);
    const sum = convertedTotal + convertedPrice;
    document.getElementById("total-price").innerText = sum;
  }


// discount price 
function updateGrandTotal(control) {
    const previousTotal = document.getElementById("total-price").innerText;
    const convertedTotal = parseInt(previousTotal);
    const couponCode = document.getElementById("coupon-code").value;
    if (control) {
      if (couponCode == "Couple 20") {
        const discount = convertedTotal * 0.2;
        document.getElementById("grand-total").innerText =
          convertedTotal - discount;
      }
      else if(couponCode == "NEW15"){
        const discount = convertedTotal * 0.15;
        document.getElementById("grand-total").innerText =
          convertedTotal - discount;

      }
      else {
        alert("Invalid Coupon Code No Discount");
        return;
      }
    } else {
      document.getElementById("grand-total").innerText = convertedTotal;
    }
  }  



function updateLefSeat() {
  const defaultLeft = document.getElementById("left").innerText;
  const convertDefaultLeft = parseInt(defaultLeft);
  document.getElementById("left").innerText = convertDefaultLeft - 1;
}


function seatCount() {
    const defaultSeatCount = document.getElementById("seat-count").innerText;
  
    const convertDefaultCartCount = parseInt(defaultSeatCount);
    document.getElementById("seat-count").innerText = convertDefaultCartCount + 1;
  }


function getValueById(id) {
    const targetElement = document.getElementById(id).innerText;
    return parseInt(targetElement);
  }




