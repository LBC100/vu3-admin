import {
	createStore
} from 'vuex'



const files = require.context('./modules', false, /\.js$/);
const modules = {};

files.keys().forEach(key => {
	modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
});



export default createStore({
	state: {},
	mutations: {},
	actions: {},
	namespaced: true,
	modules
})
