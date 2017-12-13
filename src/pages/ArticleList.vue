<template>
  <div class="list">
    <h1>{{ msg }}</h1>
    <div><router-link to="/articles/new">新建</router-link></div>
    <div v-for="(article, index) in list" class="articles">
      <span class="delete" @click="deleteArticle(index)">X</span>
      <router-link :to="{path: '/articles/' + article.id}">{{ article.title }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '博客文章列表',
      list: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList: function () {
      var _this = this
      this.$http.get('http://rap2api.taobao.org/app/mock/1657/GET//articles')
        .then(function (response) {
          _this.list = response.data.articles
          // console.log(response.data.articles)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    deleteArticle: function (index) {
      var _this = this
      this.$http.delete('http://rap2api.taobao.org/app/mock/1657/DELETE//articles/123321')
        .then(function (response) {
          console.log(response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
      _this.list.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  margin-left: 20%;
  margin-right: 20%;
}
.articles {
  text-align: left;
  margin-top: 20px;
}
.delete {
  color: red;
}
a {
  text-decoration: none;
  color: black;
}
</style>
