function hobbies(data) {
    // validation
    if (!data) {
        return false;
    }

    // logic
    const { selector, list } = data;
    const DOM = document.querySelector(selector);

    let HTML = '';
    for (const item of list) {
        HTML += `<div class="col-12 col-md-4 col-lg-3 hobbie">
                    <div class="icon">${item.icon}</div>
                    <p class="text">${item.text}</p>
                </div>`;
    }

    // post logic validation

    // result return
    DOM.innerHTML = HTML;
}

export { hobbies }