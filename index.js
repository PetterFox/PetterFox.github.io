
// const paymentClicked = () =>{

//     const letter = document.querySelector(".h2letter");
//     const darkbtn = document.querySelector(".darkbtn");    
// }

// paymentClicked();







const darkBtnClicked = function () {
    let darktn = document.querySelector(".darkbtn");

    let alltexts = document.querySelectorAll(".h2letter");
   
    let background = document.getElementById("container");
    let box = document.getElementById("box");
    let isClicked = false;


    darktn.addEventListener("click", function () {
        if (!isClicked) {
            isClicked = true;
            background.style.backgroundColor = "rgb(38, 37, 37)";
            box.style.backgroundColor = "rgb(62, 62, 62)";
            for (let i = 0; i < alltexts.length; i++) {
                alltexts[i].style.color = "white";

            }
        }
        else {
            isClicked = false;
            background.style.backgroundColor = "white";
            box.style.backgroundColor = "whitesmoke";
            for (let i = 0; i < alltexts.length; i++) {
                alltexts[i].style.color = "black";
            }
        }
    });



}

darkBtnClicked();




const operation = function () {

    let usdClicked = false;
    let currency = document.getElementById("currency");
    document.getElementById("usd").onclick = function () {
        currency.innerHTML = "Currency: USD";
        document.getElementById("usd").style.display = "none";
        document.getElementById("ex-rate").style.display = "block";
        usdClicked = true;
    }
    document.getElementById("riel").onclick = function () {
        if (usdClicked) {
            document.getElementById("usd").style.display = "block";
            usdClicked = false;
        }
        currency.innerHTML = "Currency: Riel";
        document.getElementById("ex-rate").style.display = "none";
    }


    let Money = 150000;
    document.getElementById("calculatebtn").onclick = function () {
        let option = document.getElementById("type").value;
        
        let salary = document.getElementById("Salary").value;
        let fringe_benefit = document.getElementById("fringe_benefit").value;
        let children = document.getElementById("Children").value;
        let spouse = document.getElementById("Spouse").value;
        salary = Number(salary);
        fringe_benefit = Number(fringe_benefit);
        children = Number(children);
        spouse = Number(spouse);

        let exception = (children + spouse) * Money;
        let tax_on_fringe_benefit = fringe_benefit * 0.2;
        salary -= exception;

        let tax_on_salary;
        if (option == "Resident") {
            if (salary <= 1300000) {
                tax_rate = 0;
                tax_on_salary = 0;
            }
            else if (salary <= 2000000) {
                tax_rate = 0.05;
                tax_on_salary = (salary * tax_rate) - 65000;
            }
            else if (salary <= 8500000) {
                tax_rate = 0.1;
                tax_on_salary = (salary * tax_rate) - 165000;
            }
            else if (salary <= 12500000) {
                tax_rate = 0.15;
                tax_on_salary = (salary * tax_rate) - 590000;
            }
            else {
                tax_rate = 0.2;
                tax_on_salary = (salary * tax_rate) - 1215000;
            }
        } else {
            tax_rate = 0.2;
            tax_on_salary = tax_rate * salary;
        }

        let total_tax = tax_on_salary + tax_on_fringe_benefit;
        document.getElementById("tax").innerHTML = "Total Tax: " + total_tax;
        document.getElementById("tax-rate").innerHTML = "Tax Rate: " + tax_rate * 100 + "%";
        document.getElementById("tax-on-salary").innerHTML = "Tax on Salary: " + tax_on_salary;
        document.getElementById("tax-on-fringe_benefit").innerHTML = "Tax on Frigne Benefit: " + tax_on_fringe_benefit;
        document.getElementById("net-salary").innerHTML = "Malfunction";

        console.log(option);

    }
}

operation();













