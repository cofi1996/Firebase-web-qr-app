<template>
  <div>
    Logged in
    <span v-if="loggedIn">Yes</span>
    <span v-else>No</span>
    <div>
    <span v-if="loggedIn"><button @click="signOut">Sign out</button></span>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
    created(){
        firebase.auth().onAuthStateChanged(user =>{
            if(user){
                this.loggedIn = true;
            } else {
                this.loggedIn = false;
            }
        })
    },
    data(){
        return {
            loggedIn: false
        }
    },
    methods: {
       async signOut(){
           try {
            const data=firebase.auth().signOut();
            console.log(data);
            this.$router.replace({name:"Login"});
           }catch(err){
               console.log(err);
           }
            
        }
    }

}
</script>

<style lang="scss" scoped>

</style>