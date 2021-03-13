<template>
  <div>
      <ul>
        <li v-for="todo in todos" v-bind:key="todo.newTodoName">
          「 {{ todo.fields.newTodoName.stringValue }} 」がうれしかった。
        </li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "name",
  props: {
    newTodoName: String,
    todos: String
  },
  created() {
    // this.db = firebase.firestore()
    // this.todosRef = this.db.collection('todos')
    // this.todosRef.onSnapshot(querySnapshot => {
    //   const obj = {}
    //   querySnapshot.forEach(doc => {
    //     obj[doc.id] = doc.data()
    //     this.todos = obj
    //   })
    // })

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


}
</script>

<style scoped>

</style>
