<template>
  <router-view />
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
    siteUrl
    opengraphImageUrl
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    const { metadata } = this.$static;
    return {
      title: metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: metadata.siteDescription
        },
        {
          key: 'og:title',
          property: 'og:title',
          content: metadata.siteName
        },
        {
          key: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: metadata.siteDescription
        },
        {
          key: 'og:image',
          property: 'og:image',
          content: metadata.opengraphImageUrl
        },
        {
          key: 'og:url',
          property: 'og:url',
          content: metadata.siteUrl
        },
        {
          key: "facebook-domain-verification",
          name: "facebook-domain-verification",
          content: "5zm7s3lsh4k8y3toroer2qrosfoi27"
        }
      ]
    };
  }
};
</script>
