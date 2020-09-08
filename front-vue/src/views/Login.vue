<template>
    <div>
        <form @submit.prevent="pressed">
            <div class="login">
                <input type="email" name="email" v-model="email" placeholder="something@something.com">
            </div>
            <div>
                <input type="password" name="password" v-model="password" placeholder="password">
            </div>
            <button type="submit">Login</button>
        </form>
        <div class="error" v-if="error">{{error.message}}</div>
        <span>Need an account? Click here to <router-link to="/register">register</router-link></span>
    </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
    data(){
        return{
            email: "",
            password: "",
            error: ""
        }
    },
    methods: {
                async pressed(){
            try {
                const val = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                console.log(val)
                this.$router.replace({name:"Secret"})
            }catch(err){
                console.log(err)
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>