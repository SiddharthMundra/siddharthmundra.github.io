## Projects
### 1. SpoilerDetector – Automatic Spoiler Detection in Book Reviews (Machine Learning)

**Reason:** As someone who loves reading, I get really frustrated when a book review accidentally includes a spoiler. To tackle this issue, I developed SpoilerDetector, a machine learning-based system designed to automatically identify and filter out spoilers in book reviews. This tool enhances the reading experience by allowing users to avoid unintended plot revelations and focus on genuine feedback about the book. Additionally, I have authored a research paper detailing the methodology, experiments, and results of this project. [Read the research paper here](https://drive.google.com/file/d/1X81NztwRfwClCkgrcK9Y3t8zylCXeLUS/view?usp=sharing). [Link](https://github.com/SiddharthMundra/SpoilerShield/tree/main)

- Utilized the [Goodreads Book Reviews Dataset](https://www.kaggle.com/datasets/pypiahmad/goodreads-book-reviews?resource=download), which contains over 2.5 million book reviews with detailed annotations, including sentence-level spoiler indicators.
- Implemented multiple baseline models including:
  - Keyword-Based Approach: Utilized predefined spoiler-related keywords to flag potential spoilers.
  - Bag of Words (BoW) Model: Transformed textual data into numerical feature vectors based on word frequency.
  - Logistic Regression with TF-IDF Features: Captured the importance of words relative to the entire dataset for improved classification.
- Developed an advanced DistilBERT transformer model for enhanced context-aware spoiler detection, achieving superior performance compared to traditional models.
- Addressed class imbalance by sampling equal numbers of spoiler and non-spoiler reviews.
- Employed regularization techniques such as weight decay and dropout to prevent overfitting.
- Optimized training time using mixed precision training (FP16) and computationally efficient models like DistilBERT.
- Focused on precision, false positive rate, false negative rate, and ROC AUC to accurately assess model performance, ensuring reliable spoiler detection without excessive false alarms.


### 2. Virtualis Nutrix - Online Nurse (App Development)
**Reason:** It was prime lockdown, and the elderly in my area were facing a challenge. The elderly in India are very dependent on domestic helpers for things like getting medicine on time, getting adequate water in a day, eating food on time, time to sleep. However they were not allowed to come for work during the lockdown. 

I decided to go ahead and create a very easy-to-use app for them; it featured an extremely basic UI which is very easy to use, and it has features like setting a medicine reminder, drink water reminders, and integrating the app into the phone’s vanilla calendar as well as clock app so everything would sync perfectly. [Link](https://github.com/SiddharthMundra/Virtualis-Nutrix-Online-Nurse)

- Developed mobile application with Flutter and Dart to assist the elderly in my community during the lockdown using Android Studio
- Engineered a secure backend using Google Firebase for data storage and real-time data synchronization
- Ensured user data security by implementing a secure login system for individual cloud-based data storage as well as two factor authentication
- Established CI/CD pipeline to automate testing and deployments, ensuring code quality with Gitlab

### 3. QUADspeaker – Twitter Bot (Web Scraping + Machine Learning)
**Reason:** During the summer of 2025, I kept seeing videos about influencers explaining "passive income" methods to teenagers, and the most common one was posting on twitter/youtube. Having a lot of free time on my hand, I thought to myself why not try it. That is when I decided to create my own twitter bot, try and personalise the news ot attract more viewers and include relevant hashtags as well. [Link](https://github.com/SiddharthMundra/QUADspeaker)

- Developed a Twitter bot using the Tweepy API to automatically post the latest news stories from four sources, including CNN, BBC and Al-Jazeera; posting 50 times a day with tailored, user-engaging content
- Integrated OpenAI API to paraphrase and enhance the appeal of news headlines, ensuring engaging and dynamic content for daily posting, incorporating error handling and logging for efficient web scraping and image management
- Employed Python’s schedule library to manage regular execution of news scraping, tweeting, and daily summaries, ensuring timely and consistent updates while maintaining robust tracking of posted content and images to prevent duplication


### 4. Developer Journal - Developer Logger (Web Development)
**Reason:** During Spring 2024, I was made a co-lead for a software engineering class. I was co-leading 11 people; I had to do various tasks such as conduct spring meetings, code review, conduct standup meetings, design the CI/CD pipeline as well as help develop the frontend and backend. It was a pretty fun experience; I learned that software engineering is not just coding, coding is just about 20% of it :). Our project stood out among 35 groups, placing in the top 3 of the class. The success was marked by our website video being showcased during the class presentation. [Link](https://github.com/SiddharthMundra/Developer-Journal)


- Developed a developer-journal; a logger where you can write what you worked on; it is automatically saved 
- Full-stack web application using HTML, CSS, JS, as well as React
- Fully operational CI/CD pipeline with E2E testing, dry run testing, Unit testing
- Employed GIT actions (such as needing approval from leader's before merging and getting code quality review)

### 5. Huffman Encoding Tree - File Compressor (Advanced Data Structures)
**Reason:** Upon unzipping a 3gb file just for it to be 5.6gb, I was intruiged by how file compressing works. Upon some research, I decided to build a basic huffman-encoding compressor to compress text files to see how compressing files really works. I also decided to use this for a class project (hence I cannot show the source code as it would be an AI violation)

- Built a Huffman encoding tree to perform file compression and decompression on file headers
- Implemented a file compression tool using the Huffman algorithm to reduce storage size without losing information
- Implemented a file decompression tool using the Huffman algorithm to get back the original file header
- Used a priority queue to further make the process more efficient
- Enhanced the efficiency of the compression by using bit-packing (3-bit integers) to store larger numbers in smaller sequences

### 6. F1 World-View (Web Development)
**Reason:** During Fall 2024, I was taking an advance interaction design class; and as a project, had to design something that looks "cool" on react; and since I am interested in F1, I decided to design an interactive map with details of every driver to ever race as well as every circuit to appear along with its winners in the world. For doing this, there was no custom dataset which was matching my requirements; hence I created my own web-scraper to scrape the information, create my own dataset and then link it to the react app. [Link](https://github.com/SiddharthMundra/RaceNation-F1-World-View)


- Link to website: [Click](https://poetic-cheesecake-a45473.netlify.app)
- Used web-scraping techniques to gather data catering to my app
