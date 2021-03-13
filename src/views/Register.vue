<template>
  <div>
    <h2 class="title">登録</h2>
    <div class="register-intro">
      <p style="text-align: center;">－ 利用規約 －</p>
      <p>本サイト「うれしかったリスト」は、登録者のみなさまの日常で起きた「うれしかったこと」をみんなでシェアすることを目指すWebアプリケーションです。利用者は、例外を除いて、うれしかったことをゆるく挙げていくことができます。<br>
      <br>ここで言う例外には公序良俗に反することや他人の権利を侵害することが当たります。<br><br>
      これに該当するコメントは管理者によって削除され、また、最悪の場合においては利用権限がはく奪されますので、ご了承ください。<br>
      これらの利用規約に同意される方のみ、以下の登録フォームより利用登録をお願いいたします。<br>
      <br>※メールアドレスは「@」が含まれていれば実在しないものでも問題ありません。
      </p>
    </div>
    <div class="items-box">
      <div class="item-box">
      <label for="name">Email(フリーアドレス可): </label><br>
      <input class="add-input" type="email" id="email" v-model="email" />
      </div>
      <br><br>
      <div class="item-box">
      <label for="name">Password: </label><br>
      <input class="add-input" type="password" id="password" v-model="password" />
      </div>
      <br><br>
      <button class="add-button" v-on:click="register()">送信</button>
      <br><br>
    </div>
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
    register() {
      // axios
      //   .post(
      //     '/accounts:signUp?key=AIzaSyDcbxSmtCLbwrSXXyA4GZLYTAIMeSWOZHo',
      //     {
      //       email: this.email,
      //       password: this.password,
      //       returnSecureToken: true
      //     }
      //   )
      //   .then(response => {
      //     console.log(response)
      //   })


      this.$store.dispatch('register', {
        email: this.email,
        password: this.password
      })

      this.email = "";
      this.password = "";
    },
  }
}
</script>

<style scoped>

.register-intro {
  font-size: 20px;
  width: 80%;
  text-align: left;
  margin: 30px auto ;
}


.title {
  font-size: 40px;
}

.items-box {
  padding-top: 50px;
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

.register-intro {
  font-size: 3vw;
}

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

.register-intro {
  font-size: 2.5vw;
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
  width: 150px;
  height: 60px;
  font-size: 4vw;
  margin-bottom: 50px;
}



}
</style>
