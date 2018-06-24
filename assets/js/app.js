Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div>
      <h3>{{ post.title }}</h3>
      <p v-text="post.content"></p>
    </div>
  `
})

var app = new Vue({
  el: '#app',
  data: {
    posts: [
      {id: 1, title: 'Title 1', content: 'Content 1'},
      {id: 2, title: 'Title 2', content: 'Content 2'},
      {id: 3, title: 'Title 3', content: 'Content 3'},
    ]
  }
})
