const app = new Vue({
    el: '#app',
    data: {
        info: {},
        members:[]
    },
    created() {
        // fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
        // fetch('https://raw.githubusercontent.com/FlopaMendez/HidroGrow-codo-a-codo/usuarios-dispositivos/HidroGrow/json/dispositivos.json')
        fetch('json/dispositivos.json')
        .then(response => response.json())
        .then(data => { 
            console.log(data);
            this.info=data
            this.members=data.members
            })
        .catch( error => console.log(error));
    }
});