import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const Testimonials = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto w-full mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Client Testimonials
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          What our clients say about working with us
        </p>
      </div>
      
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </section>
  );
};

const testimonials = [
  {
    quote:
      "Working with this team transformed our customer service operations completely. The AI chatbot they developed handles over 85% of our queries autonomously, and our response times dropped from hours to seconds. Our customers love the instant support, and we've seen a 40% increase in satisfaction scores.",
    name: "Sarah Mitchell",
    title: "VP of Operations, TechFlow Solutions - San Francisco, USA",
  },
  {
    quote:
      "We were skeptical about AI at first, but the sentiment analysis system exceeded all expectations. It's helped us understand our customers on a deeper level and make data-driven decisions that actually matter. The ROI was evident within the first quarter.",
    name: "James Thornbury",
    title: "Marketing Director, Brightside Digital Agency - London, UK",
  },
  {
    quote:
      "The document processing solution has been a game changer for our legal firm. What used to take our team days now happens in minutes. The accuracy is impressive, and it's freed up our lawyers to focus on what they do best - practicing law, not paperwork.",
    name: "Sophie Dubois",
    title: "Managing Partner, Dubois & Associates - Paris, France",
  },
  {
    quote:
      "Exceptional work on our e-commerce recommendation engine. The team understood our business needs perfectly and delivered a solution that increased our average order value by 32%. Their support throughout the implementation was outstanding.",
    name: "Marc Van Doren",
    title: "CEO, BelgianCraft Commerce - Brussels, Belgium",
  },
  {
    quote:
      "As a healthcare provider, we needed AI that we could trust with sensitive patient data. The medical imaging analysis tool they built is not only incredibly accurate but also compliant with all regulations. It's become an essential part of our diagnostic workflow.",
    name: "Dr. Emma Johansson",
    title: "Chief Medical Officer, Nordic Health Group - Stockholm, Sweden",
  },
  {
    quote:
      "The multilingual chatbot they created for our international clients is remarkable. It handles queries in 12 languages seamlessly and maintains context across conversations. Our global reach has expanded significantly since implementation.",
    name: "Raj Patel",
    title: "Director of Customer Success, GlobalTech Innovations - Mumbai, India",
  },
  {
    quote:
      "I've worked with many AI consultants, but this was different. They didn't just deliver a product - they educated our team, ensured smooth adoption, and stayed involved through the transition. The predictive analytics dashboard they built has become central to our strategy meetings.",
    name: "Michael Chen",
    title: "COO, DataDrive Analytics - New York, USA",
  },
  {
    quote:
      "Our manufacturing process was riddled with inefficiencies until they implemented their AI quality control system. Defect rates dropped by 67%, and we're catching issues before they become expensive problems. Brilliant engineering work.",
    name: "Hans Mueller",
    title: "Production Manager, Precision Engineering GmbH - Munich, Germany",
  },
  {
    quote:
      "The AI-powered content moderation system has made our platform so much safer for our users. It's incredibly fast, nuanced in its understanding of context, and has reduced harmful content by over 90%. Our community team can now focus on building engagement rather than just policing.",
    name: "Lucy Campbell",
    title: "Community Director, ConnectHub - Manchester, UK",
  },
  {
    quote:
      "As a small business, we thought AI was out of our reach. They proved us wrong. The automated invoice processing system they built is affordable, easy to use, and has eliminated hours of manual data entry. Best investment we've made in years.",
    name: "Pierre Laurent",
    title: "Founder, Laurent Consulting - Lyon, France",
  },
  {
    quote:
      "The natural language processing tool they developed for our customer feedback analysis is pure magic. We're now able to identify trends and issues in real-time across thousands of reviews. It's transformed how we respond to customer needs.",
    name: "Anjali Sharma",
    title: "Head of Product, TechVentures India - Bangalore, India",
  },
  {
    quote:
      "Working with them felt like having an extended team member who genuinely cared about our success. The AI forecasting model they created has improved our inventory management dramatically - we've reduced waste by 45% and stockouts by 60%.",
    name: "Thomas Anderson",
    title: "Supply Chain Director, Nordic Retail Group - Copenhagen, Denmark",
  },
];

export default Testimonials;
