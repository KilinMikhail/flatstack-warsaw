const translations = {
  'og:title':
    'Vacancy – Fullstack Developer (Rails, TypeScript), Warsaw (relocation)',
  'og:description':
    'Looking for a big, technically complex project with beautiful architecture? Join our team in Warsaw! Relocation support for RU&CIS, remote work from EU only. MacBook, 38 vacation days, med.insurance.',
  hero: {
    subtitle: ({ Highlight }) => (
      <>
        to Warsaw <Highlight>&#123;with relocation&#125;</Highlight>
      </>
    ),
    salary: '$3,500–5,000 net',
    actions: {
      apply: 'Apply now',
    },
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
            Privacy Policy
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
      facebook: 'Facebook',
      email: 'join@flatstack.com',
    },
    hrMessage: 'Irina replies all the emails and message from you',
    hrPhotoAlt: 'Hr photo',
    shareLinkIconAlt: 'share link',
    recommendationDescription: 'Get Apple Watch for successful recommendation',
    appleWatchImageAlt: 'Apple Watch',
  },
  form: {
    requiredText: ({ AsteriskWrapper }) => (
      <>
        <AsteriskWrapper>*</AsteriskWrapper> - required fields
      </>
    ),
  },
};

// we need some values only during build-time while generating HTML
// and we don't need them in browser
if (typeof window === 'undefined') {
  Object.assign(translations, {
    title:
      'Vacancy – Fullstack Developer (Rails, TypeScript), Warsaw (relocation)',
    metaDescription:
      'Software Engineer vacancy at Flatstack in Warsaw office. We help with relocation for RU & CIS. Remote work is possible from EU only. Technically complex project, string team. Join us!',
    metaKeywords:
      'flatstack, software engineer, fullstack developer, ruby on rails, typescript, aws, job in Warsaw, vacancy, relocate',
    logoAlt: 'Flatstack logo',
    menu: {
      vacancy: 'Vacancy',
      company: 'Company',
      relocation: 'Relocation',
      feedbacks: 'Feedbacks',
      warsaw: 'Warsaw',
    },
    vacancy: {
      vacancyDescription:
        'We are looking for a Software Engineer experienced with a large codebase, complex architecture, Infrastructure as Code.',
      aboutProduct: {
        description:
          'The product we are working on is from the area of GRC (Governance, Risk Management, Compliance):',
        items: [
          'optimizes risk assessment processes',
          'automates regulatory compliance review processes (SOX, GDPR, etc.)',
          'optimizes the processes of developing corporate policies',
        ],
      },
      role: {
        title: 'Role',
        items: [
          'Work on technically complex project with beautiful architecture and modern approach in development',
          'Apply open mind and experience for non-typical solutions',
          'Work in big international team of fullstackers',
          'Participate in new SPA development and maintenance of existing ones',
          'Divide monolith application into micro services',
          'Cover everything with testing: unit (Jest), integration (Cypress)',
          'Use different tools (infrastructure management, analytics, CI, and many others)',
          'Learn new technologies (e.g. Serverless, Terraform), share your knowledge and support colleagues in their growth (via code-review, sharing-sessions etc.)',
        ],
      },
      workOrganisation: {
        title: 'Work organisation',
        items: [
          'To dive deeper into the project you’ll have access to a library of video training about the project',
          'Well-built processes will allow you to focus on important',
          'Team’s support will make your integration smooth',
          'We do not micro-manage but expect results timely and with good quality',
          'You’ll get a feedback on the work done. Great work is always a matter of pride!',
        ],
      },
      requirements: {
        title: 'Skills and experience',
        items: [
          'Stack: Rails, PostgreSQL, React.js., REST, TDD, Docker, AWS, Terraform, TypeScript, Serverless',
          'You may not have all knowledges from the list, but should be eager to learn',
          'You create a high quality code and understand how it appears and operates in production',
          'Your experience in building robust, scalable, and secure RESTful APIs will be an advantage',
          'You have creative ideas, a collaborative attitude, and a strong work ethic',
          'Your English covers the need to communicate about business needs, work organisation and technical details. Speaking, writing, reading are a must',
        ],
      },
      benefits: {
        title: 'Benefits',
        items: [
          '38 PTO (paid time off) per year. You can use even 3 weeks in a row to travel, or 1-3 days to fix some household needs',
          'MacBook for every employee',
          'Health insurance and year budget for private medical care',
          'Budget for additional benefits of your choice (conferences, courses, you can even buy a bicycle if you need it)',
          'Modern office',
          'Ability to work remotely (from Europe)',
          'Relocation leadership and support if you need it (see details below)',
        ],
      },
      apply: 'Apply now',
    },
    company: {
      title: 'About Flatstack',
      description:
        'We have been building software since 2006 for clients in the USA, Europe, Russia and other countries. Our projects make the difference and help people in real life. We are over 100 talented programmers, designers, project managers and QA, working together, creating awesomeness.',
      flatstackImageAlt: 'Flatstack team',
      flatstackWarsawImageAlt: 'Warsaw office',
      flatstackNewOrleansImageAlt: 'New Orleans office',
      flatstackKazanImageAlt: 'Kazan office',
    },
    relocation: {
      title: 'Relocation',
      imageAlt: 'Our team',
      alert:
        "To work on our cool project you must live in Europe. This is a client's requirement.",
      description:
        'Are you living in Russia, Belarus, Ukraine or other CIS country? We can help you with relocation to Poland (Warsaw).',
      listTitle: 'And we do it with care:',
      listItems: [
        'We help with visa, all relevant docs and its translation',
        'We help with accommodation and transfer',
        'We make a residence card for you',
        'We connect you with a lawyer who supports you with legal details',
        'We go through the whole process together to make it seamless and comfortable for you!',
      ],
    },
    feedbacks: {
      title: 'Feedbacks',
      items: [
        {
          title: 'Dima, Fullstack Developer',
          teamTime: '1 year in the team',
          feedback:
            'Young modern team of professionals, friendly atmosphere, you always feel support from the colleagues. \n' +
            'Flatstack is associated to me with modern IT company, with newest technologies and newest approaches in development, with very interesting ways of people and project management. If you work here, you always find interesting start-ups, trainings for your skills development and cool corporate events.',
        },
        {
          title: 'Alina, Fullstack Developer',
          teamTime: '3+ years in the team',
          feedback:
            'Funny, tight-knit team, interesting "not-boring" job, newest technologies are in use. Good office space, I value my colleagues and the atmosphere very much! ',
        },
        {
          title: 'Arkadii, Fullstack Developer',
          teamTime: '7+ years in the team',
          feedback:
            'Cool client and the project. Cool cut-of-the-edge technologies. Cool processes that really work. \n' +
            'Here you can grow easily and gain diverse and varied experience. Comfortable and well organised relocation to Poland. Overall everything is well democratic.',
        },
        {
          title: 'Askar, Fullstack Developer',
          teamTime: '9+ years in the team',
          feedback:
            "Good office, good colleagues, fruits every Wednesday, democratic work organisation. The decisions made are justified and reasoned criticism will always be heard. That's what I experienced here. \n" +
            'Flatstack is associated to me with people who I was lucky to work with, with professionals in their field and with smart guys.',
        },
      ],
    },
    warsaw: {
      title: 'Visit us in Warsaw',
      description:
        'We are working in the modern office, where you will always find the right atmosphere for your tasks, whether you need a solitude place or need to switch your mind. Here we have parking places for bikes, cafe zone, swing and even sleepy room with climate control.',
      address: 'Warsaw, Konstruktorska 11, 02-673',
      imageAlt: 'Our Warsaw office',
    },
  });
}

export default {
  translations,
};
