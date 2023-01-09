<template lang="pug">
  layout.about-page
    mission-section(key="about-mission")
      // title
      .container
        .row
          .col-md-8.offset-lg-0.offset-md-1
            page-title(title="Our mission is to make travel agents’ lives easier through our powerfully simple software." breadcrumb="Our Story")
    people-section(:people="people" key="about-people")
    blog-section(:posts="posts" key="about-blog")
      .container.text-center
        .about__title.mb-5 Press

</template>

<static-query>
{
    metadata {
      siteName
      siteDescription
      siteUrl
    }
    news:yaml(path:"/data/news/") {
      data {
        id
        title
        author
        image_url
        url
      }
    }

    people:yaml(path:"/data/people/") {
      data {
        id
        title
        name
        description
        image_url
      }
    }
}
</static-query>

<script>
import get from 'lodash/get';
import PageTitle from '~/components/PageTitle';
import MissionSection from '~/components/MissionSection';
import BlogSection from '~/components/BlogSection';
import PeopleSection from '~/components/PeopleSection';

export default {
  name: 'AboutPage',
  metaInfo() {
    const { metadata } = this.$static;
    return {
      title: 'About us',
      meta: [
        {
          key: 'og:title',
          property: 'og:title',
          content: `${metadata.siteName} - About us`
        },
        {
          key: 'og:url',
          property: 'og:url',
          content: metadata.siteUrl + this.$route.path
        }
      ]
    };
  },
  components: { PageTitle, MissionSection, BlogSection, PeopleSection },
  computed: {
    posts() {
      return get(this, '$static.news.data');
    },
    people() {
      return get(this, '$static.people.data');
    }
  }
};
</script>

<style lang="scss">
@import 'mixins';

.about__title {
  font-size: 45px;
  font-weight: bold;
  @include media-breakpoint-down(sm) {
    font-size: 20px;
    text-align: center;
  }
}
.about-page {
  .page-title__title {
    text-align: left;
  }
  .page-title__breadcrumb {
    text-align: left;
  }
}
</style>
