<template>
    <div class="article">
      <h1>{{ $route.params.id }}</h1>
      <button v-show="!editStatus" v-on:click="editArticle">编辑</button>
      <div v-show="!editStatus">
        <div class="title">{{ data.title }}</div>
        <div class="author">{{ data.author }}</div>
        <div class="content">{{ data.content }}</div>
      </div>
      <div v-show="editStatus">
        <div class="title"><input type="text" v-model="data.title"></div>
        <div class="author"><input type="text" v-model="data.author"></div>
        <div class="content"><textarea rows="30%" cols="70%" v-model="data.content"></textarea></div>
        <button v-on:click="saveEdit">保存</button>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      data: {},
      editStatus: false
    }
  },
  methods: {
    getArticle: function () {
      var _this = this
      this.$http.get('http://rap2api.taobao.org/app/mock/1657/GET//articles/100001')
          .then(function (response) {
            _this.data = response.data
            // console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          })
    },
    editArticle: function () {
      this.editStatus = !this.editStatus
    },
    saveEdit: function () {
      this.$http.put('http://rap2api.taobao.org/app/mock/1657/PUT//articles/123321/edit').then(function (response) {
        console.log(response.data)
        window.location.reload()
      }).catch(function (error) {
        console.log(error)
      })
    }
  },
  created () {
    this.getArticle()
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
