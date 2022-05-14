<template>
    <div>
        <form @submit.prevent="register">
            <h2>Register</h2>
            <input type="email" placeholder="Enter your email" v-model="email" />
            <input type="password" placeholder="Enter your password" v-model="password" />
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export default {
    name: "Register",
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        register() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(() => {
                alert("Successfully registered! Please login.");
                this.$router.push("/");
            }).catch((error) => {
                alert(error.message);
            });
        },
    },
};
</script>

