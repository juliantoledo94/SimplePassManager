
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








var app = new Vue({
    el:"#app",
    data:{}
});