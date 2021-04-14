const modals = () => {
    function bindModal (trigger, modal, close){
        trigger.addEventListener('click',(e) => {
            if (e.target) {
                
                e.preventDefault();
            }
        });
    }
};

export default modals;