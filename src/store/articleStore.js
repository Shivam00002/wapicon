import { create } from 'zustand';

const mockArticles = {
    "display-name-approval": {
        id: 1,
        title: "How to Get Display Name Approved?",
        publishDate: "2025-03-31",
        lastUpdated: "2025-04-20",
        ratingCount: { total: 1, helpful: 1 },
        content: [
            {
                type: "paragraph",
                content: "After adding your phone number and verifying your business, the next step to increase your daily messaging limit to 1,000 messages per day is to get your display name approved by WhatsApp."
            },
            {
                type: "heading",
                level: 2,
                content: "What is a Display Name?"
            },
            {
                type: "paragraph",
                content: "The display name is what your customers will see when you send them messages. It's an important part of your brand identity on WhatsApp. A clear, recognizable display name helps customers identify your business and builds trust."
            },
            {
                type: "heading",
                level: 2,
                content: "Display Name Requirements"
            },
            {
                type: "list",
                style: "unordered",
                items: [
                    "Must reflect your business name or brand",
                    "Cannot contain promotional language or special characters",
                    "Should be between 3-20 characters long",
                    "Must comply with WhatsApp's Business Naming Guidelines"
                ]
            },
            {
                type: "heading",
                level: 2,
                content: "Submission Process"
            },
            {
                type: "paragraph",
                content: "When you add your phone number (with a display name) during API setup, the name is automatically sent to WhatsApp for review. It may take up to 24 hours for the approval process to complete."
            },
            {
                type: "heading",
                level: 2,
                content: "Checking Approval Status"
            },
            {
                type: "list",
                style: "ordered",
                items: [
                    "Log in to your Wapikon dashboard",
                    "Navigate to \"Settings\" > \"Business Profile\"",
                    "Look for the \"Display Name Status\" field",
                    "The status will show as either \"Pending\", \"Approved\", or \"Rejected\""
                ]
            },
            {
                type: "heading",
                level: 2,
                content: "What to Do If Your Display Name is Rejected"
            },
            {
                type: "paragraph",
                content: "If your display name is rejected, WhatsApp will usually provide a reason. Common reasons include:"
            },
            {
                type: "list",
                style: "unordered",
                items: [
                    "Name doesn't match your business name",
                    "Contains promotional language like \"Best\" or \"Top\"",
                    "Contains special characters or excessive capitalization",
                    "Violates WhatsApp's naming policies"
                ]
            },
            {
                type: "paragraph",
                content: "In case of rejection, you can submit a new display name through your Wapikon dashboard. Go to \"Settings\" > \"Business Profile\" and click on \"Edit Display Name\" to submit a new one."
            },
            {
                type: "heading",
                level: 2,
                content: "Benefits of an Approved Display Name"
            },
            {
                type: "paragraph",
                content: "With an approved display name:"
            },
            {
                type: "list",
                style: "unordered",
                items: [
                    "Your daily messaging limit increases to 1,000 messages",
                    "Customers can easily identify your business",
                    "You build trust and brand recognition",
                    "You can create a more professional presence on WhatsApp"
                ]
            },
            {
                type: "heading",
                level: 2,
                content: "Next Steps After Approval"
            },
            {
                type: "paragraph",
                content: "Once your display name is approved, you should:"
            },
            {
                type: "list",
                style: "ordered",
                items: [
                    "Set up your business profile with a logo and description",
                    "Create message templates for common communications",
                    "Set up automation workflows for efficient customer service",
                    "Begin engaging with your customers at scale"
                ]
            },
            {
                type: "paragraph",
                content: "For any issues with the display name approval process, contact our support team through the Wapikon dashboard or submit a ticket for personalized assistance."
            }
        ],
        relatedArticles: [
            {
                id: 2,
                title: "Verify Your Meta Business Account",
                slug: "verify-meta-business-account"
            },
            {
                id: 6,
                title: "What is WhatsApp Cloud API?",
                slug: "what-is-whatsapp-cloud-api"
            },
            {
                id: 3,
                title: "Understanding How Message Credits Work",
                slug: "message-credits"
            }
        ],
        next: {
            title: "Verify Your Meta Business Account",
            slug: "verify-meta-business-account"
        },
        prev: null
    },
    "verify-meta-business-account": {
        id: 2,
        title: "Verify Your Meta Business Account",
        publishDate: "2025-03-31",
        lastUpdated: "2025-04-15",
        ratingCount: { total: 0, helpful: 0 },
        content: [
            {
                type: "paragraph",
                content: "After you set up your WhatsApp Cloud API, you can immediately start using our tool for sending and receiving messages. However, until you verify your business and get your Display Name approved, WhatsApp restricts you to sending only up to 250 messages per day."
            },
            {
                type: "paragraph",
                content: "You can increase this limit to 1,000 messages per day by completing the business verification process with Meta. This guide will walk you through the verification steps."
            },
            {
                type: "heading",
                level: 2,
                content: "Business Verification Requirements"
            },
            {
                type: "list",
                style: "unordered",
                items: [
                    "Active Meta Business Manager account",
                    "Business documentation (registration certificate, tax documents, etc.)",
                    "Active phone number for verification",
                    "Business address details"
                ]
            },
            {
                type: "heading",
                level: 2,
                content: "Verification Process Steps"
            },
            {
                type: "list",
                style: "ordered",
                items: [
                    "Log in to your Meta Business Manager account",
                    "Navigate to 'Security Center' > 'Verification'",
                    "Click on 'Start Verification'",
                    "Provide the required business information",
                    "Upload necessary documentation",
                    "Complete phone verification"
                ]
            },
            {
                type: "paragraph",
                content: "The verification process typically takes 1-5 business days. You'll receive an email notification once your business has been verified."
            }
        ],
        relatedArticles: [
            {
                id: 1,
                title: "How to Get Display Name Approved?",
                slug: "display-name-approval"
            },
            {
                id: 3,
                title: "Understanding How Message Credits Work",
                slug: "message-credits"
            }
        ],
        next: {
            title: "Understanding How Message Credits Work",
            slug: "message-credits"
        },
        prev: {
            title: "How to Get Display Name Approved?",
            slug: "display-name-approval"
        }
    },
    "message-credits": {
        id: 3,
        title: "Understanding How Message Credits Work",
        publishDate: "2025-03-31",
        lastUpdated: "2025-04-10",
        ratingCount: { total: 0, helpful: 0 },
        content: [
            {
                type: "paragraph",
                content: "Message Sending: When you send a message using our service, it costs you 1 credit per message sent. Whether you are reaching out to clients, customers, or team members, each individual message sent counts as one credit."
            },
            {
                type: "paragraph",
                content: "Message Receiving: Similarly, when you receive a message, it also consumes 1 credit per message received. This ensures that your account is properly tracked for usage and billing purposes."
            },
            {
                type: "heading",
                level: 2,
                content: "Credit Allocation"
            },
            {
                type: "paragraph",
                content: "Each subscription plan comes with a specific number of credits allocated monthly. Once you've used all your credits, you'll need to purchase additional credits or wait for your next billing cycle for your allocation to refresh."
            },
            {
                type: "heading",
                level: 2,
                content: "Monitoring Usage"
            },
            {
                type: "paragraph",
                content: "You can monitor your credit usage in real-time through your Wapikon dashboard. Navigate to 'Billing' > 'Usage' to see your current credit status and historical usage patterns."
            }
        ],
        relatedArticles: [
            {
                id: 1,
                title: "How to Get Display Name Approved?",
                slug: "display-name-approval"
            },
            {
                id: 2,
                title: "Verify Your Meta Business Account",
                slug: "verify-meta-business-account"
            }
        ],
        next: {
            title: "WhatsApp API Pricing Compared",
            slug: "pricing-comparison"
        },
        prev: {
            title: "Verify Your Meta Business Account",
            slug: "verify-meta-business-account"
        }
    }
};

const articlesList = [
    {
        id: 1,
        title: "How to Get Display Name Approved?",
        date: "2025-03-31",
        excerpt:
            "After adding your phone number and verifying your business, the next step to increase your daily messaging limit to 1,000 messages per day, you need to get your display name approved by WhatsApp. When you add your phone number (with a display name) during API setup, the name is automatically sent to WhatsApp for review. It may take up to 24 h...",
        rating: { helpful: 1, total: 1 },
        path: "/whatsapp-business-api/display-name-approval",
        slug: "display-name-approval",
    },
    {
        id: 2,
        title: "Verify Your Meta Business Account",
        date: "2025-03-31",
        excerpt:
            "After you set up your WhatsApp Cloud API, you can immediately start using our tool for sending and receiving messages. However, until you verify your business and get your Display Name approved, WhatsApp restricts you to sending only up to 250 messages per day.You can increase this limit to 1,000 messages per day by completing the business ver...",
        rating: { helpful: 0, total: 0 },
        path: "/whatsapp-business-api/verify-meta-business-account",
        slug: "verify-meta-business-account",
    },
    {
        id: 3,
        title: "Understanding How Message Credits Work",
        date: "2025-03-31",
        excerpt:
            "Message SendingWhen you send a message using our service, it costs you 1 credit per message sent. Whether you are reaching out to clients, customers, or team members, each individual message sent counts as one credit.Message ReceivingSimilarly, when you receive a message, it also consumes 1 credit per message received. This ensures that your a...",
        rating: { helpful: 0, total: 0 },
        path: "/whatsapp-business-api/message-credits",
        slug: "message-credits",
    },
    {
        id: 4,
        title: "WhatsApp API Pricing Compared",
        date: "2025-03-31",
        excerpt:
            "The table below shows the official WhatsApp Cloud API pricing and the pricing charged by different tools in the market. The table only shows prices for marketing template messages in INR to compare the % markup difference. To see detailed pricing for all template categories and currencies click here.",
        rating: { helpful: 0, total: 0 },
        path: "/whatsapp-business-api/pricing-comparison",
        slug: "pricing-comparison",
    },
    {
        id: 5,
        title: "Pricing Explained",
        date: "2025-03-31",
        excerpt:
            "We use the official WhatsApp Cloud APIs to provide all features, so there are two charges involved when you use Wapikon with the APIs: 1. Charges for our tool (As per the plan you opt for, billed monthly or yearly). We offer four different paid subscription plans and charge a small monthly or yearly fee for them to provide you with a tool to use t...",
        rating: { helpful: 0, total: 0 },
        path: "/whatsapp-business-api/pricing-explained",
        slug: "pricing-explained",
    },
    {
        id: 6,
        title: "What is WhatsApp Cloud API?",
        date: "2025-03-31",
        excerpt:
            "What is WhatsApp Cloud API? In this document, we'll help you understand what the WhatsApp Cloud API is and how to use it to reach out to your customers on WhatsApp. Meta (the company that owns WhatsApp) provides two different WhatsApp solutions...",
        rating: { helpful: 0, total: 0 },
        path: "/whatsapp-business-api/what-is-whatsapp-cloud-api",
        slug: "what-is-whatsapp-cloud-api",
    },
    {
        id: 7,
        title: "Wapikon Overview",
        date: "2025-03-30",
        excerpt:
            "Wapikon is a user-friendly online platform designed for businesses. It harnesses the power of the WhatsApp Cloud API to enable you to effortlessly send large volumes of WhatsApp marketing messages and essential notifications to your valued customers...",
        rating: { helpful: 0, total: 0 },
        path: "/whatsapp-business-api/wapikon-overview",
        slug: "wapikon-overview",
    },
    {
        id: 8,
        title: "How to Display WooCommerce Products Inside WhatsApp Using Wapikon",
        date: "2025-03-15",
        excerpt:
            "Integrating your WooCommerce store with WhatsApp is a powerful way to engage customers and showcase your products directly in their chat interface. With Wapikon, you can dynamically fetch WooCommerce product data and display it as interactive lists within WhatsApp...",
        rating: { helpful: 0, total: 0 },
        path: "/whatsapp-business-api/woocommerce-integration",
        slug: "woocommerce-integration",
    },
    {
        id: 9,
        title: "Use Google Sheet Data in WhatsApp and other Chatbot Replies using Wapikon",
        date: "2025-03-15",
        excerpt:
            "At Wapikon, we have taken your feedback into account and launched a straightforward yet incredibly functional and robust feature enabling you to extract Google Sheet data and integrate it into Chatbot responses...",
        rating: { helpful: 0, total: 0 },
        path: "/whatsapp-business-api/google-sheets-integration",
        slug: "google-sheets-integration",
    },
];

const useArticleStore = create((set) => ({

    articles: mockArticles,

    articleList: articlesList,

    updateArticleRating: (slug, isHelpful) => set((state) => {

        const updatedArticles = { ...state.articles };

        if (updatedArticles[slug]) {
            const article = { ...updatedArticles[slug] };
            const newRatingCount = { ...article.ratingCount };
            newRatingCount.total += 1;
            if (isHelpful) newRatingCount.helpful += 1;
            article.ratingCount = newRatingCount;
            updatedArticles[slug] = article;
        }

        const updatedArticleList = state.articleList.map((article) => {
            if (article.slug === slug) {
                const newRating = { ...article.rating };
                newRating.total += 1;
                if (isHelpful) newRating.helpful += 1;
                return { ...article, rating: newRating };
            }
            return article;
        });

        return {
            articles: updatedArticles,
            articleList: updatedArticleList,
        };
    }),

    getArticle: (slug) => {
        const store = useArticleStore.getState();
        return store.articles[slug];
    },

    searchArticles: (query) => {
        const store = useArticleStore.getState();
        if (!query) return store.articleList;

        const lowerQuery = query.toLowerCase();
        return store.articleList.filter(
            (article) =>
                article.title.toLowerCase().includes(lowerQuery) ||
                article.excerpt.toLowerCase().includes(lowerQuery)
        );
    }
}));

export default useArticleStore;