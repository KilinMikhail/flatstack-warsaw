export default {
  translations: {
    title: 'Flatstack Warsaw',
    metaDescription:
      'We are Flatstack and we are hiring software engineers for our Warsaw office. Join us!',
    metaKeywords:
      'flatstack, software engineer, ruby on rails, warsaw, hiring, relocate',
    'og:title': 'Flatstack Warsaw. Join us!',
    'og:description':
      'We are Flatstack and we are hiring software engineers for our Warsaw office. Join us!',
    logoAlt: 'Flatstack logo',
    menu: {
      vacancy: 'Vacancy',
      relocation: 'Relocation',
      feedbacks: 'Feedbacks',
      warsaw: 'Warsaw',
    },
    hero: {
      subtitle: ({ Highlight }) => (
        <>
          to Warsaw <Highlight>&#123;with relocation&#125;</Highlight>
        </>
      ),
      actions: {
        apply: 'Apply now',
      },
    },
    vacancy: {
      aboutFlatstack: 'About Flatstack',
      vacancyDescription:
        'We are looking for a Software Engineer experienced with a large codebase, complex architecture, Infrastructure as Code.',
      productSphere:
        'The product is at GRC sphere (Governance, Risk Management, Compliance) for global market.',
      role: {
        title: 'Role',
        description: () => (
          <ul>
            <li>
              Work on technically complex project with beautiful architecture
              and modern approach in development
            </li>
            <li>Apply open mind and experience for non-typical solutions</li>
            <li>Work in big international team of fullstackers</li>
            <li>
              Participate in new SPA development and maintenance of existing
              ones
            </li>
            <li>Divide monolith application into micro services</li>
            <li>
              Cover everything with testing: unit (Jest), integration (Cypress)
            </li>
            <li>
              Use different tools (infrastructure management, analytics, CI, and
              many others)
            </li>
            <li>
              Learn new technologies (e.g. Serverless, Terraform), share your
              knowledge and support colleagues in their growth (via code-review,
              sharing-sessions etc.)
            </li>
          </ul>
        ),
      },
      workOrganisation: {
        title: 'Work organisation',
        description: () => (
          <ul>
            <li>
              To dive deeper into the project you’ll have access to a library of
              video training about the project
            </li>
            <li>Well-built processes will allow you to focus on important</li>
            <li>Team’s support will make your integration smooth</li>
            <li>
              We do not micro-manage but expect results timely and with good
              quality
            </li>
            <li>
              You’ll get a feedback on the work done Great work is always a
              matter of pride!
            </li>
          </ul>
        ),
      },
      requirements: {
        title: 'Skills and experience',
        description: () => (
          <ul>
            <li>
              Stack: Rails, PostgreSQL, React.js., REST, TDD, Docker, AWS,
              Terraform, TypeScript, Serverless.
            </li>
            <li>
              You may not have all knowledges from the list, but should be eager
              to learn
            </li>
            <li>
              You create a high quality code and understand how it appears in
              production
            </li>
            <li>
              Your experience in building robust, scalable, and secure RESTful
              APIs will be an advantage
            </li>
            <li>
              You have creative ideas, a collaborative attitude, and a strong
              work ethic
            </li>
            <li>
              Your English covers the need to communicate about business needs,
              work organisation and technical details. Speaking, writing,
              reading are a must.
            </li>
          </ul>
        ),
      },
      benefits: {
        title: 'Benefits',
        description: () => (
          <ul>
            <li>
              38 PTO (paid time off) per year. You can use even 3 weeks in a row
              to travel, or 1-3 days to fix some household needs
            </li>
            <li>MacBook for every employee and monitor their condition</li>
            <li>Private healthcare yearly</li>
            <li>Budget for additional benefits of your choice</li>
            <li>Modern office</li>
            <li>Ability to work remotely (from Europe)</li>
            <li>
              Relocation leadership and support if you need it (see details
              below)
            </li>
          </ul>
        ),
      },
    },
    relocation: {
      title: 'Relocation',
    },
    feedbacks: {
      title: 'Feedbacks',
    },
    warsaw: {
      title: 'Warsaw',
    },
    shareModal: {
      triggerButtonText: 'Share',
      title: 'Share',
      copy: 'Copy',
      copySuccess: 'Copied!',
      copyFailed: 'Failed!',
      shareViaFacebook: 'Share via Facebook',
      shareViaVk: 'Share via VK',
      shareViaTwitter: 'Share via Twitter',
      shareViaLinkedIn: 'Share via LinkedIn',
    },
    recommendModal: {
      triggerButtonText: 'Recommend',
      title: 'Recommendation',
      form: {
        submit: 'Submit',
        agreement: ({ LinkComponent }) => (
          <>
            {'By clicking the "Submit" button, you agree with our '}
            <LinkComponent href="/privacy-policy-en.pdf" target="_blank">
              privacy policy
            </LinkComponent>
          </>
        ),
        aboutYou: 'About you',
        aboutRecommendee: 'About a person you recommend',
        yourName: 'Name',
        yourEmail: 'Email',
        yourPhone: 'Phone (optional)',
        recommendeeName: 'Name',
        recommendeeEmail: 'Email',
        recommendeePhone: 'Phone (optional)',
        recommendeeComment: 'Comment (optional)',
        error: 'Unexpected error occurred',
        successMessage:
          'Thank you for your recommendation. We will contact you and a person you recommended in near future.',
      },
    },
    join: {
      title: 'Join the team',
      form: {
        name: 'Name',
        email: 'Email',
        link: 'Link to your CV or profile in social media',
        cv: 'Attach CV',
        submit: 'Submit',
        agreement: ({ LinkComponent }) => (
          <>
            {'By clicking the "Submit" button, you agree with our '}
            <LinkComponent href="/privacy-policy-en.pdf" target="_blank">
              privacy policy
            </LinkComponent>
          </>
        ),
        error: 'Unexpected error occurred',
        successTitle: 'Thank you for your application!',
        successDescription:
          'I will reply to you shortly. Looking forward to meet you on the interview!',
        successOkButton: 'Okay',
      },
      contacts: {
        telegram: 'Telegram',
        whatsapp: 'WhatsApp',
      },
      hrMessage: 'Irina replies all the emails and message from you',
      hrPhotoAlt: 'Hr photo',
      shareLinkIconAlt: 'share link',
      recommendationDescription:
        'Get Apple Watch for successful recommendation',
      appleWatchImageAlt: 'Apple Watch',
    },
  },
};
