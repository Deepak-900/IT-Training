document.addEventListener("DOMContentLoaded", function(){
   
    

    // Check ODD or EVEN
    document.getElementById("evenOddForm").addEventListener("submit", function(e){
        e.preventDefault();

        const input = document.getElementById("numberInput");
        const result = document.getElementById("result");

        const number = parseInt(input.value);

         if (isNaN(number)) {
            result.textContent = "Please enter a valid number.";
            result.style.color = "red";
            } else {
            result.textContent = (number % 2 === 0) ? "Even" : "Odd";
            result.style.color = "green";
            }
    })


    // Check Leap Year
    document.getElementById("leapYearForm").addEventListener("submit", function(e){
        e.preventDefault();

        const leapYear = document.getElementById("leapYearInput");
        const leapYearResult = document.getElementById("leapYearResult");

        const leapYearNumber = parseInt(leapYear.value);

        if(isNaN(leapYearNumber) || leapYearNumber <= 0){
            leapYearResult.textContent = "Please enter a valid number.";
            leapYearResult.style.color = "red"
        }
        else{
            const isLeap = (leapYearNumber % 4 === 0 && leapYearNumber % 100 !== 0) || (leapYearNumber % 400 === 0);
             leapYearResult.textContent = isLeap ? `${leapYearNumber} is a Leap Year` : `${leapYearNumber} is Not a Leap Year`;
             leapYearResult.style.color = isLeap ? "green" : "orange"
        }
    })
    
    //Check equilateral, isosceles or scalene traingle

    document.getElementById("triangleForm").addEventListener("submit", function(e){
        e.preventDefault();

        const valueX = document.getElementById("xInput")
        const valueY = document.getElementById("yInput")
        const valueZ = document.getElementById("zInput")

        const triangleResultBox = document.getElementById("traingleResult")

        const x = parseInt(valueX.value)
        const y = parseInt(valueY.value)
        const z = parseInt(valueZ.value) 

         if(isNaN(x) || isNaN(y) || isNaN(z) || x <= 0 || y <= 0 || z <=0){
            triangleResultBox.textContent = "Please enter a valid number.";
            triangleResultBox.style.color = "red"
        }
        else{
            if(x == y && y == z){
                triangleResultBox.textContent = `Equilateral Triangle (all sides ${x})`
                triangleResultBox.style.color = "green"
            } else if(x == y || y == z || z == x){
                triangleResultBox.textContent = `Isosceles Triangle (Sides: ${x}, ${y}, ${z})`
                triangleResultBox.style.color = "orange"
            }
            else{
                triangleResultBox.textContent = `Scalene Triangle (Sides: ${x}, ${y}, ${z} )`;
                triangleResultBox.style.color = "blue"
            }
        }
    })

    // Month in Number   

    document.getElementById("monthInNumberForm").addEventListener("submit", function(e){
        e.preventDefault();

        const monthInNumberInput = document.getElementById("monthInNumberInput");
        
        const monthInNumberResult = document.getElementById("monthInNumberResult");

        const monthInNumberValue = parseInt(monthInNumberInput.value);

        if(monthInNumberValue < 1 || monthInNumberInput > 12){
            monthInNumberResult.textContent = `Invalid Input ${monthInNumberValue}. <br> Enter between 1-12.`
            monthInNumberValue.style.color = "red"
        } else {
            if(monthInNumberValue == 1 ||
                monthInNumberValue == 3 ||
                monthInNumberValue == 5 ||
                monthInNumberValue == 7 ||
                monthInNumberValue == 8 ||
                monthInNumberValue == 10 ||
                monthInNumberValue == 12
            ){
                monthInNumberResult.textContent = `Month: ${monthInNumberValue} has 31 days.`
                monthInNumberResult.style.color = "green"
            }
            else if( monthInNumberValue == 4 || monthInNumberValue == 6 || monthInNumberValue == 9 || monthInNumberValue == 11){
                monthInNumberResult.textContent = `Month: ${monthInNumberValue} has 30 days.`
                monthInNumberResult.style.color = "yellow"
            }
            else{
                monthInNumberResult.textContent = `Month: ${monthInNumberValue} has 28/29 days.`
                monthInNumberResult.style.color = "purple"
            }
        }
    })


    // Day according to the user given number 
    document.getElementById("dayInNumberForm").addEventListener("submit", function(e){
        e.preventDefault();


        const dayInNumberInput = document.getElementById("dayInNumberInput");

        const dayInNumberResult = document.getElementById("dayInNumberResult");

        const dayInNumberValue = parseInt(dayInNumberInput.value)

        if(dayInNumberValue < 1 || dayInNumberValue > 7){
            dayInNumberResult.textContent = `Please enter a valid number between 1-7.`
            dayInNumberResult.style.color = "red"
        }
        else{
            if(dayInNumberValue == 1){
                dayInNumberResult.textContent = `Sunday`
                dayInNumberResult.style.color = "green"
            } else if (dayInNumberValue == 2){
                dayInNumberResult.textContent = `Monday`
                dayInNumberResult.style.color = "green"
            }else if(dayInNumberValue == 3){
                dayInNumberResult.textContent = `Tuesday`
                dayInNumberResult.style.color = "green"
            } else if(dayInNumberValue == 4){
                dayInNumberResult.textContent = `Wednesday`
                dayInNumberResult.style.color = "green"
            } else if(dayInNumberValue == 5){
                dayInNumberResult.textContent = `Thursday`
                dayInNumberResult.style.color = "green"
            } else if(dayInNumberValue == 6){
                dayInNumberResult.textContent = `Friday`
                dayInNumberResult.style.color = "green"
            } else{
                dayInNumberResult.textContent = `Saturday`
                dayInNumberResult.style.color = "green"
            }
        }
    })


});