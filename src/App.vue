<template>
    <div id="app">
        <nav>
            <router-link to="/">Home</router-link> | <router-link to="/register">Register</router-link> | <router-link to="/dashboard">Dashboard</router-link> |
            <button @click="logout">Logout</button>
        </nav>
        <router-view />
    </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export default {
    name: "App",
    methods: {
        logout() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    alert("Successfully logged out");
                    this.$router.push("/");
                })
                .catch((error) => {
                    alert(error.message);
                    this.$router.push("/");
                });
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
input {
    margin-right: 20px;
}
nav {
    padding: 30px;
}
nav a {
    font-weight: bold;
    color: #2c3e50;
}
nav a.router-link-exact-active {
    color: #42b983;
}
</style>

// https://www.freecodecamp.org/news/how-to-add-authentication-to-a-vue-app-using-firebase/
// https://console.firebase.google.com/project/vue-firebase-auth-4e14d/authentication/users
