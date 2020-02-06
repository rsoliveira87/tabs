class Tabs {

    constructor() {
        this.tabs = document.querySelectorAll('.items .tab');
        this.content = document.querySelectorAll('.tab-content');
        this.count = 0;
    }

    addActionTabs() {
        const self = this;

        self.tabs.forEach((tab, index) => {
            tab.onclick = e => {
                e.preventDefault();
                self.removeActive('tab');
                tab.classList.add('active');
                self.count = index;
                self.removeActive('content');
                self.addActiveContent();
            };
        });
    }

    removeActive(type) {
        const self = this;
        const items = type === 'tab' ? self.tabs : self.content;
        
        for(const item of items) {
            if(item.classList.contains('active')) {
                item.classList.remove('active');
                break;
            }
        }
    }

    addActiveContent() {
        const self = this;
        this.content[self.count].classList.add('active');
    }

    /**
     * Método inicializador da classe
     *
     * @memberof Tabs
     * @method onInit
     */
    onInit() {
        this.addActionTabs();
    }
    
}

// Instância da classe
const tabs = new Tabs;

tabs.onInit();
