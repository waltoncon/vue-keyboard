// class Keyboard {
//     constructor(props) {
//         this.keys = [];
//
//     }
//
// }

const defaultOptions = {
    debug: false
};
let options = {};

const installer = {
    install(Vue, opts) {
        options = {...defaultOptions, ...opts};

    },
};


export {defaultOptions, options};
export default installer
