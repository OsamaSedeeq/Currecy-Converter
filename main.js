// https://v6.exchangerate-api.com/v6/c75bc829003b352ba9b818de/latest/USD

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  converterApi();
});
async function converterApi() {
  const amount = document.querySelector(".amount").value;
  const fromValue = document.querySelector("select.from").value;
  const toValue = document.querySelector("select.to").value;
  const resultDiv = document.querySelector(".result");
  if (!amount) {
    resultDiv.innerHTML = `please fill all fields`;
    return;
  }
  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/c75bc829003b352ba9b818de/latest/${fromValue}`
    );
    const result = await response.json();
    if (result.result === "success") {
      const rate = result.conversion_rates[toValue];
      const value = (amount * rate).toFixed(2);
      resultDiv.innerHTML = `${amount} ${fromValue} = ${value} ${toValue}`;
      console.log(value);
    } else {
      resultDiv.innerHTML = `something went wrong`;
    }
  } catch (error) {
    resultDiv.innerHTML = `something went wrong`;
  }
}
