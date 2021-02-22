class Gallery {
    constructor(params) {
        this.selector = params.selector;
        this.imgPath = params.imgPath;
        this.list = params.list;

        this.DOM = null;
    }

    init() {
        // selectoriaus validacija, jei geras, tai rasti DOM
        if (!this.isValidSelector()) {
            return 'Nevalidus selectorius';
        }

        // imgPath validacija
        if (!this.isImgPathValid()) {
            return 'Nevalidus imgPath';
        }

        // list validacija
        if (!this.isListValid()) {
            return 'Nevalidus listas';
        }

        // filter out invalid list objects
        this.filterOutInvalidListObjects();

        // render content
        this.render();

        return true;
    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            return false;
        }
        this.DOM = DOM;
        return true;
    }

    isImgPathValid() {
        if (typeof this.imgPath !== 'string' || this.imgPath === '') {
            return false;
        }
        return true;
    }

    isListValid() {
        if (!Array.isArray(this.list) || this.list.length === 0) {
            return false;
        }
        return true;
    }

    filterOutInvalidListObjects() {
        const validData = [];

        for (const item of this.list) {
            if (
                typeof item === 'object' &&
                !Array.isArray(item) &&
                item.photo &&
                typeof item.photo === 'string' &&
                item.photo !== '' &&
                item.title &&
                typeof item.title === 'string' &&
                item.title !== '' &&
                item.tags &&
                Array.isArray(item.tags) &&
                item.tags.length > 0 &&
                this.isValidItemTagArray(item.tags)
            ) {
                validData.push(item);
            }
        }

        this.list = validData;
    }

    isValidItemTagArray(tagList) {
        for (const tag of tagList) {
            if (typeof tag === 'string' && tag !== '') {
                return true;
            }
        }
        return false;
    }

    render() {
        this.DOM.innerHTML = this.renderFilter() + this.renderGallery();
    }

    renderFilter() {
        return `<div class="col-12 center">
                    PORTFOLIO FILTER
                </div>`;
    }

    renderGallery() {
        let HTML = '';

        for (const item of this.list) {
            const validTags = item.tags.filter(
                (tag) => typeof tag === 'string' && tag !== ''
            );

            HTML += `<div class="col-12 col-sm-6 col-md-4">
                        PORTFOLIO ITEM
                    </div>`;
        }

        return HTML;
    }
}

export { Gallery };
