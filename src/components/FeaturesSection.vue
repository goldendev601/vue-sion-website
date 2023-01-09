<template lang="pug">
  section.features
    .container
      .row.align-items-center
        
        // Mobile image
        .col-lg-5.offset-lg-1.d-none.d-block.d-lg-none.text-md-center
          img.features__image(src="images/features/gif-1.gif")


        .col-lg-5.col-md-10.offset-md-1.offset-lg-1
          .features__title Commissions that track themselves.
          .features__description Once a booking is in SION, we take care of the rest—payment status, commission split, even supplier invoicing. And with everything just a few keystrokes away, the only question is, What will you do with all that free time?
      
        
        // Desktop image
        .col-lg-5.offset-lg-0.d-none.d-lg-block.offset-lg-0
          img.features__image(src="/images/features/gif-1.gif")
      
      // spacer
      .my-5.features__mobile-spacer
      
      .row.align-items-center
        .col-lg-5.text-md-center.col-md-10.offset-md-1.offset-lg-0
          img.features__image(src="/images/features/gif-2.gif")
        .col-lg-5.offset-lg-0.col-md-10.offset-md-1.offset-lg-0
          .features__title Get paid. Every time.
          .features__description No more missing, unclaimed, or unmatched payments. With SION, you get total visibility across your entire business, whether you are flying solo or an agency with hundreds of independent contractors.    
    
      // spacer
      .my-5.features__mobile-spacer
    
    
      .row.align-items-center
        
        // Mobile image
        .col-lg-5.offset-lg-1.d-none.d-block.d-lg-none.text-md-center
          img.features__image(src="/images/features/gif-3.gif")


        .col-lg-5.col-md-10.offset-md-1.offset-lg-1
          .features__title Create invoices with one click.
          .features__description You can also create and send your invoices with just one click. All you need to do is access the booking you want to create the invoice for and then click on “Generate Invoice”. 
        
        // Desktop image
        .col-lg-5.offset-lg-0.d-none.d-lg-block.offset-lg-0
          img.features__image(src="/images/features/gif-3.gif")
    
    // Bullets
    .my-lg-5.my-md-4.my-5
    .container
      .row.justify-content-center
        .col-xl-3.col-lg-4.col-md-10.offset-md-1.offset-lg-0
          icon-fast.bullets__icon 
          .bullets__title Fast and Efficient
          .bullets__description Commissions will be delivered to agents within 2 days from when they’re sent.  Currently the leading commission processors can hold onto the money for up to 6 weeks.
        .col-xl-3.col-lg-4.col-md-10.offset-md-1.offset-lg-0
          icon-organize.bullets__icon 
          .bullets__title Organizes all your bookings
          .bullets__description Once a booking is in SION, we take care of the rest—payment status, commission split, even supplier invoicing.
        .col-xl-3.col-lg-4.col-md-10.offset-md-1.offset-lg-0
          icon-automate.bullets__icon 
          .bullets__title Automates all your tasks
          .bullets__description The status and details of each invoice are automatically updated when changes are made.  Once completed, SION processes the commission payment, all in one place.
</template>

<script>
import IconFast from "~/assets/svg/icon-1.svg";
import IconOrganize from "~/assets/svg/icon-2.svg";
import IconAutomate from "~/assets/svg/icon-3.svg";

export default {
  name: "FeaturesSection",
  components: { IconFast, IconOrganize, IconAutomate }
};
</script>

<style lang="scss">
@import "mixins";

.features {
  &__title {
    font-size: 35px;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 2rem;
    @include media-breakpoint-down(md) {
      margin-top: $spacer * 3;
    }
    @include media-breakpoint-down(sm) {
      font-size: 24px;
      margin-top: $spacer * 2;
    }
  }
  &__image {
    max-width: 90%;
    @include media-breakpoint-down(md) {
      max-width: 70%;
    }
    @include media-breakpoint-down(md) {
      max-width: 100%;
    }
  }
  &__description {
    color: color("text-gray");
  }
  &__mobile-spacer {
    @include media-breakpoint-down(sm) {
      margin: 0;
      height: 90px;
    }
  }
}

.bullets {
  &__icon {
    width: 70px;
    margin-bottom: $spacer/2;
    @include media-breakpoint-down(sm) {
      margin-bottom: $spacer;
    }
  }

  &__title {
    font-size: 22px;
    margin-bottom: $spacer;
    font-weight: bold;
    @include media-breakpoint-down(sm) {
      font-size: 16px;
      margin-bottom: $spacer/2;
    }
  }
  &__description {
    color: color("text-gray");
    @include media-breakpoint-down(md) {
      margin-bottom: $spacer * 3;
    }
  }
}
</style>
