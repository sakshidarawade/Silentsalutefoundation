export type Story = {
  id: number;
  image: string;

  // BENEFICIARY NAME
  name: string;

  // LOCATION / STATE
  location: string;

  // STORY HEADLINE
  title: string;

  // SHORT DESCRIPTION FOR STORY CARD
  excerpt: string;

  // FULL STORY
  text: string;
};

export const stories: Story[] = [
  {
    id: 1,

    image: '/assets/images/impact1.jpg',

    name: 'Sunita',

    location: 'Rajasthan',

    title: 'Education today. Independence tomorrow.',

    excerpt:
      "When Sunita's husband made the ultimate sacrifice, she faced an uncertain future with two young children depending on her.",

    text:
      "When the devastating news arrived from the Galwan Valley, Sunita’s world came to a standstill. In a single instant, she became the widow of a brave soldier and the sole pillar of strength for her two young children. Amidst the overwhelming grief, one thought kept her grounded: her husband had given his life protecting the nation’s future, and she would not let their own children’s future slip away in the shadows of tragedy.\n\nDetermined to honor his legacy, Sunita stepped forward with immense courage. She took on the task of rebuilding their lives, ensuring that her children understood the quiet heroism of their father while staying focused on their education and dreams.\n\nThrough dedicated scholarship grants, direct educational assistance, and ongoing support provided by the Silent Salute Foundation, the financial burden of schooling was lifted from her shoulders. Today, Sunita’s children are thriving in school, carrying forward their father's strength with bright smiles and unwavering resolve. Her journey stands as a powerful testament to resilience, showing that with dignity and the right support, hope always endures.",
  },

  {
    id: 2,

    image: '/assets/images/impact2.jpg',

    name: 'Geeta',

    location: 'Kerala',

    title: 'Guardians of Health Campaign',

    excerpt:
      "For Geeta, caring for her elderly mother-in-law became a daily struggle until the right medical support finally reached their doorstep.",

    text:
      "In the remote coastal villages of Kerala, access to specialized medical care was often a distant dream for elderly dependents of defense personnel. Recognizing this urgent gap, the Silent Salute Foundation launched a specialized Healthcare Relief & Medical Camp Campaign, bringing doctors, diagnostic equipment, and free prescription aid directly to the doorsteps of veteran families.\n\nFor Geeta and her ailing mother-in-law—a Navy veteran's widow suffering from chronic joint and cardiac issues—the campaign proved to be a turning point. Transporting an elderly patient to distant city hospitals had grown increasingly difficult and expensive. When the foundation's mobile healthcare team arrived in their district, it brought not just immediate diagnostic tests and necessary medications, but also long-term medical sponsorship for the matriarch's treatment.\n\nThrough this dedicated campaign, hundreds of defense families received comprehensive health checkups, ongoing care packages, and critical financial aid for surgeries. Geeta's relief was immediate as her mother-in-law received proper therapeutic care without the crippling financial strain. The campaign stood as a powerful message to every defense family: their health, dignity, and well-being will always be protected by the society their loved ones served to defend.",
  },

  {
    id: 3,

    image: '/assets/images/impact3.jpg',

    name: 'Meena',

    location: 'Punjab',

    title: 'Care that heals. Hope that grows.',

    excerpt:
      "After losing her husband, Meena was left to raise three children alone — determined that their dreams would not end with his sacrifice.",

    text:
      "Meena's world changed forever the day two officers arrived at her doorstep in a quiet Punjab village. Her husband, a CRPF jawan, had laid down his life during a counter-insurgency operation, leaving her alone to raise their three young children. In the days that followed, grief was compounded by an uncertain question that kept her awake at night: how would she manage their schooling, their meals, their future, on her own?\n\nMeena refused to let her children's dreams become another casualty of that loss. She held her family together with quiet determination, insisting that her children stay in school even as the household's finances grew fragile. It was a daily battle between grief and responsibility, one she carried without complaint.\n\nThrough the Silent Salute Foundation's education sponsorship program, all three of Meena's children received full coverage for their school fees, books, and uniforms, along with ongoing mentorship support to help them stay on track. What once felt like an impossible burden became a manageable path forward. Today, her eldest is preparing for board exams with renewed confidence, and her younger two continue to thrive in the classroom. Meena often says that her husband's sacrifice gave their children a future worth fighting for — and now, they have the means to reach it.",
  },

  {
    id: 4,

    image: '/assets/images/impact4.jpg',

    name: 'Sunita',

    location: 'Uttarakhand',

    title: 'Courage that protects. Love that stays strong.',

    excerpt:
      "Sunita refused to let the loss of her husband define her children's future, choosing instead to rebuild their lives with courage and hope.",

    text:
      "In a small hillside town in Uttarakhand, Sunita received the news no army wife ever wants to hear — her husband had been killed during the Galwan Valley clashes, defending the nation's borders. Overnight, she became a widow and a single parent to two young children, faced with rebuilding a life that had been upended in an instant.\n\nRefusing to let grief define her family's future, Sunita made a quiet vow: her children would grow up knowing their father's courage, not his absence. She threw herself into ensuring their education never faltered, even as she navigated the emotional weight of loss and the practical challenges of managing a household alone.\n\nWith a scholarship and continued educational support from the Silent Salute Foundation, the financial pressure of school fees, supplies, and tuition was lifted from her shoulders. Her children have continued their studies without interruption, carrying their father's courage forward in their own quiet determination. Sunita's story stands as a testament to a mother's strength — proof that with the right support, love can outlast even the deepest loss.",
  },
];

export function getStoryById(id: number | string | undefined) {
  const storyId = Number(id);

  return (
    stories.find((story) => story.id === storyId) ?? stories[0]
  );
}