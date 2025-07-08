function loadApp(){
    const passwordInput = document.getElementById('passwordInput');
    const message = document.getElementById('message');
    const rules = {
        rule1: document.getElementById('rule1'),
        rule2: document.getElementById('rule2'),
        rule3: document.getElementById('rule3'),
        rule4: document.getElementById('rule4'),
        rule5: document.getElementById('rule5')
    };

    let rulesMet = 0;
    const checkIconPath = 'm4.5 12.75 6 6 9-13.5';
    const crossIconPath = 'M6 18 18 6M6 6l12 12';

    function updateRule(ruleElement, condition){
        const icon = ruleElement.querySelector('svg path');
        if(condition){
            icon.setAttribute('d', checkIconPath);
            ruleElement.classList.remove('rule-not-met');
            ruleElement.classList.add('rule-met');
            return true;
        }else{
            icon.setAttribute('d', crossIconPath);
            ruleElement.classList.remove('rule-met');
            ruleElement.classList.add('rule-not-met');
            return false;
        }
    }

    function checkRules(){
        rulesMet = 0;
        let password = passwordInput.value;
        
        //Check rule 1
        if(updateRule(rules.rule1, password.length >= 8)) rulesMet++;
        
        //Check rule 2
        if(updateRule(rules.rule2, password.length <= 20 && password.length>0)) rulesMet++;

        //Check rule 3
        if(updateRule(rules.rule3, /[A-Z]/.test(password))) rulesMet++;

        //Check rule 4
        if(updateRule(rules.rule4, /[a-z]/.test(password))) rulesMet++;

        //Check rule 5
        if(updateRule(rules.rule5, /[!@#$%^&*()_+\-=\[\]{};:'"|,.<>\/?\-]/.test(password))) rulesMet++;

        //Set message
        if(rulesMet < 3){
            message.classList.remove('message-normal', 'message-success');
            message.classList.add('message-error');
            message.textContent = 'Weak password!';
        }else if(rulesMet < 4){
            message.classList.remove('message-error', 'message-success');
            message.classList.add('message-normal');
            message.textContent = 'Safe password!';
        }else{
            message.classList.remove('message-normal', 'message-error');
            message.classList.add('message-success');
            message.textContent = 'Pretty safe password!';
        }
    }

    passwordInput.addEventListener('input', checkRules);
}

document.addEventListener('DOMContentLoaded', loadApp);