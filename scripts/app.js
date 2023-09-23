
Vue.component("form-contraseña",{
  template:`  <div>
            <h1 class="d-flex justify-content-center  cherryBomb pb-2 mb-4  border-bottom border-warning">Gestor de cuentas</h1>
            <form v-on:submit.prevent class="container d-flex justify-content-center mt-5 p-5">
            <div>
                <label for="accountType">Tipo de Cuenta:</label>
                <select v-model="dato.selectedAccountType" id="accountType">
                <option value="gmail">Gmail</option>
                <option value="netflix">Netflix</option>
                <option value="steam">Steam</option>
                <option value="github">Github</option>
                </select>
            </div>
            <div>
                <label >Usuario:</label>
                <input type="text" v-model="dato.user"/>
            </div>
            <div>
                <label>Contraseña:</label>
                <input type="password" v-model="dato.password" />
            </div>
            
            </form>
            <div class="d-flex justify-content-center">
                <button class="btn btn-primary btn rounded" @click="guardar(dato)">Guardar Contraseña</button>
            </div>
            <mostrar-dato v-bind:arr ="this.arr"></mostrar-dato>
          </div>  
`,
  data:function(){
    return {
        dato:{
          selectedAccountType: 'gmail',
          user: '',
          password: '',
        },
        arr:[],
        
      };
    },
  methods:{
    guardar(dato){
      console.log(dato)
      if (!dato.selectedAccountType || !dato.user || !dato.password) {
        // Si falta algún dato requerido, muestra un mensaje de error o realiza alguna acción apropiada.
        alert('Por favor, complete todos los campos.');
        return;
      }
      if(!localStorage.local){
        this.arr=[]
      }else{
        this.arr=JSON.parse(localStorage.getItem("local"))
        }

      this.arr.push(dato)
      localStorage.setItem("local",JSON.stringify(this.arr))
      this.dato={selectedAccountType:"",user:"",password:""}
    }
  },
  created: function () {
    // Cargar los datos del localStorage al iniciar la aplicación
    if (localStorage.local) {
      this.arr = JSON.parse(localStorage.getItem("local"));
    }
  },
  
    
})


Vue.component("mostrar-dato",{
  props:["arr"],
  template:`
          <div class="container">
          <h2 class="d-flex justify-content-center mt-5 pb-5">Cuentas Guardadas</h2>
            <div class="container d-flex flex-wrap justify-content-center aling-items-center">
              
              
              <div v-for="(dato, index) in arr" :key="index">
                <div class="card card shadow m-2 p-2 card border-rounded card border-dark" style="width: 18rem;">
                  <img v-if="dato.selectedAccountType === 'netflix'" src="img/netflix_logo.png" alt="Logo de Netflix" />
                  <img v-else-if="dato.selectedAccountType === 'gmail'" src="img/gmail_logo.png" alt="Logo de Gmail" />
                  <img v-else-if="dato.selectedAccountType === 'steam'" src="img/steam_logo.png" alt="Logo de Steam" />
                  <img v-else="dato.selectedAccountType === 'github'" src="img/github_logo.png" alt="Logo de Github" />
                  <div class="card-body">
                    <h5 class="card-title">{{ dato.user | mayuscula }}</h5>
                    <p class="card-text">Contraseña:{{ dato.password }}</p>
                    <button class="btn btn-danger" @click="eliminarDato(index)">Eliminar</button>
                  </div>
                </div> 
              </div>
            </div>
          </div>
  `,
  filters: {
    mayuscula: function (value) {
      if (!value) return ''
      value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
    }
},
  methods: {
    eliminarDato(index) {
      // Elimina el dato del arreglo
      this.arr.splice(index, 1);

      // Actualiza el Local Storage
      localStorage.setItem("local", JSON.stringify(this.arr));
    }
  },
 

});



var app = new Vue({
    el:"#app",
    data:{},
    
});