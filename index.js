class Accordion{
    constructor(){
        this.openedAccordion = document.querySelector('.show');
        this.attachEvent();
    }
    attachEvent(){
        document.getElementsByClassName("questions-container")[0].addEventListener('click',(event) => {this.openAnswer(event);});
    }
    openAnswer(event){
        if(event.target.classList.contains('question') || event.target.tagName === 'H3'){
            const currentQuestion = event.target.tagName === 'H3' ? event.target : event.target.firstElementChild;
            if(currentQuestion.classList.contains('bold')){
                return;
            }
            currentQuestion.classList.add('bold');
            const currentAnswer = currentQuestion.nextElementSibling;
            this.openedAccordion.classList.add('hide');
            this.openedAccordion.previousElementSibling.classList.remove('bold');
            currentAnswer.classList.add('show');
            currentAnswer.classList.remove('hide');
            this.openedAccordion = currentAnswer;
        }
    }
}

const accordion = new Accordion();