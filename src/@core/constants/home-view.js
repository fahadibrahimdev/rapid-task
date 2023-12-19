import { siteName } from "@/@core/constants/site-info";

export const heroSectionContent = {
    heading: 'Your Service Provider is Ten Minutes Away!',
    subHeading: 'RapidTask- Where Customers Meet Solutions Instantly',
    text: 'RapidTask is your one-stop shop for finding independent contractors in an emergency rather than going through the hassle of calling service-providing corporations that can “squeeze you in next week”.',
    image: '/images/hero-image.webp',
    alt: 'Hero Section Image'
}


export const brandFeaturesContent = {
    heading: 'Single out Independent Service Providers Near Your Location.',
    subHeading: 'BROWSE RapidTask TODAY!',
    features: [
        {
            title: 'Find Home Service Contractors',
            description: 'Find contractors for a variety of home services.',
            icon: 'engineer-with-bag'
        },
        {
            title: 'Activity Feature',
            description: 'See service providers who are active and available for an immediate job.',
            icon: 'activity'
        },
        {
            title: 'Find Automotive Services',
            description: 'Find automotive mechanics and towing services in case of an emergency or when you get stranded in the middle of nowhere.',
            icon: 'engineer'
        },
        {
            title: 'Profile by Skillset',
            description: 'View profiles by the experience level and expertise of each service provider to get the perfect match.',
            icon: 'settings'
        },
    ]
}

export const brandSelectionContent = {
    heading: `Why Choose ${siteName}?`,
    descriptions: [
        'RapidTask is the first app of its kind to cater to emergency services for household jobs, and automotive and towing emergencies. It connects you with Independent contractors that are more affordable than large agencies with hefty markups. If you like a service provider who you can always reach out to them specifically for repeat business.',
        'The app allows users to search via skillsets, making it easier to find the best-suited match for a particular job. You can also view a contractor’s hourly rate from their profile to see if they fit your budget.',
        'RapidTask dodges the hassle with a convenient search model, and easy to use app that makes hiring service providers a breeze.'
    ],
}

export const benefitsContent = {
    heading: 'Sign up as a Service Provider!',
    text: 'RapidTask offers both home services as well as towing and mechanic services in one marketplace. You can detail your experience and expertise level on your profile for a steady stream of jobs near you every day.',
    benefits: [
        {
            title: 'Control Over Job Choices',
            description: 'With RapidTask you get more control over your gigs. You get to review every offer and can decide whether to accept or reject it.',
            icon: 'work-list'
        },
        {
            title: 'Myriad of Options Near You ',
            description: 'Users can view your profile according to the skills they are looking for and how much distance you would have to cover to reach their location.',
            icon: 'news-feed'
        },
        {
            title: 'Immediate Jobs',
            description: 'Turn on your activity feature to indicate to users near your location that you are available for jobs.',
            icon: 'clock'
        }
    ],
    image: '/images/benefits.webp',
    alt: 'Benefits Illustration'
}

export const faqsContent = {
    heading: 'Frequently Asked Questions',
    text: 'Want to know more about our services?',
    faqs: [
        {
            question: 'How will I know whether a contractor is available for immediate service?',
            answer: 'The answer will be here......',

        },
        {
            question: 'Is this app compatible with iOS or Android?',
            answer: 'The answer will be here.........',

        },
        {
            question: 'What do I do if I experience a problem with the app?',
            answer: 'The answer will be here.........',
        }
    ]
}

export const CTOSectionContent = {
    heading: 'Find a Professional Now!',
    text: 'Download RapidTask and get a contractor to your doorstep immediately.'
}

const date = new Date()
export const footerContent = {
    supportCard: {
        heading: 'Help and Support',
        subHeading: 'User questions and feedback',
        text: 'Feel free to email us for any questions or feedback you would like to provide.'
    },
    socialIcons: [
        {
            icon: 'instagram',
            link: '',
        },
        {
            icon: 'facebook',
            link: '',
        },
        {
            icon: 'twitter',
            link: '',
        }
    ],
    copyRightNotice: `© ${date.getFullYear()} ${siteName}. All Rights  Reserved`,
}

export const buttonsLabel = {
    CTOBtn: 'Sign up',
    whyUsBtn: `Why ${siteName}?`,
    ctaBtn: 'Download App',
    accent: 'Get Started'
}

export const menuNavLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Features', sectionId: 'features' },
    { label: `Why ${siteName}?`, sectionId: 'whyUs' }
]
