checkout.addEventListener("click", function() {
    location.reload()
})

function handlePriceCounter(object, event, counter, amount, price, n) {
    object.addEventListener(event, function() {
        if (price === undefined) {
            amount.innerText = 0
            counter.value = 0
        } else if (n === undefined) {
            if (counter.value.length == 0) {
                amount.innerText = 0
                counter.value = 0
            } else {
                amount.innerText = parseInt(counter.value) * price
            }
        } else {
            let count = parseInt(counter.value)
            if (n == -1 && count == 0) {} else {
                count = count + n
                counter.value = count
                let calcPrice = count * price
                amount.innerText = calcPrice
            }
        }

        let phonePrice = parseFloat(document.getElementById('phonePrice').innerText)
        let casePrice = parseFloat(document.getElementById('casePrice').innerText)
        let total = parseFloat(document.getElementById('total').innerText)
        let tax = parseFloat(document.getElementById('tax').innerText)
        let grandTotal = parseFloat(document.getElementById('grandTotal').innerText)

        total = phonePrice + casePrice
        tax = (total / 10)
        grandTotal = total + tax

        document.getElementById('total').innerText = total
        document.getElementById('tax').innerText = tax
        document.getElementById('grandTotal').innerText = grandTotal
    })
}

handlePriceCounter(phoneIncrease, 'click', phoneCounter, phonePrice, 1219, 1)
handlePriceCounter(caseIncrease, 'click', caseCounter, casePrice, 59, 1)
handlePriceCounter(phoneDecrease, 'click', phoneCounter, phonePrice, 1219, -1)
handlePriceCounter(caseDecrease, 'click', caseCounter, casePrice, 59, -1)

handlePriceCounter(phoneCounter, 'input', phoneCounter, phonePrice, 1219)
handlePriceCounter(caseCounter, 'input', caseCounter, casePrice, 59)

handlePriceCounter(removePhone, 'click', phoneCounter, phonePrice)
handlePriceCounter(removeCase, 'click', caseCounter, casePrice)