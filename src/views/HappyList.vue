<template>
  <div>
    <h1 class="title">うれしかったリスト</h1>
    <div class="add-box">
      <input class="add-input" type="text" id="name" v-model="newTodoName" />
      <br>
      <button class="add-button" v-on:click="addTodo()">うれしいを追加する</button>
      <button class="add-button" v-on:click="reset()">みんなのうれしいを見る</button>
    </div>
    <div class="update-box">
      <ul>
        <li class="update-item" v-for="todo in todos" v-bind:key="todo.newTodoName">
          「 {{ todo.fields.newTodoName.stringValue }} 」、うれしかった。
        </li>
      </ul>
    </div>
      <img src="../assets/ouen1.png" alt="">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HappyList',
  data() {
    return {
      newTodoName: "",
      todos: [],
    }
  },
  computed: {
    idToken() {
      return this.$store.getters.idToken
    }
  },
  created() {
    axios
      .get(
        '/todos',
        {
          headers: {
            Authorization: `Bearer ${this.idToken}`
          }
        }
        )
      .then (response => {
        this.todos = response.data.documents;
      })
  },
  methods: {
    addTodo() {
      if (this.newTodoName === "") {
        return
      }
      axios
        .post(
          '/todos',
          {
            fields: {
              newTodoName: {
                stringValue: this.newTodoName
              }
            }
          },
        {
          headers: {
            Authorization: `Bearer ${this.idToken}`
          }
        }
          )
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
      this.newTodoName = ""
    },
    reset() {
      this.$router.go({path: this.$router.currentRoute.path, force: true})
    }
  }
}
</script>

<style scoped>

.title {
  font-size: 40px;
}

.add-input {
  height: 50px;
  width: 75%;
  margin-right: 10px;
}

.add-button {
  height: 40px;
  width: 30%;
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

  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;
  margin-bottom: 20px;

  font-size: 1.5vw;
}

.delete-button {
  color: #ffffff;
  background-color: #2092df;
  border: none;
  border-radius: 5px;
  height: 25px;

}

.update-box {
  font-size: 1.5vw;
  width: 75%;
  margin: 0 auto;
}

.update-box ul {
  list-style: none;
  padding: 0px;
  width: 100%;
}

.update-item {
  width: 80%;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: solid 0.5px;
  border-radius: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  box-shadow: 0px 5px 5px 0 rgba(0, 0, 0, 0.3);


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

.add-box {
  padding-top: 50px;
  width: 80%;
  margin: 0 auto;
  text-align: center;
}

.add-input {
  width: 100%;
}

.add-button {
  width: 60%;
  font-size: 3.5vw;
  display: block;
  margin: 20px auto 20px;
}

.update-box {
  font-size: 3vw;
}

.update-item {
  border: solid 0.4px;
  box-shadow: 0px 5px 5px 0 rgba(0, 0, 0, 0.2);
}




}




@media (min-width: 480px) and (max-width: 896px) {


.title {
  font-size: 8vw;
}

.add-button {
  height: 50px;
  width: 30%;
  font-size: 2vw;
}

.update-box {
  font-size: 2.5vw;
}




}







</style>
