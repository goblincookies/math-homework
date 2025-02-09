console.log("math practice!");
document.querySelector("#a-b-c-d").addEventListener("click", GenABCD);
document.querySelector("#a-b-c").addEventListener("click", GenABC);


const problem = ( function () {

    const neg = function() {
        let n = Math.floor( Math.random()*2 ); // 1,0
        n *=2; //2,0
        n -= 1 //1,-1
        console.log("neg: ", n);
        return n;
    }

    const writeHTML = function(equation ) {
        const divProblem = document.createElement("div");
        divProblem.classList.add("problem");
        const divEquation = document.createElement("div");
        divEquation.classList.add("equation");
        divEquation.textContent = equation;
        const divWorkSpace = document.createElement("div");
        const divHalfA = document.createElement("div");
        const divHalfB = document.createElement("div");
        divHalfA.classList.add("half");
        divHalfB.classList.add("half");
        divWorkSpace.classList.add("workspace");
        divWorkSpace.appendChild(divHalfA);
        divWorkSpace.appendChild(divHalfB);
        const divAnswer = document.createElement("div");
        divAnswer.classList.add("answer");
        const divVariable = document.createElement("div");
        divVariable.classList.add("v");
        const spanVar = document.createElement("span");
        spanVar.classList.add("var");
        spanVar.textContent = "x="; //+ answer + " // " + half;


        divVariable.appendChild(spanVar);
        divAnswer.appendChild(divVariable);

        divProblem.appendChild(divEquation);
        divProblem.appendChild(divWorkSpace);
        divProblem.appendChild(divAnswer);

        return divProblem;

    }

    const createABC = function() {
        let eq = "";
        let symbol = "+";
        // which variable will be hidden;
        // randomly selects 0-2; subtracts one on each evaluation
        // wneh v == 0, that number will be X
        let v = Math.floor( Math.random()*3);
        let answer = 0;

        let c = 4 + Math.floor(Math.random()*100);

        let a = Math.floor(Math.random()*c);
        let b = c + neg() * a;

        console.log(c, a,b);

        symbol = "+";
            if (a > c || b > c) {
                console.log("negating: ", a, b);
                symbol = "-";
                if (b > a) { [a, b] = [b, a]; }
            };

        if (Math.floor(Math.random()*2) == 1){
            // A,B=C
            eq = v==0 ? eq + "x" : eq + a;
            eq += symbol;
            v-= 1;
            eq = v==0 ? eq + "x" : eq + b;
            eq += "=";
            v-= 1;
            eq = v==0 ? eq + "x" : eq + c;

        } else {
            // C = A,B
            eq = v==0 ? eq + "x" : eq + c;
            eq += "=";
            v-= 1;
            eq = v==0 ? eq + "x" : eq + a;
            eq += symbol;
            v-= 1;
            eq = v==0 ? eq + "x" : eq + b;
        }

        return writeHTML( eq );

    };

    const createABCD = function () {
        let eq = "";
        let symbol = "+";
        // which variable will be hidden;
        // randomly selects 0-3; subtracts one on each evaluation
        // wneh v == 0, that number will be X
        let v = Math.floor( Math.random()*4);
        let answer = 0;

        let half = 4 + Math.floor(Math.random()*100);

        for (let i = 0; i < 2; i++ ) {

            let a = Math.floor(Math.random()*half);
            let b = half + neg() * a;
            console.log(half, a,b);
            symbol = "+";
            if (a > half || b > half) {
                console.log("negating: ", a, b);
                symbol = "-";
                if (b > a) { [a, b] = [b, a]; }
            };
            eq = v==0 ? eq + "x" : eq + a;
            eq += symbol;
            if (v==0) {answer = a };
            v-= 1;
            eq = v==0 ? eq + "x" : eq + b;
            if (i+1 <2 ) {
                eq += "=";
            }
            if (v==0) {answer = b };
            v-= 1;

        };
        return writeHTML( eq );
    };

    return {createABCD, createABC}
})();
function GenABC() {
    const practiceCount = 12;
    // const practiceCount = 1;

    console.log("generating practice!");
    const divProblems = document.querySelector("#problems");
    divProblems.textContent= "";

    for (let i =0; i < practiceCount; i++ ) {

        divProblems.appendChild( problem.createABC() );
    }

}

function GenABCD() {
    const practiceCount = 12;
    // const practiceCount = 1;

    console.log("generating practice!");
    const divProblems = document.querySelector("#problems");
    divProblems.textContent= "";

    for (let i =0; i < practiceCount; i++ ) {

        divProblems.appendChild( problem.createABCD() );
    }
};
/* <div class="problem">
    <div class="equation"><span class="var">x</span>+9=9+14</div>
    <div class="workspace">
        <div class="half"></div>
        <div class="half"></div>
    </div>
    <div class="answer">
        <div class="v"><span class="var">x</span>=</div>
    </div>
</div> */