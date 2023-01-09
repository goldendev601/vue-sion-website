<template lang="pug">
  layout
    hero-section(key="hero")
    video-section(key="video")
    blue-screen-section(key="bluescreen")
    features-section(key="features")
    testimonials-section(key="testimonials")
    blog-section(:posts="posts" key="blog-index" rowClass="justify-content-center")
      .container.text-center(key="idex-blog-title")
        .index__title.mb-5 What's new...

</template>

<static-query>
{
  news:yaml(path:"/data/news/") {
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
import HeroSection from '~/components/HeroSection';
import VideoSection from '~/components/VideoSection';
import BlueScreenSection from '~/components/BlueScreenSection';
import FeaturesSection from '~/components/FeaturesSection';
import TestimonialsSection from '~/components/TestimonialsSection';
import BlogSection from '~/components/BlogSection';

export default {
  name: 'IndexPage',
  metaInfo: {
    title: 'Welcome'
  },
  components: {
    HeroSection,
    VideoSection,
    BlueScreenSection,
    FeaturesSection,
    TestimonialsSection,
    BlogSection
  },
  computed: {
    posts() {
      let posts = get(this, '$static.news.data', []);
      posts = posts.slice(0, 2);
      return posts;
    }
  }
};
</script>

<style lang="scss">
@import 'mixins';

.index__title {
  font-size: 45px;
  font-weight: bold;
  @include media-breakpoint-down(sm) {
    font-size: 24px;
  }
}
</style>
