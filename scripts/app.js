/* 

Vue.component("form-contraseña",{
    template:`  <div>
                <h2>Agregar Contraseña</h2>
                <form v-on: submit.prevent>
                <div>
                    <label for="accountType">Tipo de Cuenta:</label>
                    <select v-model="selectedAccountType" id="accountType">
                    <option value="gmail">Gmail</option>
                    <option value="hotmail">Hotmail</option>
                    </select>
                </div>
                <div>
                    <label for="platform">Plataforma:</label>
                    <input type="text" v-model="platform" id="platform" />
                </div>
                <div>
                    <label for="password">Contraseña:</label>
                    <input type="password" v-model="password" id="password" />
                </div>
                <div>
                    <button type="submit">Guardar Contraseña</button>
                </div>
                </form>
            </div>  
    `,
    data:function(){
        return {
            selectedAccountType: 'gmail',
            platform: '',
            password: '', // Agregamos una propiedad para la contraseña
          };
        },
        methods: {
          savePassword() {
            const passwordData = {
              accountType: this.selectedAccountType,
              platform: this.platform,
              password: this.password, // Agregamos la contraseña al objeto
            };
            // Guardar en localStorage
            localStorage.setItem('password', JSON.stringify(passwordData));
            this.selectedAccountType = 'gmail';
            this.platform = '';
            this.password = ''; // Limpiar la contraseña después de guardar
          },
        },
});



*/

Vue.component("form-contraseña",{
  template:`  <div>
            <h2 class="d-flex justify-content-center m-3 pt-3">Agregar Contraseña</h2>
            <form v-on: submit.prevent>
            <div>
                <label for="accountType">Tipo de Cuenta:</label>
                <select v-model="selectedAccountType" id="accountType">
                <option value="gmail">Gmail</option>
                <option value="netflix">Netflix</option>
                <option value="steam">Steam</option>
                <option value="github">Github</option>
                </select>
            </div>
            <div>
                <label >Usuario:</label>
                <input type="text" v-model="user"/>
            </div>
            <div>
                <label>Contraseña:</label>
                <input type="password" v-model="password" />
            </div>
            <div>
                <button type="submit">Guardar Contraseña</button>
            </div>
            </form>
          </div>  
`,
  data:function(){
    return {
        selectedAccountType: 'gmail',
        user: '',
        password: '', // Agregamos una propiedad para la contraseña
      };
    },
    
})








var app = new Vue({
    el:"#app",
    data:{}
});