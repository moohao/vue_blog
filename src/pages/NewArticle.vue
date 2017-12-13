<template>
    <div class="article">
      <div>
        <div class="title"><input type="text" v-model="data.title"></div>
        <div class="author"><input type="text" v-model="data.author"></div>
        <div class="content"><textarea rows="30%" cols="70%" v-model="data.content"></textarea></div>
        <button v-on:click="saveNew">保存</button>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      data: {
        title: '',
        content: '',
        author: ''
      }
    }
  },
  methods: {
    saveNew: function () {
      this.$http.post('http://rap2api.taobao.org/app/mock/1657/POST//articles').then(function (response) {
        console.log(response.data)
        window.location.href = '/#/articles'
      }).catch(function (error) {
        console.log(error)
      })
    }
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.article {
  margin-left: 20%;
  margin-right: 20%;
}
.title {
  text-align: left;
  margin-top: 20px;
}
.author {
  text-align: right;
  margin-top: 20px;
}
.content {
  text-align: left;
  margin-top: 20px;
}
</style>
