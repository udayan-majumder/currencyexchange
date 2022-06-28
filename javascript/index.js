let first_option = document.getElementsByClassName("first-option");
let option_body = document.getElementById("currency-take-first");
let second_option = document.getElementsByClassName("second-option");
let option_body_next = document.getElementById("currency-take-second");
let first_input = document.getElementById("first-currency");
let second_input = document.getElementById("second-currency");
let option;
let fetch_value_first;
let fetch_value_second;
const fetchData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
   

  return data;
};

async function setOption() {
  
  let final_data = await fetchData(
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
  );
  let currency_data = await fetchData(
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json"
  );
  //for adding option in dropdown
  option = currency_data.usd;
  let final_option = Object.keys(final_data);

  for (let i = 0; i < final_option.length; i++) {
    first_option[i].textContent = final_data[final_option[i]];
    let new_option = document.createElement("option");
    option_body.appendChild(new_option);
    new_option.classList.add("first-option");
    first_option[i].value = final_option[i];
    second_option[i].textContent = final_data[final_option[i]];
    let new_option_next = document.createElement("option");
    option_body_next.appendChild(new_option_next);
    new_option_next.classList.add("second-option");
    second_option[i].value = final_option[i];
  }
 
}
 function optionChangeFirst() {
   const input_val= first_input.value;
   const option_val_from = option[option_body.value];
   const option_val_to = option[option_body_next.value];
   second_input.value = ((option_val_to / option_val_from) * input_val).toFixed(
     2
   );

   
 }
 function optionChangeSecond(){

       const input_val = second_input.value;
       const option_val_from = option[option_body_next.value];
       const option_val_to = option[option_body.value];
       first_input.value = ((option_val_to / option_val_from) * input_val).toFixed(2);
 }

// 1 usd to inr is 78 rup 
// 1 usd to euro is 0.94 euro
//user wants 5 euro to inr
//user wants 500 inr to euro
setOption();
