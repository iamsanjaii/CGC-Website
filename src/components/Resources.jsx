import React from 'react';
// 1. I added 'Users' to this list at the top where it belongs
import { ExternalLink, Youtube, AlertTriangle, BookOpen, Heart, Shield, Brain, Users } from 'lucide-react';

const Resources = () => {
  const resourceCategories = [
    {
      title: "Stress & Anxiety",
      icon: <Brain size={24} />,
      items: [
        { title: "Techniques for Stress", url: "https://www.helpguide.org/mental-health/stress/stress-management" },
        { title: "4 Self-Help Techniques", url: "https://icallhelpline.org/4-self-help-techniques-for-when-you-are-stressed/" },
        { title: "Social Anxiety Safety Behaviors", url: "https://www.therapistaid.com/therapy-worksheet/social-anxiety-safety-behaviors/anxiety/none", desc: "Understand avoidance behaviors." },
        { title: "Overcoming Fear Skills", url: "https://www.psychologytoday.com/us/blog/dysfunction-interrupted/202101/the-7-skills-necessary-overcome-fear" },
      ]
    },
    {
      title: "Self-Esteem & Body Image",
      icon: <Heart size={24} />,
      items: [
        { title: "What is Self-Esteem?", url: "https://www.verywellmind.com/what-is-self-esteem-2795868" },
        { title: "Low Self-Esteem Guide", url: "https://therapyinanutshell.com/low-self-esteem/" },
        { title: "Improve Self-Esteem", url: "https://www.betterup.com/blog/how-to-improve-self-esteem" },
        { title: "Building Better Body Image", url: "https://health.clevelandclinic.org/building-a-better-body-image-as-an-adult" },
      ]
    },
    {
      title: "Relationships & Social Skills",
      icon: <Users size={24} />,
      items: [
        { title: "Making Friends as Adults", url: "https://www.psychologytoday.com/us/blog/prisons-and-pathos/202106/how-adults-can-make-and-keep-new-friends" },
        { title: "Communication in Relationships", url: "https://positivepsychology.com/communication-in-relationships/" },
        { title: "Setting Healthy Boundaries", url: "https://positivepsychology.com/great-self-care-setting-healthy-boundaries/" },
        { title: "Emotions Reference Sheet", url: "https://www.therapistaid.com/therapy-worksheet/body-image-info-sheet", desc: "Recognize and talk about feelings." },
      ]
    },
    {
      title: "Academic & Digital Life",
      icon: <BookOpen size={24} />,
      items: [
        { title: "Combat Digital Fatigue", url: "https://thriveglobal.com/stories/how-to-combat-digital-zoom-fatigue-burnout-tips/" },
        { title: "Study Tips (APA)", url: "https://www.apa.org/gradpsych/2011/11/study-smart" },
      ]
    },
    {
      title: "Mindfulness & Meditation",
      icon: <Youtube size={24} />,
      isVideo: true,
      items: [
        { title: "Trauma & Nervous System", url: "https://www.youtube.com/watch?v=ZdIQRxwT1I0" },
        { title: "JPMR Relaxation", url: "https://youtu.be/ihO02wUzgkc?si=6uuSNnJ722SrG2a4" },
        { title: "Box Breathing Short", url: "https://youtube.com/shorts/SYmYy5DDH90?si=5JLDaBH_YaVUTnEq" },
        { title: "4-7-8 Technique", url: "https://youtube.com/shorts/_fqr8XNubEI?si=xUGPGggNCEhIT8r1" },
        { title: "5 Min Mindfulness", url: "https://youtu.be/ssss7V1_eyA?si=HMrUB1pZ_xHiiZdS" },
        { title: "Loving Kindness", url: "https://youtu.be/d77XxkgnMc0?si=4olq1U2FukQR_D9T" },
      ]
    },
    {
      title: "Crisis & Healing",
      icon: <Shield size={24} />,
      items: [
        { title: "Alternatives to Self-Harm", url: "https://www.healthline.com/health/mental-health/self-harm-alternatives" },
        { title: "Understanding Grief", url: "https://www.healthline.com/health/stages-of-grief#acceptance" },
        { title: "Change Negative Thoughts", url: "https://www.verywellmind.com/how-to-change-negative-thinking-3024843" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-cgc-bg pb-20 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-cgc-purple mb-4">Self-Help Resources</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A curated collection of articles, worksheets, and videos to help you navigate day-to-day challenges.
          </p>
        </div>

        {/* DISCLAIMER BOX */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-12 rounded-r-lg shadow-sm">
          <div className="flex items-start gap-4">
            <AlertTriangle className="text-amber-500 flex-shrink-0 mt-1" />
            <div className="text-sm text-gray-700 space-y-2">
              <p className="font-bold text-gray-900">Recommendations for use:</p>
              <p>
                Online resources can be valuable, but we cannot affirm the validity of all material on external sites. 
                Always check <strong>when the info was posted</strong> and if the source is <strong>credible</strong> (universities, gov orgs).
              </p>
              <p>
                <strong>Important:</strong> We do not recommend relying solely on online resources for significant mental health concerns. 
                These cannot replace professional judgment. Always consult a trained professional for treatment choices.
              </p>
            </div>
          </div>
        </div>

        {/* MASONRY GRID OF RESOURCES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resourceCategories.map((category, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              
              <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                <div className="w-10 h-10 bg-cgc-teal/10 rounded-full flex items-center justify-center text-cgc-teal">
                  {category.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-800">{category.title}</h3>
              </div>

              <ul className="space-y-4">
                {category.items.map((item, i) => (
                  <li key={i}>
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-start gap-2 text-gray-600 hover:text-cgc-teal transition-colors"
                    >
                      <span className="mt-1 flex-shrink-0 opacity-50 group-hover:opacity-100">
                        {category.isVideo ? <Youtube size={16} /> : <ExternalLink size={16} />}
                      </span>
                      
                      <div>
                        <span className="font-medium underline decoration-transparent group-hover:decoration-cgc-teal underline-offset-2 transition-all">
                          {item.title}
                        </span>
                        {item.desc && (
                          <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
                        )}
                      </div>
                    </a>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Resources;