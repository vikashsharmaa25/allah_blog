export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  likes: number;
  comments: number;
}

// Mock data - replace with actual API calls
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  // Simulate API call
  return [
    {
      id: 1,
      title: 'The Beauty of Islamic Art',
      excerpt: 'Exploring the intricate designs and deep spiritual meaning behind Islamic art and architecture.',
      content: `
        <h2>The Rich Heritage of Islamic Art</h2>
        <p>Islamic art encompasses the visual arts produced from the 7th century onwards by people who lived within the territory that was inhabited by or ruled by culturally Islamic populations.</p>
        
        <h3>Geometric Patterns</h3>
        <p>One of the most recognizable aspects of Islamic art is its use of geometric patterns. These patterns often feature complex star and polygon designs that create a sense of infinity.</p>
        
        <h3>Calligraphy</h3>
        <p>Calligraphy is a highly regarded art form in Islamic culture. The Arabic script, with its flowing lines, is considered a means of preserving the word of God as revealed in the Quran.</p>
      `,
      author: 'Aisha Khan',
      date: '2025-11-10',
      category: 'Islamic Art',
      readTime: '4 min read',
      image: '/islamic-art.jpg',
      likes: 24,
      comments: 8,
    },
    // Add more blog posts as needed
  ];
};

export const getBlogPostById = async (id: number): Promise<BlogPost | undefined> => {
  const posts = await getBlogPosts();
  return posts.find(post => post.id === id);
};
