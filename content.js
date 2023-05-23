'use strict';

// Create a new script element
var script = document.createElement('script');
script.textContent = `
    const TOGGLE_BUTTON_STYLE = \`
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 10000;
        font-family: Arial, sans-serif;
        font-size: 13px;
        color: rgb(64, 65, 79);
        border: 1px solid rgb(217, 217, 227);
        background-color: #FFFFFF;
        padding: 6px 12px;
        border-radius: 4px;
        cursor: pointer;
    \`;

    let useGpt4 = false;

    let oldFetch = window.fetch;
    window.fetch = function(input, init) {
        if (input.endsWith('/backend-api/conversation') && (init.method === 'POST')) {
            let oldBody = JSON.parse(init.body);
            oldBody.model = useGpt4 ? 'gpt-4' : 'gpt-3.5-turbo';
            init.body = JSON.stringify(oldBody);
        }
        return oldFetch.apply(this, arguments);
    };

    let button = document.createElement('button');
    button.style = TOGGLE_BUTTON_STYLE;
    button.innerText = 'Use GPT-4: OFF';
    button.addEventListener('click', function() {
        useGpt4 = !useGpt4;
        button.innerText = useGpt4 ? 'Use GPT-4: ON' : 'Use GPT-4: OFF';
    });
    document.body.appendChild(button);
`;

// Inject the script into the document
document.documentElement.appendChild(script);
