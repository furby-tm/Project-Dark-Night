import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const newNews = [
      { id: 0,  name: 'Threading a Needle', author: 'Anthony Bardaro', description: 'Apple is charting a brilliant strategic path with its HomePod release: they’re positioning it as a premium product, with superior specs, that uses music as its defining value proposition. But, despite the marketing department’s best laid plans, analyzing HomePod’s fate requires an understanding of the uphill battle Apple has ahead.', image: 'https://i.ytimg.com/vi/1hw9skL-IXc/maxresdefault.jpg' },
      { id: 1, name: 'Under the Hood of a Self-Driving Taxi', author: 'Oliver Cameron', description: 'A self-driving car traditionally follows the paradigm of Sense, Plan, Act. The car senses the environment around it, utilizing sensors like LIDAR, radar and cameras. The car plans the path from point A to point B, using sensor information and other contextual information. The car then acts, executing the path that was planned by controlling its steering and speed. To give a car the ability to Sense, Plan & Act (SPA) requires a complex system of hardware and software, all of which works together in (hopeful) harmony to form a self-driving car. You might be familiar with some of the surface level components in isolation (things like cameras, LIDAR etc.), but equally important is all the plumbing necessary to make them all sing together. It’s that plumbing, or the core, that we’ll cover in this post.', image: 'https://cdn-images-1.medium.com/max/2000/1*gJoCcGKRVB6Qq_57UyPT-w.jpeg' },
      { id: 2, name: 'Selling the World, Virtually', author: 'Wren Handman', description: 'Spatial computing is beginning the slow crawl to maturity. As the technology develops into something simultaneously more complex and also more stable, new areas of possibility open and grow. Since the beginning, avid enthusiasts have seen hope of a reformation of the real estate industry with the help of spatial computing, but it’s only now that real solutions are starting to be feasible.', image: 'https://cdn-images-1.medium.com/max/2000/1*t0ecW84EhAYJgZ5k3s-LhQ.png' },
      { id: 3, name: 'Toy Story lessons for the Internet of Things', author: 'Dan Gärdenfors', description: 'Digital products send notifications to be noticed. For example, red dots constantly appear on our mobile home screens calling for our attention. We might find it annoying, however it makes perfect sense from each individual app’s perspective. If notifications make us open an app, there’s always the chance that we upgrade to premium or spend money on in-app purchases.', image:'https://cdn-images-1.medium.com/max/1600/1*v2aKpudRho2gJoPbJc0QQg.jpeg' },
      { id: 4, name: 'Crime-Tracking? There’s an App for That.' },
      { id: 5, name: 'The 10 Virtual Reality artists you need to see to believe' },
      { id: 6, name: 'Embracing Read Receipts' },
      { id: 7, name: 'Creating the right products for VR, AR, or MR' },
      { id: 8, name: 'Why Bot Makers Dream of Electric Sheep' },
      { id: 9, name: 'How Does the Internet Work?' },
      { id: 10, name: 'Tech and Elitist Design' },
      { id: 11, name: 'Five Advantages of Serverless Technology' }
    ];
    return {newNews};
  }
}
