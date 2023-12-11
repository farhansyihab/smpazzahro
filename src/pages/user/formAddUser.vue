<template>
    <div class="container">
        <form>
            <div class="row">
                <h3>Masukkan user ID untuk ditambahan sebagai Administrator</h3>
            </div>
            <div class="row">
                <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">User ID</span>
                    <input 
                        type="text" 
                        class="form-control" 
                        placeholder="user@gmail.com" 
                        aria-label="Username" 
                        aria-describedby="addon-wrapping"
                        v-model="state.userID"
                    />
                </div>                
            </div>
            <div class="row">
                <div class="col-6">
                    <button 
                        type="button" 
                        class="btn btn-primary btn-lg"
                        @click="addAdmin()"
                    >
                    Tambah
                </button>
                </div>
            </div>
        </form>
         
    </div>
</template>
<script>
import { userData } from "../../store/user/index.js"
import { reactive } from 'vue'
export default {
    name: "formAddUser",
    setup() {
        const tambahAdmin = function(){
            console.log("coba")
            userData().tambahAdmin(this.state.userID)
        }
        const state = reactive({
            alamatGmail : "",
            userID:""
        })
        return { state, tambahAdmin }
    },
    methods: {
        addAdmin(){
            userData().tambahAdmin(this.state.userID)
        }
    }
}
</script>

<style scoped>
form{
    top:20px;
    position: relative;
}
.row{
    padding-top: 10px;
}
</style>