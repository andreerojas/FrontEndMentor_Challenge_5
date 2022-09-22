let qContainers = document.querySelectorAll('.question-container');

for (let qContainer of qContainers) {
    qContainer.addEventListener('click', function () {
        let answer = qContainer.children[1];
        let arrow = qContainer.children[0].children[1];
        let question = qContainer.children[0].children[0];
        if (!arrow.classList.contains('inverted-arrow-icon')) {
            let activeArrow = document.querySelector('.inverted-arrow-icon');
            if (activeArrow) {
                activeArrow.classList.remove('inverted-arrow-icon');
                activeArrow.parentElement.nextElementSibling.classList.add('answer-hidden');
                activeArrow.previousElementSibling.classList.remove('relevant-text');
            }
        }
        arrow.classList.toggle('inverted-arrow-icon');
        answer.classList.toggle('answer-hidden');
        question.classList.toggle('relevant-text');

    })
}
