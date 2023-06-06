function selectOptions(selectSize) {
  let pizzaOptions = selectSize.options[selectSize.selectedIndex];
  let pizzaValue = pizzaOptions.value;
  console.log(pizzaValue);

  if (pizzaValue == "small") {
    console.log("Pizza média");
  } else if (pizzaValue == "medium") {
    console.log("Pizza grande");
  } else if (pizzaValue == "big") {
    console.log("Pizza Gigante");
  }
}
