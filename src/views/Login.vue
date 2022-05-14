<template>
    <div>
        <form @submit.prevent="login">
            <h2>Login</h2>
            <input type="email" placeholder="Enter your email" v-model="email" />
            <input type="password" placeholder="Enter your password" v-model="password" />
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        login() {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    alert("Successfully logged in");
                    this.$router.push("/dashboard");
                })
                .catch((error) => {
                    alert(error.message);
                });
        },
    },
};
</script>
