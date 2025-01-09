// random Data taken from ChatGpt
const blogPosts = [
  {
    userImage: "user1",
    blogImage: "blog1",
    title: "Exploring the Richness of Indian Cuisine",
    description: "Dive into the flavors of India with this comprehensive guide.",
    tag: "Food",
    publishDate: "2025-01-05",
    likeCount: 150,
    commentCount: 20,
    readingTime: "7 min",
    authorName: "Aarav Patel",
    authorBio: "Food enthusiast and travel blogger from Gujarat.",
    authorSocialLinks: ["https://twitter.com", "https://instagram.com"],
    viewCount: 2000,
    shareCount: 80,
    tags: ["Cuisine", "India", "Recipes"],
    content: "<p>Indian cuisine offers a diverse range of dishes, from spicy curries to sweet desserts. Each region has its own distinct style and flavors...</p>",
    wordCount: 1300,
    imageAltText: "A spread of traditional Indian dishes.",
    status: "published",
    category: "Culture",
  },
  {
    userImage: "user2",
    blogImage: "blog2",
    title: "The Best Tourist Spots in Rajasthan",
    description: "A guide to the majestic forts, palaces, and deserts of Rajasthan.",
    tag: "Travel",
    publishDate: "2025-01-10",
    likeCount: 230,
    commentCount: 35,
    readingTime: "8 min",
    authorName: "Meera Singh",
    authorBio: "Passionate about history and adventure tourism.",
    authorSocialLinks: ["https://twitter.com", "https://facebook.com"],
    viewCount: 2500,
    shareCount: 150,
    tags: ["Rajasthan", "Tourism", "Forts"],
    content: "<p>Rajasthan, known for its royal heritage, offers travelers a look into India's majestic history through its forts, palaces, and vibrant culture...</p>",
    wordCount: 1400,
    imageAltText: "Majestic forts and palaces of Rajasthan.",
    status: "published",
    category: "Travel",
  },
  {
    userImage: "user3",
    blogImage: "blog3",
    title: "Yoga and Meditation for Mental Clarity",
    description: "Unlock the power of yoga and meditation to enhance your mental wellbeing.",
    tag: "Health",
    publishDate: "2025-01-12",
    likeCount: 180,
    commentCount: 22,
    readingTime: "6 min",
    authorName: "Ravi Kumar",
    authorBio: "Yoga practitioner and mental health advocate.",
    authorSocialLinks: ["https://instagram.com", "https://twitter.com"],
    viewCount: 2200,
    shareCount: 90,
    tags: ["Mental Health", "Yoga", "Meditation"],
    content: "<p>Yoga and meditation are ancient practices that offer a multitude of benefits for the mind, body, and soul...</p>",
    wordCount: 1200,
    imageAltText: "A peaceful yoga pose with calm surroundings.",
    status: "published",
    category: "Health",
  },
  {
    userImage: "user4",
    blogImage: "blog4",
    title: "5 Easy Recipes for Busy Weekdays",
    description: "Quick and healthy meals for those with tight schedules.",
    tag: "Food",
    publishDate: "2025-01-15",
    likeCount: 190,
    commentCount: 25,
    readingTime: "5 min",
    authorName: "Priya Mehta",
    authorBio: "A busy mom and home cook with a love for quick recipes.",
    authorSocialLinks: ["https://twitter.com", "https://pinterest.com"],
    viewCount: 3000,
    shareCount: 130,
    tags: ["Recipes", "Quick Meals", "Healthy Eating"],
    content: "<p>If you're always on the go, these 5 recipes will help you prepare delicious meals in no time...</p>",
    wordCount: 1100,
    imageAltText: "Healthy meal prep in under 20 minutes.",
    status: "published",
    category: "Food",
  },
  {
    userImage: "user5",
    blogImage: "blog5",
    title: "How to Create a Sustainable Garden",
    description: "Learn how to grow your own organic food while protecting the environment.",
    tag: "Lifestyle",
    publishDate: "2025-01-18",
    likeCount: 210,
    commentCount: 15,
    readingTime: "9 min",
    authorName: "Anjali Sharma",
    authorBio: "Eco-conscious gardener and sustainability advocate.",
    authorSocialLinks: ["https://twitter.com", "https://facebook.com"],
    viewCount: 3500,
    shareCount: 200,
    tags: ["Sustainability", "Gardening", "Environment"],
    content: "<p>Creating a sustainable garden can be incredibly rewarding, both for your health and the planet...</p>",
    wordCount: 1500,
    imageAltText: "Lush green sustainable garden with homegrown vegetables.",
    status: "published",
    category: "Lifestyle",
  },
  {
    userImage: "user6",
    blogImage: "blog6",
    title: "10 Tips for First-Time Homebuyers",
    description: "Navigate the homebuying process with these helpful tips and tricks.",
    tag: "Real Estate",
    publishDate: "2025-01-20",
    likeCount: 170,
    commentCount: 18,
    readingTime: "6 min",
    authorName: "Vikram Soni",
    authorBio: "Real estate expert helping people make informed property decisions.",
    authorSocialLinks: ["https://twitter.com", "https://linkedin.com"],
    viewCount: 2700,
    shareCount: 110,
    tags: ["Real Estate", "Home Buying", "Tips"],
    content: "<p>Buying your first home is an exciting and overwhelming experience. Here are 10 essential tips to help you through the process...</p>",
    wordCount: 1200,
    imageAltText: "Happy couple receiving house keys for their first home.",
    status: "published",
    category: "Real Estate",
  },
  {
    userImage: "user7",
    blogImage: "blog7",
    title: "The Future of Renewable Energy in India",
    description: "A look at India's growing investment in renewable energy sources.",
    tag: "Energy",
    publishDate: "2025-01-22",
    likeCount: 220,
    commentCount: 30,
    readingTime: "7 min",
    authorName: "Arvind Joshi",
    authorBio: "Sustainability advocate and environmental researcher.",
    authorSocialLinks: ["https://linkedin.com", "https://twitter.com"],
    viewCount: 2800,
    shareCount: 120,
    tags: ["Renewable Energy", "India", "Sustainability"],
    content: "<p>As India continues to grow, the country's shift towards renewable energy is becoming increasingly important for long-term sustainability...</p>",
    wordCount: 1350,
    imageAltText: "Solar panels in a field under the bright sun.",
    status: "published",
    category: "Technology",
  },
  {
    userImage: "user8",
    blogImage: "blog8",
    title: "Mastering the Art of Photography",
    description: "Tips and techniques to improve your photography skills.",
    tag: "Photography",
    publishDate: "2025-01-25",
    likeCount: 210,
    commentCount: 40,
    readingTime: "6 min",
    authorName: "Ravi Khanna",
    authorBio: "Professional photographer with a passion for capturing beautiful moments.",
    authorSocialLinks: ["https://instagram.com", "https://pinterest.com"],
    viewCount: 2300,
    shareCount: 150,
    tags: ["Photography", "Art", "Tips"],
    content: "<p>Photography is more than just clicking a button. It's about understanding light, angles, and storytelling...</p>",
    wordCount: 1250,
    imageAltText: "A stunning landscape shot with a DSLR camera.",
    status: "published",
    category: "Art",
  },
  {
    userImage: "user9",
    blogImage: "blog9",
    title: "The Ultimate Guide to Freelancing",
    description: "Everything you need to know to succeed as a freelancer.",
    tag: "Business",
    publishDate: "2025-02-01",
    likeCount: 250,
    commentCount: 50,
    readingTime: "8 min",
    authorName: "Nina Kapoor",
    authorBio: "Freelance writer and entrepreneur helping others grow their freelance careers.",
    authorSocialLinks: ["https://linkedin.com", "https://twitter.com"],
    viewCount: 3000,
    shareCount: 180,
    tags: ["Freelancing", "Career", "Business"],
    content: "<p>Freelancing offers the freedom to work on your own terms. Here's everything you need to know to make your freelance career a success...</p>",
    wordCount: 1500,
    imageAltText: "Freelancer working from home on a laptop.",
    status: "published",
    category: "Business",
  },
  {
    userImage: "user10",
    blogImage: "blog10",
    title: "How to Build a Strong Personal Brand",
    description: "Tips for creating and maintaining a personal brand that stands out.",
    tag: "Career",
    publishDate: "2025-02-05",
    likeCount: 180,
    commentCount: 12,
    readingTime: "6 min",
    authorName: "Karan Sharma",
    authorBio: "Personal branding expert helping individuals establish a strong online presence.",
    authorSocialLinks: ["https://linkedin.com", "https://twitter.com"],
    viewCount: 2600,
    shareCount: 100,
    tags: ["Branding", "Career", "Marketing"],
    content: "<p>Building a strong personal brand can help you stand out in the professional world. Here’s how you can create a brand that’s true to you...</p>",
    wordCount: 1200,
    imageAltText: "Professional profile photo for personal branding.",
    status: "published",
    category: "Career",
  },
  {
    userImage: "user11",
    blogImage: "blog11",
    title: "The Importance of Mental Health Awareness",
    description: "Why we need to prioritize mental health in today's world.",
    tag: "Health",
    publishDate: "2025-02-07",
    likeCount: 200,
    commentCount: 45,
    readingTime: "7 min",
    authorName: "Sanjay Verma",
    authorBio: "Mental health counselor dedicated to spreading awareness and support.",
    authorSocialLinks: ["https://linkedin.com", "https://twitter.com"],
    viewCount: 3500,
    shareCount: 160,
    tags: ["Mental Health", "Awareness", "Self-care"],
    content: "<p>Mental health is just as important as physical health. It’s time we talk openly about mental health challenges and the resources available...</p>",
    wordCount: 1300,
    imageAltText: "A calming therapy session with a mental health counselor.",
    status: "published",
    category: "Health",
  },
  {
    userImage: "user12",
    blogImage: "blog12",
    title: "Best Budgeting Tips for Students",
    description: "Practical tips to manage your finances while in college.",
    tag: "Finance",
    publishDate: "2025-02-10",
    likeCount: 170,
    commentCount: 20,
    readingTime: "6 min",
    authorName: "Ananya Joshi",
    authorBio: "Finance student and part-time financial advisor.",
    authorSocialLinks: ["https://instagram.com", "https://twitter.com"],
    viewCount: 2000,
    shareCount: 90,
    tags: ["Budgeting", "Finance", "Student Life"],
    content: "<p>Managing finances as a student can be challenging, but with these budgeting tips, you can stay on top of your expenses...</p>",
    wordCount: 1150,
    imageAltText: "Student with a laptop working on finances.",
    status: "published",
    category: "Finance",
  }
];

  



// JavaScript code for sidebar scrolling

const toggleBtn = document.getElementById('toggle-btn');
toggleBtn.addEventListener('click', (event) => {
    
    const sidebar = document.getElementById('sidebar');
    
    if(sidebar.hasAttribute('class', 'sidebar-active')) {
        //hide sidebar
        sidebar.style.position = 'absolute';        
        sidebar.style.visibility = 'hidden';
        sidebar.style.opacity = '0';
        sidebar.style.translate = '-100%';

        sidebar.removeAttribute('class', 'sidebar-active');

        // rotate icon
        document.getElementById('toggle-active-img').style.rotate = '-90deg';
    }
    else {
        sidebar.style.position = 'relative';
        sidebar.style.visibility = 'visible';
        sidebar.style.opacity = '1';
        sidebar.style.translate = '0';

        sidebar.setAttribute('class', 'flex container sidebar-active');

        // rotate icon to normal
        document.getElementById('toggle-active-img').style.rotate = '90deg';

    }
    
})


// add event listener on the fliter blogs button of form : it's just declaration i'll add functionality later.
document.getElementById('filter-btn').addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target);
})


// add event to close popup
const popClose = document.getElementById('closePopup');
popClose.addEventListener ('click', (e) => {
    e.preventDefault();
    document.getElementById('popUpActive').style.display = 'none';
    console.log('close');
    
})
// show popUp while clicking on filter Interest
const userInterest = document.getElementById('interest');
userInterest.addEventListener('click', (e) => {
    document.getElementById('popUpActive').style.display = 'block';
    console.log('shown');
})




// Creating dynamic blog preview card.
function createBlogPostElement () {
    
    blogPosts.forEach((previewObj) => {

      //creating blog post card element
        const blogPreviewCard = document.createElement('div');
        blogPreviewCard.setAttribute('id', 'blog-preview-card');
        blogPreviewCard.setAttribute('class', 'grid grid-two--cols');
        
        // blog content wrapper and it's content
        const blogContentWrapper = document.createElement('div');
        blogContentWrapper.setAttribute('class', 'blog-content-wrapper flex');
        
        const authorProfile = document.createElement('div');
        authorProfile.setAttribute('id', 'author-profile');
        authorProfile.setAttribute('class', 'flex');
        const authorImg = document.createElement('img');
        authorImg.setAttribute('id', 'author-image');
        const authorName = document.createElement('p');
        authorName.setAttribute('id', 'authorName');

        const blogHeading = document.createElement('p');
        blogHeading.setAttribute('id', 'blog-heading');

        const blogSubHeading = document.createElement('p');
        blogSubHeading.setAttribute('id', 'sub-heading');

        // blog footer and it's content
        const blogFooter = document.createElement('div');
        blogFooter.setAttribute('id', 'blog-footer');
        blogFooter.setAttribute('class', 'flex');
        //blog footer content
        const publishDate = document.createElement('p');
        publishDate.setAttribute('class', 'publish-date');
        const reachStats = document.createElement('div');
        reachStats.setAttribute('class', 'reachStats flex');
        const likes = document.createElement('span');
        const comment = document.createElement('span');
        const readTime = document.createElement('span');


        // blog image 
        const blogImgWrapper = document.createElement('figure');
        const blogImg = document.createElement('img');
        blogImg.setAttribute('id', 'blog-image');



      // Layout of blog preview card making
        const parentDivElem = document.getElementById('preview-card-wrapper');
        parentDivElem.appendChild(blogPreviewCard);

        blogPreviewCard.appendChild(blogContentWrapper);
        blogContentWrapper.appendChild(authorProfile);
        authorProfile.appendChild(authorImg);
        authorProfile.appendChild(authorName);
        blogContentWrapper.appendChild(blogHeading);
        blogContentWrapper.appendChild(blogSubHeading);
        blogContentWrapper.appendChild(blogFooter);
        blogFooter.appendChild(publishDate);
        blogFooter.appendChild(reachStats);
        reachStats.appendChild(likes);
        reachStats.appendChild(comment);
        reachStats.appendChild(readTime);

        blogPreviewCard.appendChild(blogImgWrapper);
        blogImgWrapper.appendChild(blogImg);

        // parentDivElem.appendChild(blogPreviewCard);

      // Now add all data into the blog preview card.
    
        authorImg.src = "./Images/2.png";
        authorName.innerHTML = previewObj['authorName'];
        blogHeading.innerHTML = previewObj['title'];
        blogSubHeading.innerHTML = previewObj['description'];
        publishDate.innerHTML = previewObj['publishDate'];
        likes.innerHTML = `❤️${previewObj['likeCount']}`;
        comment.innerHTML = `💬${previewObj['commentCount']}`;
        readTime.innerHTML = `⏳${previewObj['readingTime']}`;
        blogImg.src = "./Images/2.png";
             
    })

    

}

createBlogPostElement();