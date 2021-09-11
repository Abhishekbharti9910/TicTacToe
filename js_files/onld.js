// this js only for starting form page
// do not much but add some edge cases nullify
let onld = (() => {
    let mode = document.querySelectorAll(".humOrAi");
    function selectMode() {
        mode.forEach((select) => {
            let selected = undefined;
            select.addEventListener("click", (e) => {
                selected = e.target.value;
                inactiveIfMulti(selected);
                k = 1;
            })
        });
    }
    function inactiveIfMulti(selected) {
        let inActive = document.querySelector("#diff_In_A");
        let disableness = document.querySelector("#diff");
        if (selected == "ai") {
            inActive.classList.remove("inactive");
            disableness.removeAttribute("disabled")
        }
        else {
            console.log("in multi");
            inActive.classList.add("inactive");
            disableness.setAttribute("disabled", "disabled")
        }
    }
    function checkXorYchoosed() {
        const choose = document.querySelectorAll(".choose");
        let j = -1;
    
        choose.forEach((item) =>{
            item.addEventListener("click",()=> {
                let containerNode = document.querySelector("small");
                containerNode.innerHTML = "";
                j = 1;});
        })
        document.querySelector("#start").addEventListener("click", () => {
            let k = "Please select first symbol X or Y";
            let containerNode = document.querySelector("small");
            console.log(j);
            if (j==1) {
                document.querySelector("#onload").style.display = "none";
            }
            else{
                containerNode.innerHTML = k;
            }
        })
    }
    return { selectMode, checkXorYchoosed}
}
)();
onld.selectMode();
onld.checkXorYchoosed();