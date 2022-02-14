if (document.URL.endsWith("/")) {
    const makeNumberString = (a) => {
        if (a >= 1_000_000_000) {
            return (a / 1_000_000_000).toFixed(1).toString() + "B+";
        } else if (a >= 1_000_000) {
            return (a / 1_000_000).toFixed(1).toString() + "M+";
        } else if (a >= 1_000) {
            let calculate = a / 1_000;
            let ret_array = calculate.toFixed(1).toString() + "K+";
            if (a > 100) {
                ret_array = Math.trunc(calculate).toString() + "K+";
            }
            return ret_array;
        } else {
            return Math.trunc(a).toString() + "";
        }
    };



    function updateNumber1(increment) {
        initNum1 += increment;
        let num_string = makeNumberString(initNum1);
        // console.log("1",num_string);
        first_E.textContent = num_string;
        if (initNum1 >= final_value1) {
            clearInterval(intervalID1);
        }
    }



    function updateNumber2(increment) {
        initNum2 += increment;
        let num_string = makeNumberString(initNum2);
        // console.log("2",num_string);
        second_E.textContent = num_string;
        if (initNum2 >= final_value2) {
            clearInterval(intervalID2);
        }
    }



    function updateNumber3(increment) {
        initNum3 += increment;
        let num_string = makeNumberString(initNum3);
        // console.log("3",num_string);
        third_E.textContent = num_string;
        if (initNum3 >= final_value3) {
            clearInterval(intervalID3);
        }
    }


    const first_E = document.getElementById("impact1");
    const second_E = document.getElementById("impact2");
    const third_E = document.getElementById("impact3");

    let final_value1 = parseInt(first_E.innerText);
    let final_value2 = parseInt(second_E.innerText);
    let final_value3 = parseInt(third_E.innerText);

    let initNum1 = 0;
    let initNum2 = 0;
    let initNum3 = 0;

    first_E.innerText = "000";
    second_E.innerText = "000";
    third_E.innerText = "000";

    const weAreHeigh = document.querySelector("#who_we_are").scrollHeight;
    const impactHeigh = document.querySelector("#ourImpact").scrollHeight;

    let calledOnce = false;
    let intervalID1;
    let intervalID2;
    let intervalID3;
    
    window.addEventListener("scroll", (e) => {
        e.preventDefault();
        if (!calledOnce) {
            if (window.scrollY >= weAreHeigh + impactHeigh - 500) {
                intervalID1 = setInterval(() => {
                    updateNumber1(final_value1 / 200);
                }, 16.6666666666666666);
                intervalID2 = setInterval(() => {
                    updateNumber2(final_value2 / 200);
                }, 16.6666666666666666);
                intervalID3 = setInterval(() => {
                    updateNumber3(final_value3 / 200);
                }, 16.6666666666666666);
                calledOnce = true;
            }
        }
    });
}