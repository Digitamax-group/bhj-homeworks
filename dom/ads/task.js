const rotatorCases = [...document.querySelectorAll('.rotator > .rotator__case')];
let currentCase = 0; 

function changeCase(cases) {
    setInterval(() => {
        cases[currentCase].classList.remove('rotator__case_active');
    
        if (currentCase === cases.length - 1) {
            currentCase = 0;
        } else {
            currentCase++;
        }

        cases[currentCase].classList.add('rotator__case_active');
        cases[currentCase].style.color = cases[currentCase].dataset.color;
    }, 1000)
};

changeCase(rotatorCases);
