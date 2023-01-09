<template lang="pug">
  layout
    // Blog
    blog-section(:posts="posts" key="blog-page")
      //title
      .container
        page-title(title="Some of our thoughts..." breadcrumb="Blog")
      
      // footer
      template(slot="footer")
        .container(key="blog-pagination")
          .blog__pagination
            ul.pagination
              li.page-item.active
                g-link.page-link(to="/blog/") 1
              li.page-item
                g-link.page-link(to="/blog/2") 2
              li.page-item
                g-link.page-link(to="/blog/3") 3
              li.page-item
                g-link.page-link(to="/blog/4") ›
</template>

<static-query>
{
  posts:yaml(path:"/data/blog/") {
    data {
      id
      title
      author
      image_url
      url
    }
  }
}
</static-query>

<script>
import get from 'lodash/get';
import PageTitle from '~/components/PageTitle';
import BlogSection from '~/components/BlogSection';

export default {
  name: 'BlogPage',
  metaInfo: {
    title: 'Blog'
  },
  components: { PageTitle, BlogSection },
  computed: {
    posts() {
      return get(this, '$static.posts.data', []);
    }
  }
};
</script>

<style lang="scss">
@import 'mixins';

.blog__pagination {
  display: flex;
  justify-content:  flex-end;
  @include media-breakpoint-down(md) {   justify-content:  center;; }

}
</style>
