<template lang="pug">
  section.contact
    slot
    .container
      div(v-if="sent") Message sent!
      form.contact-form(@submit="onSubmit" v-if="!sent")
        .row.align-items-end
          .col-lg-9.col-md-10.offset-md-1.offset-lg-0        
            .contact-form__field
              label(for="name") Enter your name
              input(placeholder="E.g: Martin" name="name" required :disabled="loading" v-model="name")
            .contact-form__field
              label(for="company") Enter your company
              input(placeholder="E.g: Soft LLC" name="company" required :disabled="loading" v-model="company")
            .contact-form__field
              label(for="email") Enter your email
              input(placeholder="E.g: example@mail.com" name="email" type="email" required :disabled="loading" v-model="email")
            .contact-form__field
              label(for="text") How can we help?
              textarea(required name="text"  placeholder="Type here..." v-model="text" rows="8" :disabled="loading")
          .col-lg-3.col-md-10.offset-md-1.offset-lg-0.mt-lg-0.mt-md-4.mt-4    
            button.btn.btn-primary( type="submit" name="text" v-model="text" style="width: 100%;" :disabled="loading") {{loading ? 'Sending' : 'Send message'}}
</template>

<static-query>
{
  metadata {
    contactFormApiUrl
    contactFormSubjectTemplate
  }
}
</static-query>

<script>
import axios from 'axios';
import mustache from 'mustache';

export default {
  name: 'ContactForm',
  data() {
    return {
      name: '',
      email: '',
      company: '',
      text: '',
      loading: false,
      sent: false,
      response: null
    };
  },
  methods: {
    async onSubmit(e) {
      const {
        contactFormApiUrl,
        contactFormSubjectTemplate
      } = this.$static.metadata;
      console.log(contactFormApiUrl)
      e.preventDefault();
      try {
        this.loading = true;
        this.error = false;
        const data = {
          name: this.name,
          email: this.email,
          company: this.company,
          message: this.text
        };
        data.subject = mustache.render(contactFormSubjectTemplate, data);
        console.log('Sending email', data);
        const res = await axios.post(contactFormApiUrl, data);
        this.sent = true;
        console.log('message sent', res);
      } catch (err) {
        console.log('send error', err);
        this.loading = false;
        this.error = true;
      }
    }
  },
  mounted() {
    console.log(this.$static)
  }
};
</script>

<style lang="scss">
@import 'variables';
$input-bg: #f8f8f8;
$label-color: color('text-gray');
$radius: 5px;

.contact-form {
  &__field {
    margin-bottom: $spacer * 2;
    line-height: 1; /* crucial for bottom padding 0 !!! */

    &:last-child {
      margin-bottom: 0;
    }

    label {
      display: block;
      margin-bottom: $spacer/2;
      color: $label-color;
      font-size: 14px;
    }
    input,
    textarea {
      padding: $spacer * 0.75 $spacer * 1.5;
      outline: 0;
      border: none;
      width: 100%;
      border-radius: $radius;
      background: $input-bg;
      font-size: 16px;

      &::placeholder {
        color: color('text-gray');
      }
    }
  }
}
</style>
