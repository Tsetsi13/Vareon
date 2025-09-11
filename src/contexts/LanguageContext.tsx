import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'gr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'nav.features': 'Features',
    'nav.howItWorks': 'How It Works',
    'nav.aboutUs': 'About Us',
    'nav.bookCall': 'Book a Call',
    
    // Hero Section
    'hero.badge': 'AI-Powered Business Growth',
    'hero.title': 'Transform Your Business with',
    'hero.titleHighlight': 'AI Automation',
    'hero.subtitle': 'Scale your operations with intelligent AI chat agents, automated lead generation, and seamless CRM integrations that work 24/7 to grow your business.',
    'hero.cta': 'Book a Call',
    'hero.stat1': 'Businesses Automated',
    'hero.stat2': 'Average Lead Increase',
    'hero.stat3': 'Automated Support',
    
    // Features Section
    'features.title': 'Powerful AI Features for',
    'features.titleHighlight': 'Modern Businesses',
    'features.subtitle': 'Our comprehensive AI automation platform provides everything you need to scale your business intelligently.',
    'features.leadCapture.title': 'Lead Capture & CRM Integration',
    'features.leadCapture.description': 'AI chatbots instantly capture leads from your website, ads, or landing pages and push them into your CRM so no lead ever slips through the cracks.',
    'features.leadCapture.bullets': ['Real-time lead syncing to your CRM', 'Smart tagging & lead scoring', 'Works seamlessly with HubSpot, Pipedrive, Salesforce'],
    'features.aiAppointment.title': 'AI Appointment Setting',
    'features.aiAppointment.description': 'Prospects book calls directly with AI chatbots with no phone calls and no delays. Every booking is confirmed automatically and synced to your calendar.',
    'features.aiAppointment.bullets': ['AI chatbot scheduling available 24/7', 'Instant email confirmations', 'Smooth booking flow with no back-and-forth'],
    'features.aiOutreach.title': 'AI Outreach Campaigns',
    'features.aiOutreach.description': 'Run personalized email, SMS, and LinkedIn campaigns that feel human, follow up automatically, and convert cold contacts into warm leads.',
    'features.aiOutreach.bullets': ['AI-written, human-like messaging', 'Smart follow-up sequences', 'Boosted open & reply rates'],
    'features.aiPhone.title': 'AI Phone Agents',
    'features.aiPhone.description': 'Follow up with new leads in minutes through natural-sounding AI callers that qualify, confirm, and re-engage.',
    'features.aiPhone.bullets': ['Human-like voice calls', 'Lead qualification & booking', 'Call recordings & CRM transcripts'],
    'features.aiChat.title': 'AI Chat Support',
    'features.aiChat.description': 'Provide 24/7 instant responses with chatbots trained on your data, answering FAQs, qualifying leads, and escalating when needed.',
    'features.aiChat.bullets': ['Trained on your site & docs', 'Lead qualification in chat', 'Escalation to live agents'],
    'features.workflow.title': 'Workflow & Social Automation',
    'features.workflow.description': 'Automate repetitive tasks and engage prospects where they spend time on social platforms and messaging apps.',
    'features.workflow.bullets': ['Automated task flows & reminders', 'AI-powered DM & social engagement', 'Streamlined customer journeys'],
    
    // How It Works
    'howItWorks.title': 'How It Works',
    'howItWorks.subtitle': 'Our proven 4-step process ensures successful AI automation implementation that delivers measurable results for your business.',
    'howItWorks.learnMore': 'Learn More About Our Process',
    'howItWorks.step1.title': 'Discovery & Analysis',
    'howItWorks.step1.description': 'We analyze your current processes, identify automation opportunities, and understand your specific business needs.',
    'howItWorks.step2.title': 'Custom Solution Design',
    'howItWorks.step2.description': 'Our team designs and configures AI automation solutions tailored to your workflows and requirements.',
    'howItWorks.step3.title': 'Implementation & Training',
    'howItWorks.step3.description': 'We deploy your AI systems, integrate with existing tools, and train your team for optimal usage.',
    'howItWorks.step4.title': 'Optimization & Growth',
    'howItWorks.step4.description': 'Continuous monitoring, performance optimization, and scaling to maximize your ROI and business growth.',
    
    // Call to Action
    'cta.title': 'Ready to Transform Your Business?',
    'cta.subtitle': 'Join hundreds of businesses that are already scaling with AI automation. Book a free consultation and discover your growth potential.',
    'cta.button': 'Book Your Free Call',
    'cta.feature1': 'Free consultation',
    'cta.feature2': 'No commitment required',
    'cta.stat1': 'Quick consultation',
    'cta.stat2': 'Tailored solutions',
    'cta.stat3': 'Guaranteed results',
    
    // Footer
    'footer.description': 'Helping businesses grow faster with intelligent AI automation, lead generation, and CRM solutions.',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.company': 'Company',
    'footer.copyright': '© 2025 Vereon. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy',
    
    // Consultation Page
    'consultation.title': 'Get Started with',
    'consultation.titleHighlight': 'AI Automation Services',
    'consultation.subtitle': 'Tell us about your business needs and we\'ll create a custom AI automation solution to solve your challenges and accelerate growth.',
    'consultation.whatYouGet': 'What You\'ll Get:',
    'consultation.customStrategy': 'Custom AI Strategy',
    'consultation.customStrategyDesc': 'Tailored automation plan for your specific business needs',
    'consultation.roiAnalysis': 'ROI Analysis',
    'consultation.roiAnalysisDesc': 'Clear projections on cost savings and revenue growth',
    'consultation.implementationRoadmap': 'Implementation Roadmap',
    'consultation.implementationRoadmapDesc': 'Step-by-step plan to deploy AI solutions in your business',
    'consultation.scheduleCall': 'Schedule Your Call',
    'consultation.fullName': 'Full Name',
    'consultation.email': 'Email',
    'consultation.selectedService': 'Selected Service',
    'consultation.selectService': 'Select a service',
    'consultation.companyName': 'Company Name',
    'consultation.tellUsNeeds': 'Tell us about your needs',
    'consultation.needsPlaceholder': 'What challenges are you looking to solve with AI automation? What\'s your current lead generation process?',
    'consultation.scheduleConsultation': 'Schedule Free Consultation',
    'consultation.disclaimer': 'We\'ll contact you within 24 hours to schedule your free consultation. No spam, no sales pressure.',
    'consultation.thankYou': 'Thank You!',
    'consultation.received': 'We\'ve received your consultation request.',
    'consultation.contactSoon': 'Our team will contact you within 24 hours to schedule your free consultation.',
    
    // About Us Page
    'aboutUs.title': 'About VareonFlow',
    'aboutUs.subtitle': 'We\'re on a mission to democratize AI automation, helping businesses of all sizes harness the power of artificial intelligence to scale operations, increase efficiency, and drive sustainable growth.',
    'aboutUs.mission': 'Our Mission',
    'aboutUs.missionText': 'At Vareon Flow, we believe that every business deserves access to cutting-edge AI technology. Our mission is to bridge the gap between complex artificial intelligence and practical business applications, making advanced automation accessible, affordable, and effective for companies ready to embrace the future of work.',
    'aboutUs.missionText': 'At Vereon, we believe that every business deserves access to cutting-edge AI technology. Our mission is to bridge the gap between complex artificial intelligence and practical business applications, making advanced automation accessible, affordable, and effective for companies ready to embrace the future of work.',
    'aboutUs.ourStory': 'Our Story',
    'aboutUs.storyText1': 'Founded in 2023 by a team of AI researchers and business automation experts, Vareon Flow emerged from a simple observation: while AI technology was advancing rapidly, most businesses struggled to implement and benefit from these innovations.',
    'aboutUs.storyText2': 'We started with a vision to create AI solutions that are not just powerful, but practical and accessible. Our founders, having worked with Fortune 500 companies and innovative startups, understood the gap between AI potential and real-world application.',
    'aboutUs.storyText3': 'Today, we help businesses worldwide automate processes, generate leads, and scale operations with intelligent AI systems that work around the clock.',
    'aboutUs.ourValues': 'Our Values',
    'aboutUs.valuesSubtitle': 'These core values guide everything we do, from product development to customer relationships.',
    'aboutUs.innovationFirst': 'Innovation First',
    'aboutUs.innovationDesc': 'We stay at the forefront of AI technology to deliver cutting-edge solutions that give our clients a competitive advantage.',
    'aboutUs.clientSuccess': 'Client Success',
    'aboutUs.clientSuccessDesc': 'Your success is our success. We measure our achievements by the growth and transformation we enable for your business.',
    'aboutUs.excellence': 'Excellence',
    'aboutUs.excellenceDesc': 'We deliver exceptional quality in every project, ensuring our AI solutions exceed expectations and drive real results.',
    'aboutUs.accessibility': 'Accessibility',
    'aboutUs.accessibilityDesc': 'We make advanced AI automation accessible to businesses of all sizes, democratizing the power of artificial intelligence.',
    'aboutUs.whyChoose': 'Why Choose Vereon',
    'aboutUs.whyChoose': 'Why Choose VareonFlow',
    'aboutUs.expertTeam': 'Expert Team',
    'aboutUs.expertTeamDesc': 'Our team combines deep AI expertise with practical business experience. We\'re engineers, data scientists, and business strategists united by a passion for helping businesses succeed through intelligent automation.',
    'aboutUs.readyTransform': 'Ready to Transform Your Business?',
    'aboutUs.joinBusinesses': 'Join hundreds of businesses that trust Vereon to automate their operations and accelerate growth.',
    'aboutUs.joinBusinesses': 'Join hundreds of businesses that trust VareonFlow to automate their operations and accelerate growth.',
    'aboutUs.backToHome': 'Back to Home',
    
    // How It Works Page
    'howItWorksPage.title': 'How It Works',
    'howItWorksPage.subtitle': 'Our proven 4-step methodology ensures successful AI automation implementation that delivers measurable results and transforms your business operations.',
    'howItWorksPage.provenProcess': 'Proven Process',
    'howItWorksPage.provenProcessDesc': 'Our methodology has been refined through 500+ successful implementations',
    'howItWorksPage.expertTeam': 'Expert Team',
    'howItWorksPage.expertTeamDesc': 'Dedicated AI specialists and automation engineers guide your project',
    'howItWorksPage.measurableResults': 'Measurable Results',
    'howItWorksPage.measurableResultsDesc': 'Average 300% increase in lead generation and 60% reduction in manual tasks',
    'howItWorksPage.discoveryAnalysis': 'Discovery & Analysis',
    'howItWorksPage.discoveryDesc': 'We begin with a comprehensive analysis of your current business processes, identifying bottlenecks, inefficiencies, and automation opportunities.',
    'howItWorksPage.keyActivities': 'Key Activities:',
    'howItWorksPage.customSolutionDesign': 'Custom Solution Design',
    'howItWorksPage.customSolutionDesc': 'Our expert team designs and configures AI automation solutions specifically tailored to your workflows and business requirements.',
    'howItWorksPage.implementationTraining': 'Implementation & Training',
    'howItWorksPage.implementationDesc': 'We deploy your AI systems, seamlessly integrate with existing tools, and provide comprehensive training for your team.',
    'howItWorksPage.optimizationGrowth': 'Optimization & Growth',
    'howItWorksPage.optimizationDesc': 'Continuous monitoring, performance optimization, and strategic scaling to maximize your ROI and drive sustainable business growth.',
    'howItWorksPage.implementationTimeline': 'Implementation Timeline',
    'howItWorksPage.readyGetStarted': 'Ready to Get Started?',
    'howItWorksPage.discussNeeds': 'Let\'s discuss your automation needs and create a custom implementation plan for your business.',
    
    // Feature Pages Common
    'featurePage.getStartedToday': 'Get Started Today',
    'featurePage.learnMore': 'Learn More',
    
    // AI Chat Agent Page
    'aiChatAgent.title': 'AI Chat Agent',
    'aiChatAgent.subtitle': 'Transform customer interactions with intelligent conversational AI that provides 24/7 support, qualifies leads, and delivers human-like experiences.',
    'aiChatAgent.revolutionize': 'Revolutionize Customer Communication',
    'aiChatAgent.description1': 'Our AI Chat Agent represents the next evolution in customer service technology. Built with advanced natural language processing and machine learning capabilities, it understands context, intent, and emotion to provide responses that feel genuinely human.',
    'aiChatAgent.description2': 'The system seamlessly integrates with your existing customer service workflows, automatically escalating complex issues to human agents when necessary while handling routine inquiries with remarkable efficiency.',
    'aiChatAgent.description3': 'Beyond basic customer service, our AI Chat Agent serves as a powerful lead qualification tool, engaging website visitors with personalized conversations that identify their needs, budget, and timeline.',
    'aiChatAgent.keyBenefits': 'Key Benefits & Use Cases',
    'aiChatAgent.availability247': '24/7 Availability',
    'aiChatAgent.availabilityDesc': 'Never miss a customer inquiry with round-the-clock automated support that maintains your brand voice.',
    'aiChatAgent.leadQualification': 'Lead Qualification',
    'aiChatAgent.leadQualificationDesc': 'Automatically identify and qualify potential customers through intelligent conversation flows.',
    'aiChatAgent.instantResponse': 'Instant Response',
    'aiChatAgent.instantResponseDesc': 'Eliminate wait times with immediate, accurate responses to customer questions and concerns.',
    'aiChatAgent.seamlessIntegration': 'Seamless Integration',
    'aiChatAgent.seamlessIntegrationDesc': 'Works with your existing CRM, helpdesk, and communication tools without disruption.',
    'aiChatAgent.realWorldApps': 'Real-World Applications',
    'aiChatAgent.ecommerceSupport': 'E-commerce Support',
    'aiChatAgent.ecommerceSupportDesc': 'Handle order inquiries, product questions, return requests, and shipping updates automatically while providing personalized product recommendations.',
    'aiChatAgent.saasCustomerSuccess': 'SaaS Customer Success',
    'aiChatAgent.saasCustomerSuccessDesc': 'Guide users through onboarding, troubleshoot common issues, and identify upselling opportunities based on usage patterns.',
    'aiChatAgent.leadGenerationApp': 'Lead Generation',
    'aiChatAgent.leadGenerationAppDesc': 'Engage website visitors with targeted questions, qualify prospects, and schedule sales calls automatically.',
    'aiChatAgent.readyDeploy': 'Ready to Deploy Your AI Chat Agent?',
    'aiChatAgent.transformService': 'Transform your customer service and lead generation with intelligent AI that works around the clock.',
    
    // AI Phone Callers Page
    'aiPhoneCallers.title': 'AI Phone Callers',
    'aiPhoneCallers.subtitle': 'Scale your outbound calling efforts with AI voice agents that make natural, persuasive calls to qualify prospects, schedule appointments, and handle customer service.',
    'aiPhoneCallers.humanLike': 'Human-Like Voice Interactions',
    'aiPhoneCallers.description1': 'Our AI Phone Callers utilize cutting-edge voice synthesis and natural language processing to conduct phone conversations that are virtually indistinguishable from human interactions.',
    'aiPhoneCallers.description2': 'The system is trained on thousands of successful sales conversations and can be customized to match your brand voice, sales methodology, and specific industry requirements.',
    'aiPhoneCallers.description3': 'Beyond prospecting, our AI Phone Callers excel at customer service tasks such as appointment confirmations, follow-up calls, satisfaction surveys, and payment reminders.',
    'aiPhoneCallers.keyBenefits': 'Key Benefits & Capabilities',
    'aiPhoneCallers.prospectQualification': 'Prospect Qualification',
    'aiPhoneCallers.prospectQualificationDesc': 'Automatically qualify leads through intelligent questioning and objection handling.',
    'aiPhoneCallers.appointmentSetting': 'Appointment Setting',
    'aiPhoneCallers.appointmentSettingDesc': 'Schedule meetings directly into calendars while handling scheduling conflicts and preferences.',
    'aiPhoneCallers.naturalSpeech': 'Natural Speech',
    'aiPhoneCallers.naturalSpeechDesc': 'Advanced voice synthesis creates conversations that sound completely human.',
    'aiPhoneCallers.crmIntegration': 'CRM Integration',
    'aiPhoneCallers.crmIntegrationDesc': 'Automatically update customer records and trigger follow-up workflows.',
    'aiPhoneCallers.provenApps': 'Proven Applications',
    'aiPhoneCallers.salesProspecting': 'Sales Prospecting',
    'aiPhoneCallers.salesProspectingDesc': 'Reach out to cold leads, qualify prospects, and book discovery calls with decision-makers automatically.',
    'aiPhoneCallers.appointmentConfirmations': 'Appointment Confirmations',
    'aiPhoneCallers.appointmentConfirmationsDesc': 'Reduce no-shows by calling to confirm appointments, reschedule conflicts, and send reminders.',
    'aiPhoneCallers.customerSurveys': 'Customer Surveys',
    'aiPhoneCallers.customerSurveysDesc': 'Conduct satisfaction surveys, gather feedback, and identify upselling opportunities through voice interactions.',
    'aiPhoneCallers.paymentCollections': 'Payment Collections',
    'aiPhoneCallers.paymentCollectionsDesc': 'Handle overdue payment reminders and collection calls with empathy and professionalism.',
    'aiPhoneCallers.scaleOutreach': 'Scale Your Phone Outreach Today',
    'aiPhoneCallers.multiplyCapacity': 'Multiply your calling capacity with AI agents that never get tired, never miss a call, and always follow your script perfectly.',
  },
  gr: {
    // Header
    'nav.features': 'Χαρακτηριστικά',
    'nav.howItWorks': 'Πώς Λειτουργεί',
    'nav.aboutUs': 'Σχετικά με Εμάς',
    'nav.bookCall': 'Κλείστε Ραντεβού',
    
    // Hero Section
    'hero.badge': 'Επιχειρηματική Ανάπτυξη με AI',
    'hero.title': 'Μεταμορφώστε την Επιχείρησή σας με',
    'hero.titleHighlight': 'Αυτοματισμό AI',
    'hero.subtitle': 'Κλιμακώστε τις λειτουργίες σας με έξυπνους AI chat agents, αυτοματοποιημένη δημιουργία leads και απρόσκοπτες ενσωματώσεις CRM που λειτουργούν 24/7 για να αναπτύξουν την επιχείρησή σας.',
    'hero.cta': 'Κλείστε Ραντεβού',
    'hero.stat1': 'Αυτοματοποιημένες Επιχειρήσεις',
    'hero.stat2': 'Μέση Αύξηση Leads',
    'hero.stat3': 'Αυτοματοποιημένη Υποστήριξη',
    
    // Features Section
    'features.title': 'Ισχυρά Χαρακτηριστικά AI για',
    'features.titleHighlight': 'Σύγχρονες Επιχειρήσεις',
    'features.subtitle': 'Η ολοκληρωμένη πλατφόρμα αυτοματισμού AI μας παρέχει όλα όσα χρειάζεστε για να κλιμακώσετε την επιχείρησή σας έξυπνα.',
    'features.aiChat.title': 'AI Chat Agents',
    'features.aiChat.description': 'Έξυπνη συνομιλιακή AI που χειρίζεται ερωτήσεις πελατών, προσδιορίζει leads και παρέχει υποστήριξη 24/7 με ανθρώπινες αλληλεπιδράσεις.',
    'features.aiPhone.title': 'AI Τηλεφωνικοί Πράκτορες',
    'features.aiPhone.description': 'Αυτοματοποιημένοι φωνητικοί πράκτορες που κάνουν εξερχόμενες κλήσεις, προσδιορίζουν προοπτικές, προγραμματίζουν ραντεβού και χειρίζονται εξυπηρέτηση πελατών με φυσική ομιλία.',
    'features.aiOutreach.title': 'AI Αυτοματοποιημένη Προσέγγιση',
    'features.aiOutreach.description': 'Έξυπνες καμπάνιες προσέγγισης πολλαπλών καναλιών που εξατομικεύουν μηνύματα, παρακολουθούν αυτόματα και βελτιστοποιούν την εμπλοκή σε email, SMS και κοινωνικές πλατφόρμες.',
    'features.leadGen.title': 'Δημιουργία Leads',
    'features.leadGen.description': 'Αυτοματοποιημένα συστήματα σύλληψης και ανάπτυξης leads που εντοπίζουν, εμπλέκουν και μετατρέπουν προοπτικές σε προσδιορισμένες ευκαιρίες.',
    'features.crm.title': 'Ενσωμάτωση CRM',
    'features.crm.description': 'Συνδεθείτε απρόσκοπτα με τα υπάρχοντα συστήματα CRM σας για να αυτοματοποιήσετε τη ροή δεδομένων, τη βαθμολόγηση leads και την παρακολούθηση του ταξιδιού πελατών.',
    'features.workflow.title': 'Αυτοματισμός Ροής Εργασίας',
    'features.workflow.description': 'Προσαρμοσμένες αυτοματοποιημένες ροές εργασίας που εξαλείφουν τις χειροκίνητες εργασίες και βελτιστοποιούν τις επιχειρηματικές διαδικασίες σας για μέγιστη αποδοτικότητα.',
    
    // How It Works
    'howItWorks.title': 'Πώς Λειτουργεί',
    'howItWorks.subtitle': 'Η αποδεδειγμένη διαδικασία 4 βημάτων μας εξασφαλίζει επιτυχημένη υλοποίηση αυτοματισμού AI που παρέχει μετρήσιμα αποτελέσματα για την επιχείρησή σας.',
    'howItWorks.learnMore': 'Μάθετε Περισσότερα για τη Διαδικασία μας',
    'howItWorks.step1.title': 'Ανακάλυψη & Ανάλυση',
    'howItWorks.step1.description': 'Αναλύουμε τις τρέχουσες διαδικασίες σας, εντοπίζουμε ευκαιρίες αυτοματισμού και κατανοούμε τις συγκεκριμένες επιχειρηματικές σας ανάγκες.',
    'howItWorks.step2.title': 'Σχεδιασμός Προσαρμοσμένης Λύσης',
    'howItWorks.step2.description': 'Η ομάδα μας σχεδιάζει και διαμορφώνει λύσεις αυτοματισμού AI προσαρμοσμένες στις ροές εργασίας και τις απαιτήσεις σας.',
    'howItWorks.step3.title': 'Υλοποίηση & Εκπαίδευση',
    'howItWorks.step3.description': 'Αναπτύσσουμε τα συστήματα AI σας, ενσωματώνουμε με υπάρχοντα εργαλεία και εκπαιδεύουμε την ομάδα σας για βέλτιστη χρήση.',
    'howItWorks.step4.title': 'Βελτιστοποίηση & Ανάπτυξη',
    'howItWorks.step4.description': 'Συνεχής παρακολούθηση, βελτιστοποίηση απόδοσης και κλιμάκωση για να μεγιστοποιήσουμε το ROI και την επιχειρηματική σας ανάπτυξη.',
    
    // Call to Action
    'cta.title': 'Έτοιμοι να Μεταμορφώσετε την Επιχείρησή σας;',
    'cta.subtitle': 'Ενταχθείτε σε εκατοντάδες επιχειρήσεις που ήδη κλιμακώνουν με αυτοματισμό AI. Κλείστε μια δωρεάν συμβουλευτική και ανακαλύψτε το δυναμικό ανάπτυξής σας.',
    'cta.button': 'Κλείστε τη Δωρεάν Κλήση σας',
    'cta.feature1': 'Δωρεάν συμβουλευτική',
    'cta.feature2': 'Χωρίς δέσμευση',
    'cta.stat1': 'Γρήγορη συμβουλευτική',
    'cta.stat2': 'Προσαρμοσμένες λύσεις',
    'cta.stat3': 'Εγγυημένα αποτελέσματα',
    
    // Footer
    'footer.description': 'Μεταμορφώνουμε επιχειρήσεις με έξυπνο αυτοματισμό AI, δημιουργία leads και λύσεις ενσωμάτωσης CRM.',
    'footer.services': 'Υπηρεσίες',
    'footer.contact': 'Επικοινωνία',
    'footer.company': 'Εταιρεία',
    'footer.copyright': '© 2025 Vereon. Όλα τα δικαιώματα διατηρούνται.',
    'footer.privacy': 'Πολιτική Απορρήτου',
    'footer.terms': 'Όροι Χρήσης',
    'footer.cookies': 'Πολιτική Cookies',
    
    // Consultation Page
    'consultation.title': 'Ξεκινήστε με',
    'consultation.titleHighlight': 'Υπηρεσίες Αυτοματισμού AI',
    'consultation.subtitle': 'Πείτε μας για τις επιχειρηματικές σας ανάγκες και θα δημιουργήσουμε μια προσαρμοσμένη λύση αυτοματισμού AI για να λύσουμε τις προκλήσεις σας και να επιταχύνουμε την ανάπτυξη.',
    'consultation.whatYouGet': 'Τι θα Λάβετε:',
    'consultation.customStrategy': 'Προσαρμοσμένη Στρατηγική AI',
    'consultation.customStrategyDesc': 'Προσαρμοσμένο σχέδιο αυτοματισμού για τις συγκεκριμένες επιχειρηματικές σας ανάγκες',
    'consultation.roiAnalysis': 'Ανάλυση ROI',
    'consultation.roiAnalysisDesc': 'Σαφείς προβλέψεις για εξοικονόμηση κόστους και αύξηση εσόδων',
    'consultation.implementationRoadmap': 'Χάρτης Υλοποίησης',
    'consultation.implementationRoadmapDesc': 'Βήμα προς βήμα σχέδιο για την ανάπτυξη λύσεων AI στην επιχείρησή σας',
    'consultation.scheduleCall': 'Προγραμματίστε την Κλήση σας',
    'consultation.fullName': 'Πλήρες Όνομα',
    'consultation.email': 'Email',
    'consultation.selectedService': 'Επιλεγμένη Υπηρεσία',
    'consultation.selectService': 'Επιλέξτε μια υπηρεσία',
    'consultation.companyName': 'Όνομα Εταιρείας',
    'consultation.tellUsNeeds': 'Πείτε μας για τις ανάγκες σας',
    'consultation.needsPlaceholder': 'Ποιες προκλήσεις θέλετε να λύσετε με τον αυτοματισμό AI; Ποια είναι η τρέχουσα διαδικασία δημιουργίας leads σας;',
    'consultation.scheduleConsultation': 'Προγραμματίστε Δωρεάν Συμβουλευτική',
    'consultation.disclaimer': 'Θα επικοινωνήσουμε μαζί σας εντός 24 ωρών για να προγραμματίσουμε τη δωρεάν συμβουλευτική σας. Χωρίς spam, χωρίς πιέσεις πωλήσεων.',
    'consultation.thankYou': 'Ευχαριστούμε!',
    'consultation.received': 'Λάβαμε το αίτημά σας για συμβουλευτική.',
    'consultation.contactSoon': 'Η ομάδα μας θα επικοινωνήσει μαζί σας εντός 24 ωρών για να προγραμματίσουμε τη δωρεάν συμβουλευτική σας.',
    
    // About Us Page
    'aboutUs.title': 'Σχετικά με το VareonFlow',
    'aboutUs.subtitle': 'Έχουμε την αποστολή να δημοκρατοποιήσουμε τον αυτοματισμό AI, βοηθώντας επιχειρήσεις κάθε μεγέθους να αξιοποιήσουν τη δύναμη της τεχνητής νοημοσύνης για να κλιμακώσουν τις λειτουργίες, να αυξήσουν την αποδοτικότητα και να οδηγήσουν τη βιώσιμη ανάπτυξη.',
    'aboutUs.mission': 'Η Αποστολή μας',
    'aboutUs.missionText': 'Στο Vareon Flow, πιστεύουμε ότι κάθε επιχείρηση αξίζει πρόσβαση σε τεχνολογία AI αιχμής. Η αποστολή μας είναι να γεφυρώσουμε το χάσμα μεταξύ της πολύπλοκης τεχνητής νοημοσύνης και των πρακτικών επιχειρηματικών εφαρμογών, κάνοντας τον προηγμένο αυτοματισμό προσβάσιμο, οικονομικό και αποτελεσματικό για εταιρείες έτοιμες να αγκαλιάσουν το μέλλον της εργασίας.',
    'aboutUs.missionText': 'Στο Vereon, πιστεύουμε ότι κάθε επιχείρηση αξίζει πρόσβαση σε τεχνολογία AI αιχμής. Η αποστολή μας είναι να γεφυρώσουμε το χάσμα μεταξύ της πολύπλοκης τεχνητής νοημοσύνης και των πρακτικών επιχειρηματικών εφαρμογών, κάνοντας τον προηγμένο αυτοματισμό προσβάσιμο, οικονομικό και αποτελεσματικό για εταιρείες έτοιμες να αγκαλιάσουν το μέλλον της εργασίας.',
    'aboutUs.ourStory': 'Η Ιστορία μας',
    'aboutUs.storyText1': 'Ιδρύθηκε το 2023 από μια ομάδα ερευνητών AI και ειδικών επιχειρηματικού αυτοματισμού, το Vareon Flow προέκυψε από μια απλή παρατήρηση: ενώ η τεχνολογία AI προχωρούσε ραγδαία, οι περισσότερες επιχειρήσεις δυσκολεύονταν να υλοποιήσουν και να επωφεληθούν από αυτές τις καινοτομίες.',
    'aboutUs.storyText2': 'Ξεκινήσαμε με ένα όραμα να δημιουργήσουμε λύσεις AI που δεν είναι μόνο ισχυρές, αλλά πρακτικές και προσβάσιμες. Οι ιδρυτές μας, έχοντας εργαστεί με εταιρείες Fortune 500 και καινοτόμες startups, κατανοούσαν το χάσμα μεταξύ του δυναμικού AI και της πραγματικής εφαρμογής.',
    'aboutUs.storyText3': 'Σήμερα, βοηθάμε επιχειρήσεις παγκοσμίως να αυτοματοποιήσουν διαδικασίες, να δημιουργήσουν leads και να κλιμακώσουν λειτουργίες με έξυπνα συστήματα AI που λειτουργούν όλο το εικοσιτετράωρο.',
    'aboutUs.ourValues': 'Οι Αξίες μας',
    'aboutUs.valuesSubtitle': 'Αυτές οι βασικές αξίες καθοδηγούν όλα όσα κάνουμε, από την ανάπτυξη προϊόντων έως τις σχέσεις με πελάτες.',
    'aboutUs.innovationFirst': 'Καινοτομία Πρώτα',
    'aboutUs.innovationDesc': 'Παραμένουμε στην πρωτοπορία της τεχνολογίας AI για να παρέχουμε λύσεις αιχμής που δίνουν στους πελάτες μας ανταγωνιστικό πλεονέκτημα.',
    'aboutUs.clientSuccess': 'Επιτυχία Πελάτη',
    'aboutUs.clientSuccessDesc': 'Η επιτυχία σας είναι η επιτυχία μας. Μετράμε τα επιτεύγματά μας από την ανάπτυξη και τη μεταμόρφωση που επιτρέπουμε στην επιχείρησή σας.',
    'aboutUs.excellence': 'Αριστεία',
    'aboutUs.excellenceDesc': 'Παρέχουμε εξαιρετική ποιότητα σε κάθε έργο, διασφαλίζοντας ότι οι λύσεις AI μας ξεπερνούν τις προσδοκίες και οδηγούν σε πραγματικά αποτελέσματα.',
    'aboutUs.accessibility': 'Προσβασιμότητα',
    'aboutUs.accessibilityDesc': 'Κάνουμε τον προηγμένο αυτοματισμό AI προσβάσιμο σε επιχειρήσεις κάθε μεγέθους, δημοκρατοποιώντας τη δύναμη της τεχνητής νοημοσύνης.',
    'aboutUs.whyChoose': 'Γιατί να Επιλέξετε το Vereon',
    'aboutUs.whyChoose': 'Γιατί να Επιλέξετε το VareonFlow',
    'aboutUs.expertTeam': 'Ειδική Ομάδα',
    'aboutUs.expertTeamDesc': 'Η ομάδα μας συνδυάζει βαθιά εμπειρογνωμοσύνη AI με πρακτική επιχειρηματική εμπειρία. Είμαστε μηχανικοί, επιστήμονες δεδομένων και επιχειρηματικοί στρατηγιστές ενωμένοι από το πάθος για να βοηθήσουμε τις επιχειρήσεις να πετύχουν μέσω έξυπνου αυτοματισμού.',
    'aboutUs.readyTransform': 'Έτοιμοι να Μεταμορφώσετε την Επιχείρησή σας;',
    'aboutUs.joinBusinesses': 'Ενταχθείτε σε εκατοντάδες επιχειρήσεις που εμπιστεύονται το Vereon για να αυτοματοποιήσουν τις λειτουργίες τους και να επιταχύνουν την ανάπτυξη.',
    'aboutUs.joinBusinesses': 'Ενταχθείτε σε εκατοντάδες επιχειρήσεις που εμπιστεύονται το VareonFlow για να αυτοματοποιήσουν τις λειτουργίες τους και να επιταχύνουν την ανάπτυξη.',
    'aboutUs.backToHome': 'Επιστροφή στην Αρχική',
    
    // How It Works Page
    'howItWorksPage.title': 'Πώς Λειτουργεί',
    'howItWorksPage.subtitle': 'Η αποδεδειγμένη μεθοδολογία 4 βημάτων μας εξασφαλίζει επιτυχημένη υλοποίηση αυτοματισμού AI που παρέχει μετρήσιμα αποτελέσματα και μεταμορφώνει τις επιχειρηματικές σας λειτουργίες.',
    'howItWorksPage.provenProcess': 'Αποδεδειγμένη Διαδικασία',
    'howItWorksPage.provenProcessDesc': 'Η μεθοδολογία μας έχει βελτιωθεί μέσω 500+ επιτυχημένων υλοποιήσεων',
    'howItWorksPage.expertTeam': 'Ειδική Ομάδα',
    'howItWorksPage.expertTeamDesc': 'Αφοσιωμένοι ειδικοί AI και μηχανικοί αυτοματισμού καθοδηγούν το έργο σας',
    'howItWorksPage.measurableResults': 'Μετρήσιμα Αποτελέσματα',
    'howItWorksPage.measurableResultsDesc': 'Μέση αύξηση 300% στη δημιουργία leads και 75% μείωση χειροκίνητων εργασιών',
    'howItWorksPage.discoveryAnalysis': 'Ανακάλυψη & Ανάλυση',
    'howItWorksPage.discoveryDesc': 'Ξεκινάμε με μια ολοκληρωμένη ανάλυση των τρεχουσών επιχειρηματικών διαδικασιών σας, εντοπίζοντας εμπόδια, αναποτελεσματικότητες και ευκαιρίες αυτοματισμού.',
    'howItWorksPage.keyActivities': 'Βασικές Δραστηριότητες:',
    'howItWorksPage.customSolutionDesign': 'Σχεδιασμός Προσαρμοσμένης Λύσης',
    'howItWorksPage.customSolutionDesc': 'Η ειδική ομάδα μας σχεδιάζει και διαμορφώνει λύσεις αυτοματισμού AI ειδικά προσαρμοσμένες στις ροές εργασίας και τις επιχειρηματικές σας απαιτήσεις.',
    'howItWorksPage.implementationTraining': 'Υλοποίηση & Εκπαίδευση',
    'howItWorksPage.implementationDesc': 'Αναπτύσσουμε τα συστήματα AI σας, ενσωματώνουμε απρόσκοπτα με υπάρχοντα εργαλεία και παρέχουμε ολοκληρωμένη εκπαίδευση για την ομάδα σας.',
    'howItWorksPage.optimizationGrowth': 'Βελτιστοποίηση & Ανάπτυξη',
    'howItWorksPage.optimizationDesc': 'Συνεχής παρακολούθηση, βελτιστοποίηση απόδοσης και στρατηγική κλιμάκωση για να μεγιστοποιήσουμε το ROI σας και να οδηγήσουμε τη βιώσιμη επιχειρηματική ανάπτυξη.',
    'howItWorksPage.implementationTimeline': 'Χρονοδιάγραμμα Υλοποίησης',
    'howItWorksPage.readyGetStarted': 'Έτοιμοι να Ξεκινήσετε;',
    'howItWorksPage.discussNeeds': 'Ας συζητήσουμε τις ανάγκες αυτοματισμού σας και να δημιουργήσουμε ένα προσαρμοσμένο σχέδιο υλοποίησης για την επιχείρησή σας.',
    
    // Feature Pages Common
    'featurePage.getStartedToday': 'Ξεκινήστε Σήμερα',
    'featurePage.learnMore': 'Μάθετε Περισσότερα',
    
    // AI Chat Agent Page
    'aiChatAgent.title': 'AI Chat Agent',
    'aiChatAgent.subtitle': 'Μεταμορφώστε τις αλληλεπιδράσεις πελατών με έξυπνη συνομιλιακή AI που παρέχει υποστήριξη 24/7, προσδιορίζει leads και παρέχει ανθρώπινες εμπειρίες.',
    'aiChatAgent.revolutionize': 'Επαναστατήστε την Επικοινωνία Πελατών',
    'aiChatAgent.description1': 'Ο AI Chat Agent μας αντιπροσωπεύει την επόμενη εξέλιξη στην τεχνολογία εξυπηρέτησης πελατών. Χτισμένος με προηγμένη επεξεργασία φυσικής γλώσσας και δυνατότητες μηχανικής μάθησης, κατανοεί το πλαίσιο, την πρόθεση και το συναίσθημα για να παρέχει απαντήσεις που αισθάνονται γνήσια ανθρώπινες.',
    'aiChatAgent.description2': 'Το σύστημα ενσωματώνεται απρόσκοπτα με τις υπάρχουσες ροές εργασίας εξυπηρέτησης πελατών σας, κλιμακώνοντας αυτόματα πολύπλοκα ζητήματα σε ανθρώπινους πράκτορες όταν είναι απαραίτητο, ενώ χειρίζεται τις συνήθεις ερωτήσεις με αξιοσημείωτη αποδοτικότητα.',
    'aiChatAgent.description3': 'Πέρα από τη βασική εξυπηρέτηση πελατών, ο AI Chat Agent μας λειτουργεί ως ένα ισχυρό εργαλείο προσδιορισμού leads, εμπλέκοντας τους επισκέπτες ιστοσελίδων με εξατομικευμένες συνομιλίες που εντοπίζουν τις ανάγκες, τον προϋπολογισμό και το χρονοδιάγραμμά τους.',
    'aiChatAgent.keyBenefits': 'Βασικά Οφέλη & Περιπτώσεις Χρήσης',
    'aiChatAgent.availability247': 'Διαθεσιμότητα 24/7',
    'aiChatAgent.availabilityDesc': 'Μη χάσετε ποτέ μια ερώτηση πελάτη με αυτοματοποιημένη υποστήριξη όλο το εικοσιτετράωρο που διατηρεί τη φωνή της μάρκας σας.',
    'aiChatAgent.leadQualification': 'Προσδιορισμός Leads',
    'aiChatAgent.leadQualificationDesc': 'Αυτόματος εντοπισμός και προσδιορισμός δυνητικών πελατών μέσω έξυπνων ροών συνομιλίας.',
    'aiChatAgent.instantResponse': 'Άμεση Απάντηση',
    'aiChatAgent.instantResponseDesc': 'Εξαλείψτε τους χρόνους αναμονής με άμεσες, ακριβείς απαντήσεις σε ερωτήσεις και ανησυχίες πελατών.',
    'aiChatAgent.seamlessIntegration': 'Απρόσκοπτη Ενσωμάτωση',
    'aiChatAgent.seamlessIntegrationDesc': 'Λειτουργεί με τα υπάρχοντα CRM, helpdesk και εργαλεία επικοινωνίας σας χωρίς διακοπή.',
    'aiChatAgent.realWorldApps': 'Εφαρμογές Πραγματικού Κόσμου',
    'aiChatAgent.ecommerceSupport': 'Υποστήριξη E-commerce',
    'aiChatAgent.ecommerceSupportDesc': 'Χειριστείτε ερωτήσεις παραγγελιών, ερωτήσεις προϊόντων, αιτήματα επιστροφής και ενημερώσεις αποστολής αυτόματα ενώ παρέχετε εξατομικευμένες συστάσεις προϊόντων.',
    'aiChatAgent.saasCustomerSuccess': 'Επιτυχία Πελάτη SaaS',
    'aiChatAgent.saasCustomerSuccessDesc': 'Καθοδηγήστε τους χρήστες μέσω του onboarding, αντιμετωπίστε κοινά προβλήματα και εντοπίστε ευκαιρίες upselling βάσει μοτίβων χρήσης.',
    'aiChatAgent.leadGenerationApp': 'Δημιουργία Leads',
    'aiChatAgent.leadGenerationAppDesc': 'Εμπλέξτε τους επισκέπτες ιστοσελίδων με στοχευμένες ερωτήσεις, προσδιορίστε προοπτικές και προγραμματίστε κλήσεις πωλήσεων αυτόματα.',
    'aiChatAgent.readyDeploy': 'Έτοιμοι να Αναπτύξετε τον AI Chat Agent σας;',
    'aiChatAgent.transformService': 'Μεταμορφώστε την εξυπηρέτηση πελατών και τη δημιουργία leads σας με έξυπνη AI που λειτουργεί όλο το εικοσιτετράωρο.',
    
    // AI Phone Callers Page
    'aiPhoneCallers.title': 'AI Τηλεφωνικοί Πράκτορες',
    'aiPhoneCallers.subtitle': 'Κλιμακώστε τις εξερχόμενες τηλεφωνικές σας προσπάθειες με AI φωνητικούς πράκτορες που κάνουν φυσικές, πειστικές κλήσεις για να προσδιορίσουν προοπτικές, να προγραμματίσουν ραντεβού και να χειριστούν εξυπηρέτηση πελατών.',
    'aiPhoneCallers.humanLike': 'Ανθρώπινες Φωνητικές Αλληλεπιδράσεις',
    'aiPhoneCallers.description1': 'Οι AI Τηλεφωνικοί Πράκτορές μας χρησιμοποιούν τεχνολογία αιχμής σύνθεσης φωνής και επεξεργασίας φυσικής γλώσσας για να διεξάγουν τηλεφωνικές συνομιλίες που είναι πρακτικά αδιάκριτες από ανθρώπινες αλληλεπιδράσεις.',
    'aiPhoneCallers.description2': 'Το σύστημα είναι εκπαιδευμένο σε χιλιάδες επιτυχημένες συνομιλίες πωλήσεων και μπορεί να προσαρμοστεί για να ταιριάζει με τη φωνή της μάρκας σας, τη μεθοδολογία πωλήσεων και τις συγκεκριμένες απαιτήσεις του κλάδου.',
    'aiPhoneCallers.description3': 'Πέρα από την προσπέκτινγκ, οι AI Τηλεφωνικοί Πράκτορές μας διαπρέπουν σε εργασίες εξυπηρέτησης πελατών όπως επιβεβαιώσεις ραντεβού, κλήσεις παρακολούθησης, έρευνες ικανοποίησης και υπενθυμίσεις πληρωμών.',
    'aiPhoneCallers.keyBenefits': 'Βασικά Οφέλη & Δυνατότητες',
    'aiPhoneCallers.prospectQualification': 'Προσδιορισμός Προοπτικών',
    'aiPhoneCallers.prospectQualificationDesc': 'Αυτόματος προσδιορισμός leads μέσω έξυπνων ερωτήσεων και χειρισμού αντιρρήσεων.',
    'aiPhoneCallers.appointmentSetting': 'Προγραμματισμός Ραντεβού',
    'aiPhoneCallers.appointmentSettingDesc': 'Προγραμματίστε συναντήσεις απευθείας σε ημερολόγια ενώ χειρίζεστε συγκρούσεις προγραμματισμού και προτιμήσεις.',
    'aiPhoneCallers.naturalSpeech': 'Φυσική Ομιλία',
    'aiPhoneCallers.naturalSpeechDesc': 'Η προηγμένη σύνθεση φωνής δημιουργεί συνομιλίες που ακούγονται εντελώς ανθρώπινες.',
    'aiPhoneCallers.crmIntegration': 'Ενσωμάτωση CRM',
    'aiPhoneCallers.crmIntegrationDesc': 'Αυτόματη ενημέρωση αρχείων πελατών και ενεργοποίηση ροών εργασίας παρακολούθησης.',
    'aiPhoneCallers.provenApps': 'Αποδεδειγμένες Εφαρμογές',
    'aiPhoneCallers.salesProspecting': 'Προσπέκτινγκ Πωλήσεων',
    'aiPhoneCallers.salesProspectingDesc': 'Επικοινωνήστε με κρύα leads, προσδιορίστε προοπτικές και κλείστε κλήσεις ανακάλυψης με αποφασιστικούς παράγοντες αυτόματα.',
    'aiPhoneCallers.appointmentConfirmations': 'Επιβεβαιώσεις Ραντεβού',
    'aiPhoneCallers.appointmentConfirmationsDesc': 'Μειώστε τις απουσίες καλώντας για επιβεβαίωση ραντεβού, επαναπρογραμματισμό συγκρούσεων και αποστολή υπενθυμίσεων.',
    'aiPhoneCallers.customerSurveys': 'Έρευνες Πελατών',
    'aiPhoneCallers.customerSurveysDesc': 'Διεξάγετε έρευνες ικανοποίησης, συλλέξτε σχόλια και εντοπίστε ευκαιρίες upselling μέσω φωνητικών αλληλεπιδράσεων.',
    'aiPhoneCallers.paymentCollections': 'Εισπράξεις Πληρωμών',
    'aiPhoneCallers.paymentCollectionsDesc': 'Χειριστείτε υπενθυμίσεις καθυστερημένων πληρωμών και κλήσεις εισπράξεων με ενσυναίσθηση και επαγγελματισμό.',
    'aiPhoneCallers.scaleOutreach': 'Κλιμακώστε την Τηλεφωνική σας Προσέγγιση Σήμερα',
    'aiPhoneCallers.multiplyCapacity': 'Πολλαπλασιάστε την ικανότητα κλήσεών σας με AI πράκτορες που δεν κουράζονται ποτέ, δεν χάνουν ποτέ κλήση και ακολουθούν πάντα το σενάριό σας τέλεια.',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};