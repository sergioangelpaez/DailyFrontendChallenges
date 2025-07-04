function loadApp(){
    const textarea = document.getElementById('textarea');
    const counter = document.getElementById('counter');
    const counterContainer = document.getElementById('counterContainer');

    function checkCount(){
        const charLimit = textarea.maxLength;
        let count = textarea.value.length;

        counter.textContent = count;

        if(count === charLimit){
            textarea.classList.remove('textarea-normal');
            textarea.classList.add('textarea-error');
            counterContainer.classList.remove('counter-normal');
            counterContainer.classList.add('counter-error');
        }else{
            textarea.classList.add('textarea-normal');
            textarea.classList.remove('textarea-error');
            counterContainer.classList.add('counter-normal');
            counterContainer.classList.remove('counter-error');
        }
    }
    
    textarea.addEventListener('input', checkCount);
}

document.addEventListener('DOMContentLoaded', loadApp);