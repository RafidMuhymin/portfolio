generator.addEventListener("click", function () {
  pin.value = Math.floor(1000 + Math.random() * 9000);
});

function slice(id, n) {
  id.addEventListener("click", function () {
    match.value = match.value.slice(0, n);
  });
}

match.addEventListener("input", function () {
  if (pin.value === "") {
    alert("Generate the PIN first");
    match.value = match.value.slice(0, -1);
  }
});

function add(n) {
  n.addEventListener("click", function () {
    if (pin.value === "") {
      alert("Generate the PIN first");
    } else if (match.value.length >= 4) {
    } else {
      match.value = match.value + n.innerText;
    }
  });
}

submit.addEventListener("click", function () {
  if (pin.value == "" && match.value == "") {
    alert("Generate and Type the PIN first");
  } else if (pin.value != "" && match.value == "") {
    alert("Type the PIN first");
  } else if (pin.value == match.value) {
    failure.style.display = "none";
    success.style.display = "block";
    pin.value = "";
    match.value = "";
    setTimeout(function () {
      success.style.display = "none";
    }, 3000);
  } else {
    success.style.display = "none";
    failure.style.display = "block";
    setTimeout(function () {
      failure.style.display = "none";
    }, 3000);
    var countDown = parseFloat(count.innerText);
    countDown = countDown - 1;

    if (countDown == 0) {
      submit.disabled = true;
    }

    count.innerText = countDown;
  }
});

add(zero);
add(one);
add(two);
add(three);
add(four);
add(five);
add(six);
add(seven);
add(eight);
add(nine);
slice(delNum, -1);
slice(cancel, 0);
