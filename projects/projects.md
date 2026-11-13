## Projects

### 1. High-Throughput LLM Inference Engine (C++, CUDA, gRPC)
I wanted to understand LLM serving from the metal up, so I wrote a C++ inference engine myself.
- Continuous batching + custom CUDA kernels for concurrent generation
- PagedAttention KV cache (~40% more capacity, less fragmentation)
- gRPC API with INT8 quantization, aiming for sub-20ms time-to-first-token

### 2. Hardware-Accelerated CNN Engine (C++, OpenCL)
A from-scratch CNN forward pass on the GPU, mostly to learn how memory layout and kernels really affect speed.
- Shared-memory tiling and loop unrolling in OpenCL
- Inference under ~25ms on a GTX 1080 Ti
- Hooked into LeNet-5 and checked results against a plain C++ CPU baseline

### 3. High-Concurrency Key-Value Cache (Go, gRPC)
A small distributed-systems project: how fast can a simple cache go if you're careful about locking and GC?
- Sharded hash maps in Go — around 115k reads/sec
- gRPC APIs with sub-millisecond p99 under load
- Zero-allocation pooling + LRU eviction so GC doesn't tank throughput

### 4. Synelle – Cycle Tracking iOS App (SwiftUI, SwiftData)
A privacy-first period tracker I'm building for everyday use — data stays on device, predictions stay honest.
- Local-first SwiftUI + SwiftData app (onboarding, home, calendar, logging, insights, profile)
- Cycle predictions, animated ring on the home screen, quick period/symptom logging
- Reminders, insight cards, and a clear delete-all-data path

### 5. Autonomous Robotic Car (Python, ROS 2, OpenCV, Jetson)
Class project turned into a search-and-rescue demo on a real robot.
- vSLAM + object detection to map a room, find a target, and plan an exit with A*
- Jetson + LiDAR + camera for navigation and obstacle avoidance
- YOLOv5 for detection; PID for steering/throttle and GPS path tracking

### 6. SpoilerDetector – Book Review Spoilers (ML)
I hate accidentally reading spoilers, so I built a classifier for them. [Paper](https://drive.google.com/file/d/1X81NztwRfwClCkgrcK9Y3t8zylCXeLUS/view?usp=sharing) · [GitHub](https://github.com/SiddharthMundra/SpoilerShield/tree/main)
- DistilBERT plus simpler baselines on Goodreads (2.5M+ reviews)
- Balanced training data and measured precision / false alarms carefully

### 7. QUADspeaker – Twitter News Bot (Python, OpenAI)
[GitHub](https://github.com/SiddharthMundra/QUADspeaker)
- Scrapes CNN/BBC/Al-Jazeera, rewrites headlines with OpenAI, and posts on a schedule without duplicates

### 8. Developer Journal (React, CI/CD)
[GitHub](https://github.com/SiddharthMundra/Developer-Journal)
- Co-led 11 people on a full-stack work logger; finished top 3 of 35 with real tests and review gates

### 9. F1 World-View (React, Web Scraping)
[GitHub](https://github.com/SiddharthMundra/RaceNation-F1-World-View) · [Live](https://poetic-cheesecake-a45473.netlify.app)
- Interactive map of F1 drivers and circuits; scraped my own dataset because nothing public matched what I needed

### 10. Virtualis Nutrix – Online Nurse (Flutter, Firebase)
[GitHub](https://github.com/SiddharthMundra/Virtualis-Nutrix-Online-Nurse)
- Simple reminder app for elderly relatives during lockdown (meds, water, meals) with Firebase login and phone calendar sync
