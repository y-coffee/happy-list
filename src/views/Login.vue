<template>
  <div>
    <h2 class="title">ログイン</h2>
    <div class="items-box">
      <div class="item-box">
      <label class="name" for="name">Email: </label><br>
      <input class="add-input" type="email" id="email" v-model="email" />
      </div>
      <br><br>
      <div class="item-box">
      <label class="name" for="name">Password: </label><br>
      <input class="add-input" type="password" id="password" v-model="password" />
      </div>
      <br><br>
      <button class="add-button" v-on:click="login()">送信</button>
      <br><br>
    </div>
    <img src="../assets/ouen1.png" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      // axios
      //   .post(
      //     '/accounts:signInWithPassword?key=AIzaSyDcbxSmtCLbwrSXXyA4GZLYTAIMeSWOZHo',
      //     {
      //       email: this.email,
      //       password: this.password,
      //       returnSecureToken: true
      //     }
      //   )
      //   .then(response => {
      //     console.log(response)
      //   })
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
      this.email = "";
      this.password = "";
    }
  }
}
</script>

<style scoped>

.title {
  font-size: 40px;
}

.items-box {
  width: 40%;
  margin: 0 auto;
}

.item-box {
  width: 100%;
  text-align: left;
}

.add-input {
  height: 25px;
  width: 100%;
  margin-right: 10px;
}

.add-button {
  width: 100px;
  height: 50px;
  /* border: none; */
  border-radius: 10px;
  color: #ffffff;
  /* background-color: #2092df; */

  background-color: #43A1FF;
  /* border: none; */
  border-bottom-color: #6ca8e4;
  border-right-color: #5287bb;
  border-top-color: #79ade0;
  border-left-color: #9cc1e7;

  font-size: 1.5vw;
  outline: none;
}






img {
  width:200px;
  height: 200px;
}



@media (max-width: 480px) {

.title {
  font-size: 8vw;
  margin-bottom: 0;
}

.items-box {
  padding-top: 40px;
  width: 70%;
}



.item-box {
  width: 100%;
  height: 80px;
}

.name {
  font-size: 5vw;
}

.add-button {
  font-size: 5vw;
  margin-bottom: 50px;
}



}






@media (min-width: 480px) and (max-width: 896px) {

.title {
  font-size: 8vw;
  margin-bottom: 0;
}

.items-box {
  width: 60%;
  padding-top: 40px;
}

.item-box {
  width: 100%;
  height: 80px;
}

.name {
  font-size: 3vw;
}

.add-button {
  width: 200px;
  height: 70px;
  font-size: 4vw;
  margin-bottom: 50px;
}



}




</style>
