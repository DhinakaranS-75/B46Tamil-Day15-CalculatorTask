const buttons = document.querySelectorAll('button')
        const result = document.getElementById('result')
        let calculation = []
        let accumulativeCalculation

        function calculate(button) {
            const value = button.textContent

            if (value === "CLEAR") {
                calculation = []
                result.value = ''

            } else if (value === "=") {
                result.value = eval(accumulativeCalculation)

            } else {
                calculation.push(value)
                accumulativeCalculation = calculation.join('')
                result.value = accumulativeCalculation  
            }        
        }

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                calculate(button)
            })
        })

