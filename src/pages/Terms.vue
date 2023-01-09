<template lang="pug">
  layout.terms
    section(key="terms-page")
      .container
        .row
          //- left
          .col-lg-3.position-relative.d-none.d-lg-block
            ul.sticky-top.terms__nav
              li 
                g-link(to="/terms/#terms") Terms of Service
              li 
                g-link(to="/terms/#security") Privacy and Security
              li 
                g-link(to="/terms/#third-party") Third Party Services
              li 
                g-link(to="/terms/#assignment") Assignment
              li 
                g-link(to="/terms/#law") Governing Law
              li 
                g-link(to="/terms/#arbitration") Arbirtration
              li 
                g-link(to="/terms/#agreement") Entire Agreement
              li 
                g-link(to="/terms/#waiver") No Waiver
              
          // right
          .col-lg-9.col-md-10.offset-md-1.offset-lg-0
            h1(id="terms") Terms of service
            p These Terms & Conditions govern your use of SION (or “we” or “us”) online and/or mobile applications and services, web, and software provided on or in connection with the service (collectively the “Service”). By accessing or using the Service, you signify that you have read, understood, and agree to be bound by this Terms & Conditions Agreement (“Agreement”), whether or not you are a registered user of our Service.


            p We may modify the Terms at any time, in our sole discretion. If we do so, we’ll let you know either by posting the modified Terms on the Site or App or through other communications. It’s important that you review the Terms whenever we modify them because if you continue to use the Services after we have posted modified Terms on the Site or App or have otherwise communicated that we have modified the Terms to you, you are indicating to us that you agree to be bound by the modified Terms. If you don’t agree to be bound by the modified Terms, then you may not use the Services anymore. Because our Services are evolving over time we may change or discontinue all or any part of the Services, at any time and without notice, at our sole discretion.

            h2(id="security") Privacy and Security

            p We care about the privacy of our Users. Please refer to our Privacy Policy for information on how we collect, use and disclose information from our users. By using the Service, you are consenting to have your personal data collected, used, transferred to and processed in the United States. SION cares about the integrity and security of your personal information and transfers data with SSL encryption. However, we cannot guarantee that unauthorized third parties will never be able to defeat our security measures or use your personal information for improper purposes. You acknowledge that you provide your personal information at your own risk.



            h2(id="third-party") Third Party Services

            p The Services may contain links to third-party websites or resources. We provide these links only as a convenience and are not responsible for the content, products or services on or available from those websites or resources or links displayed on such websites. You acknowledge sole responsibility for and assume all risk arising from, your use of any third-party websites or resources.


            h2(id="assignment") Assignment

            p This Agreement, and any rights and licenses granted hereunder, may not be transferred or assigned by you, but may be assigned by SION without restriction. Any attempted transfer or assignment in violation hereof shall be null and void.


            h2(id="law") Governing Law

            p You agree that: (i) the Service shall be deemed solely based in New York; and (ii) the Service shall be deemed a passive one that does not give rise to personal jurisdiction over SION, either specific or general, in jurisdictions other than New York. This Agreement shall be governed by the internal substantive laws of the State of New York, without respect to its conflict of laws principles. The application of the United Nations Convention on Contracts for the International Sale of Goods is expressly excluded. Except as otherwise agreed between the parties or as described in Section 14.B. below, any claim or dispute between you and SION that arises in whole or in part from the Service shall be decided exclusively by a court of competent jurisdiction located in New York County, New York, unless submitted to arbitration as set forth in the following paragraph.


            h2(id="arbitration") Arbitration

            p For any claim (excluding claims for injunctive or other equitable relief) under this Agreement where the total amount of the award sought is less than $10,000, the party requesting relief may elect to resolve the dispute through binding non-appearance-based arbitration. The party electing such arbitration shall initiate the arbitration through an established alternative dispute resolution ("ADR") provider mutually agreed upon by the parties. The ADR provider and the parties must comply with the following rules: a) the arbitration shall be conducted by telephone, online and/or be solely based on written submissions, as selected by the party initiating the arbitration; b) the arbitration shall not involve any personal appearance by the parties or witnesses unless otherwise mutually agreed by the parties; and c) any judgment on the award rendered by the arbitrator may be entered in any court of competent jurisdiction.


            h2(id="agreement") Entire Agreement/Severability

            p This Agreement, together with any amendments and any additional agreements you may enter into with SION in connection with the Service, shall constitute the entire agreement between you and SION concerning the Service. If any provision of this Agreement is deemed invalid by a court of competent jurisdiction, the invalidity of such provision shall not affect the validity of the remaining provisions of this Agreement, which shall remain in full force and effect.


            h2(id="waiver") No Waiver

            p No waiver of any term of this Agreement shall be deemed a further or continuing waiver of such term or any other term, and SION's failure to assert any right or provision under this Agreement shall not constitute a waiver of such right or provision.
</template>

<script>
export default {
  name: 'TermsPage',
  metaInfo: {
    title: 'Privacy & Terms'
  }
};
</script>

<style lang="scss">
@import 'mixins';
.terms {
  
  @include media-breakpoint-down(md) { font-size: 14px; }

  h1 {
    font-size: 45px;
    margin-bottom: $spacer;
    @include media-breakpoint-down(md) { font-size: 30px; }

  }
  h2 {
    font-size: 20px;
    margin-top: $spacer * 2;
    @include media-breakpoint-down(md) {font-size: 18px; }
  }
  &__nav {
    text-decoration: none;
    padding: 0;
    list-style-type: none;
    line-height: 2;
    top: 30px;
    a {
      color: color('text-gray');
      &.active--exact {
        color: color('primary');
      }
    }
  }
}
</style>
