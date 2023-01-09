<template lang="pug">
  .blog-post
    a(:href="post.url" target="_blank" rel="nofollow")
      .blog-post__image(:style="{backgroundImage: `url(${post.image_url})` }")
    .blog-post__content
      .blog-post__author {{post.author}}
      .blog-post__title {{title}}
      a.blog-post__link(:href="post.url" target="_blank" rel="nofollow") Read article
</template>

<script>
export default {
  name: 'BlogPost',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    title() {
      // truncate title
      return this.post.title;
      // return this.post.title.length >= 45
      //   ? `${this.post.title.substr(0, 45)}...`
      //   : this.post.title;
    }
  }
};
</script>

<style lang="scss">
@import 'mixins';
$radius: 5px;

.blog-post {
  height: 400px;
  border-radius: $radius;
  margin-bottom: $grid-gutter-width;
  display: flex;
  flex-direction: column;
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.14);
  @include media-breakpoint-down(sm) {
    height: 250px;
  }

  &__author {
    color: color('text-gray');
    font-size: 15px;
    @include media-breakpoint-down(sm) {
      font-size: 12px;
    }
  }
  &__title {
    font-weight: bold;
    font-size: 24px;
    line-height: 1.2;
    @include media-breakpoint-down(sm) {
      font-size: 20px;
    }
  }
  &__image {
    background: color('text-gray');
    height: 200px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-top-left-radius: $radius;
    border-top-right-radius: $radius;
    @include media-breakpoint-down(sm) {
      height: 100px;
    }
  }
  &__content {
    flex-grow: 1;
    padding: $spacer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__link {
    color: color('primary');
    font-size: 15px;
    font-weight: bold;
  }
}
</style>
