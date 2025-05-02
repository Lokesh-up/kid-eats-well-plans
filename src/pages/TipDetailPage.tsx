
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Clock, Book, Heart, ThumbsUp, ThumbsDown } from 'lucide-react';
import { categorizedTips, Tip } from '@/data/tips';

const TipDetailPage = () => {
  const { tipId } = useParams<{ tipId: string }>();
  
  // Find the tip from all categories
  const allTips = Object.values(categorizedTips).flat();
  const tip = allTips.find(t => t.id === tipId);
  
  if (!tip) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Tip Not Found</h1>
        <p className="mb-8">Sorry, we couldn't find the tip you're looking for.</p>
        <Button asChild>
          <Link to="/tips">Back to Tips</Link>
        </Button>
      </div>
    );
  }
  
  // Get related tips from the same category
  const relatedTips = categorizedTips[tip.category]
    .filter(t => t.id !== tipId)
    .slice(0, 3);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Link to="/tips" className="text-primary hover:underline mb-4 inline-block">
          &larr; Back to all tips
        </Link>
        
        <img src={tip.image} alt={tip.title} className="w-full h-64 md:h-80 object-cover rounded-lg mb-6" />
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tip.ageGroup && (
            <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm">
              {tip.ageGroup}
            </span>
          )}
          {tip.readTime && (
            <span className="flex items-center text-sm text-gray-500 gap-1">
              <Clock size={14} />
              {tip.readTime}
            </span>
          )}
          <span className="flex items-center text-sm text-gray-500 gap-1">
            <Book size={14} />
            {tip.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </span>
        </div>
        
        <h1 className="text-4xl font-bold mb-6">{tip.title}</h1>
        
        <div className="flex items-center mb-8">
          <img src={tip.authorImage} alt={tip.authorName} className="w-10 h-10 rounded-full mr-3" />
          <span className="text-gray-600">By {tip.authorName}</span>
        </div>
        
        <div className="prose max-w-none">
          {tip.content ? (
            <div dangerouslySetInnerHTML={{ __html: tip.content }} />
          ) : (
            <>
              <p className="lead mb-4 text-lg">{tip.excerpt}</p>
              
              <h2>Why This Matters</h2>
              <p>
                Understanding this aspect of children's nutrition helps establish healthy eating 
                patterns that can last a lifetime. Parents who implement these strategies often report 
                less mealtime stress and children who are more open to trying new foods.
              </p>
              
              <div className="bg-secondary/40 p-5 rounded-lg my-6">
                <h3 className="font-bold mb-2">Expert Tip</h3>
                <p className="italic">
                  "Start small and be consistent. Change doesn't happen overnight, but small, 
                  regular steps lead to lasting healthy habits."
                </p>
                <p className="text-sm text-right mt-2">— Pediatric Nutrition Expert</p>
              </div>
              
              <h2>Practical Steps You Can Take</h2>
              <ul>
                <li>Begin with one small change this week</li>
                <li>Involve your children in the process</li>
                <li>Be a role model by demonstrating healthy habits yourself</li>
                <li>Celebrate small victories and progress</li>
                <li>Stay consistent with your approach</li>
              </ul>
              
              <h2>Common Challenges</h2>
              <p>
                Many parents struggle with resistance to new foods or finding time to prepare balanced meals. 
                Remember that setbacks are normal, and persistence is key to developing healthier eating habits.
              </p>
            </>
          )}
        </div>
        
        <div className="flex items-center justify-between mt-12 mb-8">
          <div className="flex gap-4">
            <Button variant="outline" size="sm" className="flex gap-2 items-center">
              <Heart size={16} /> Save
            </Button>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Was this helpful?</span>
              <Button variant="outline" size="sm" className="p-1 h-8 w-8">
                <ThumbsUp size={16} />
              </Button>
              <Button variant="outline" size="sm" className="p-1 h-8 w-8">
                <ThumbsDown size={16} />
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="my-12" />
        
        {relatedTips.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">You might also like...</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedTips.map((relatedTip) => (
                <Link to={`/tips/${relatedTip.id}`} key={relatedTip.id}>
                  <div className="border rounded-lg overflow-hidden hover:shadow-md transition-all">
                    <img 
                      src={relatedTip.image} 
                      alt={relatedTip.title} 
                      className="w-full h-32 object-cover" 
                    />
                    <div className="p-4">
                      <h3 className="font-bold">{relatedTip.title}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                        {relatedTip.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        
        <div className="mt-16 bg-primary/10 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to put these tips into action?</h3>
          <p className="text-gray-700 mb-6">Try our ready-made meal plans designed with these nutritional principles in mind.</p>
          <Button size="lg" asChild>
            <Link to="/meal-plans">View Weekly Meal Plans</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TipDetailPage;
