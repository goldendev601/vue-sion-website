<template lang="pug">
  section.blog
    //- Posts
    slot
    .container
      .row(:class="rowClass")
        .col-lg-4.offset-lg-0.col-md-6(v-for="post in posts")
          blog-post(:post="post")
    slot(name="footer")  
  
</template>

<script>
import BlogPost from './BlogPost';

export default {
  name: 'BlogSection',
  components: { BlogPost },
  props: {
    posts: {
      type: Array,
      default: () => []
    },
    rowClass: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="css" scoped></style>
