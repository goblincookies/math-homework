console.log("math practice!");
document.querySelector("#gen-practice").addEventListener("click", GenPractice);

const problem = ( function () {

    const neg = function() {
        let n = Math.floor( Math.random()*2 ); // 1,0
        n *=2; //2,0
        n -= 1 //1,-1
        console.log("neg: ", n);
        return n;
    }

    const create = function () {
        let eq = "";
        let symbol = "+";
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
        console.log(`answer: ${half}, equation: ${eq}`);

        const divProblem = document.createElement("div");
        divProblem.classList.add("problem");
        const divEquation = document.createElement("div");
        divEquation.classList.add("equation");
        divEquation.textContent = eq;
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
    };

    return {create}
})();

function GenPractice() {
    const practiceCount = 12;
    // const practiceCount = 1;

    console.log("generating practice!");
    const divProblems = document.querySelector("#problems");
    divProblems.textContent= "";

    for (let i =0; i < practiceCount; i++ ) {

        divProblems.appendChild( problem.create() );
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