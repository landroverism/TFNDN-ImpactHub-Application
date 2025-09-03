import mockData from '../data/mock.json';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export interface Pillar {
  id: string;
  title: string;
  summary: string;
  description: string;
  programs: Program[];
  color: string;
}

export interface Program {
  id: string;
  title: string;
  summary: string;
  impact: string;
}

export interface TimelineEvent {
  year: number;
  events: Array<{
    title: string;
    desc: string;
  }>;
}

export interface Opportunity {
  id: string;
  title: string;
  type: string;
  skills: string[];
  location: string;
  salary: string;
  link: string;
  description: string;
}

export interface CareerRecommendation {
  role: string;
  score: number;
  skills: string[];
  trainingLinks: string[];
  opportunity: Opportunity;
}

export interface Partner {
  id: string;
  name: string;
  logoUrl: string;
  description: string;
}

export interface QuizAnswer {
  questionId: string;
  optionId: string;
}

// Mock API functions
export const api = {
  async getPillars(): Promise<Pillar[]> {
    await delay(300);
    return mockData.pillars;
  },

  async getPillar(id: string): Promise<Pillar | null> {
    await delay(200);
    return mockData.pillars.find(p => p.id === id) || null;
  },

  async getTimeline(): Promise<TimelineEvent[]> {
    await delay(250);
    return mockData.timeline;
  },

  async getOpportunities(): Promise<Opportunity[]> {
    await delay(300);
    return mockData.opportunities;
  },

  async assessCareer(answers: QuizAnswer[]): Promise<CareerRecommendation[]> {
    await delay(800); // Simulate AI processing time
    
    // Simple scoring algorithm based on quiz answers
    const scores: Record<string, number> = {
      va: 0,
      marketing: 0,
      data: 0,
      support: 0,
      writing: 0,
      design: 0,
    };

    // Calculate scores based on answers
    answers.forEach(answer => {
      const question = mockData.careerQuestions.find(q => q.id === answer.questionId);
      const option = question?.options.find(o => o.id === answer.optionId);
      
      if (option?.weight) {
        Object.entries(option.weight).forEach(([key, value]) => {
          scores[key] = (scores[key] || 0) + value;
        });
      }
    });

    // Sort by score and get top 3
    const sortedScores = Object.entries(scores)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3);

    // Map to career recommendations
    const roleMapping: Record<string, string> = {
      va: 'Virtual Assistant',
      marketing: 'Digital Marketing',
      data: 'Data Analysis',
      support: 'Customer Support',
      writing: 'Content Writing',
      design: 'Graphic Design',
    };

    const recommendations: CareerRecommendation[] = sortedScores.map(([key, score]) => {
      const opportunity = mockData.opportunities.find(o => 
        o.type.toLowerCase().includes(key) || 
        o.title.toLowerCase().includes(roleMapping[key].toLowerCase())
      ) || mockData.opportunities[0];

      const relevantModules = mockData.trainingModules.filter(module =>
        module.skills.some(skill => 
          opportunity.skills.some(oppSkill => 
            oppSkill.toLowerCase().includes(skill.toLowerCase()) ||
            skill.toLowerCase().includes(oppSkill.toLowerCase())
          )
        )
      );

      return {
        role: roleMapping[key] || 'General Career',
        score: Math.min(100, Math.round((score / 12) * 100)), // Normalize to percentage
        skills: opportunity.skills,
        trainingLinks: relevantModules.map(m => m.title),
        opportunity,
      };
    });

    return recommendations;
  },

  async getStats() {
    await delay(200);
    return mockData.stats;
  },

  async getChartData() {
    await delay(300);
    return mockData.chartData;
  },

  async getPartners() {
    await delay(200);
    return mockData.partners;
  },

  async getImpactStories() {
    await delay(250);
    return mockData.impactStories;
  },

  // Mock form submissions
  async submitContact(data: any) {
    await delay(500);
    console.log('Contact form submitted:', data);
    return { success: true, message: 'Thank you for your message!' };
  },

  async submitVolunteer(data: any) {
    await delay(500);
    console.log('Volunteer form submitted:', data);
    return { success: true, message: 'Thank you for volunteering!' };
  },

  async subscribeNewsletter(email: string) {
    await delay(400);
    console.log('Newsletter subscription:', email);
    return { success: true, message: 'Successfully subscribed!' };
  },
};
