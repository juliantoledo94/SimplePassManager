
Vue.component("form-contraseña",{
  template:`  <div>
            <h2 class="d-flex justify-content-center m-3 pt-3">Agregar Contraseña</h2>
            <form v-on:submit.prevent>
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
            <div>
                <button @click="guardar(dato)">Guardar Contraseña</button>
            </div>
            </form>
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
  }
    
})


Vue.component("mostrar-dato",{
  props:["arr"],
  template:`
          <div>
          <h2>Datos ingresados</h2>
            <div class="container d-flex flex-wrap">
              
              
              <div v-for="(dato, index) in arr" :key="index">
                <div class="card" style="width: 18rem;">
                  <img v-if="dato.selectedAccountType === 'netflix'" src="img/netflix_logo.png" alt="Logo de Netflix" />
                  <img v-else-if="dato.selectedAccountType === 'gmail'" src="img/gmail_logo.png" alt="Logo de Gmail" />
                  <img v-else-if="dato.selectedAccountType === 'steam'" src="img/steam_logo.png" alt="Logo de Steam" />
                  <img v-else="dato.selectedAccountType === 'github'" src="img/github_logo.png" alt="Logo de Github" />
                  <div class="card-body">
                    <h5 class="card-title">Usuario:{{ dato.user }}</h5>
                    <p class="card-text">Contraseña:{{ dato.password }}</p>
                  </div>
                </div> 
              </div>
            </div>
          </div>
  `,
 

});

/*
  <div v-for="(dato, index) in arr" :key="index">
    <div class="card" style="width: 18rem;">
      <img v-if="dato.selectedAccountType === 'netflix'" src="img/netflix_logo.png" alt="Logo de Netflix" />
      <img v-else-if="dato.selectedAccountType === 'gmail'" src="img/gmail_logo.png" alt="Logo de Gmail" />
      <img v-else-if="dato.selectedAccountType === 'steam'" src="img/steam_logo.png" alt="Logo de Steam" />
      <img v-else="dato.selectedAccountType === 'github'" src="img/github_logo.png" alt="Logo de Github" />
      <div class="card-body">
        <h5 class="card-title">Usuario:{{ dato.user }}</h5>
        <p class="card-text">Contraseña:{{ dato.password }}</p>
      </div>
      
      
    </div> 
  </div>
*/





var app = new Vue({
    el:"#app",
    data:{}
});