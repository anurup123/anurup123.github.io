---
title: About
layout: page
---



<!-- About two-column layout: left nav + content -->
<div class="about-layout">
  <aside class="about-nav" aria-label="About sections">
    <nav>
      <ul>
        <li><a href="#short-bio">Short Bio</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#research-experience">Research Experience</a></li>
        <li><a href="#teaching-experience">Teaching Experience</a></li>
        <li><a href="#publications">Publications</a></li>
        <li><a href="#languages">Languages</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contributed-talks-and-posters">Contributed Talks & Posters</a></li>
        <li><a href="#positions-of-responsibility">Positions of Responsibility</a></li>
        <li><a href="#awards">Awards</a></li>
      </ul>
    </nav>
  </aside>

  <div class="about-content" markdown="1">

<!-- Short Bio -->
<div class="about-section active" data-section="short-bio" markdown="1">

## Short Bio {#short-bio}

I am **Anurup Naskar**, an MS student in Computer Science (AI and ML specialism) at **New York University**. My research sits at the intersection of **generative modelling** and **atmospheric observations**, with a focus on reconstructing and gap-filling remote-sensing fields under sparsity, low SNR, and non-Gaussian noise. Concretely, I work with **masked modelling** and **diffusion-based inpainting** to recover physically meaningful structures in time height observations that are critical for diagnosing convection.

<button id="expand-bio-btn" class="expand-btn" onclick="document.getElementById('bio-expanded').style.display='block'; this.style.display='none';">Expand</button>

<div id="bio-expanded" style="display: none; margin-top: 1rem;" markdown="1">

A central question motivating my work is: **what controls the transition from shallow to deep convection?** I aim to build ML reconstruction tools that make atmospheric observations more faithful to the underlying physics, so that they preserve gradients, shear, and vertical structure that often precede convective onset. These reconstruction products can then support predictors and diagnostics for improved forecasting and for informing numerical model parametrisations.

Growing up in **Kolkata**, a region frequently affected by cyclones during the onset and withdrawal phases of the Indian Monsoon, I saw first-hand how much vulnerable communities depend on reliable forecasts. That experience anchors my interest in building methods that are not only accurate, but also explicit about uncertainty and failure modes.

My first exposure to large-scale, data-intensive modelling came through optimisation and feature selection during the **MITACS Globalink** internship, where I developed metaheuristic approaches for identifying informative signals in high-dimensional datasets. This work clarified a recurring limitation: performance saturates when representations are weak or misaligned with domain structure. Since then, my research focus has shifted toward physically grounded representations and generative priors for scientific data.

At NYU, I joined **M²LInES** and began working with **Prof. Sara Shamekh** on learning-based reconstructions of convective processes at the **ARM Southern Great Plains** site. I proposed **CuMoLoS-MAE**, a curriculum-guided stochastic ensemble masked autoencoder for reconstructing remote-sensing atmospheric fields under low SNR, range folding, and discontinuities. In parallel, my thesis work explores diffusion-based inpainting for reconstructing masked and noisy atmospheric mixing ratio observations. I have previously worked on multimodal learning with **Prof. Mengye Ren** (Agentic AI / CILVR Lab), and I have also worked at **NYU Grossman** with **Prof. Cem Deniz** on a two-stage reconstruction pipeline for UWB-to-MRI, using a masked autoencoder encoder followed by diffusion-based generation.

</div>

</div>

<!-- Education -->
<div class="about-section" data-section="education" markdown="1">

## Education {#education}

**MS in Computer Science (AI and ML Specialism)**  
New York University, New York, USA  
**2024 – 2026**  
- GPA: **4.0 / 4.0** (highest in cohort)  
- Coursework: **A**; Capstone Project: **Highest Band**

**BEng in Computer Science and Engineering**  
Jadavpur University, Kolkata, India  
**2020 – 2024**  
- Absolute Weighted CGPA: **8.6 / 10** (First Class with Distinction)

</div>

<!-- Research Experience -->
<div class="about-section" data-section="research-experience" markdown="1">

## Research Experience {#research-experience}

**Research Assistant (Thesis)**  
Center for Atmosphere Ocean Science, New York University (Courant Institute), New York, USA  
**Sep 2024 – Present**  
- Proposed **CuMoLoS-MAE**, a curriculum-guided Monte Carlo stochastic ensemble masked autoencoder for reconstructing remote-sensing atmospheric fields under low signal-to-noise ratio, range folding, and discontinuities.  
- Trained a ViT-based decoder with a progressive mask-ratio curriculum to reconstruct atmospheric fields from increasingly sparse spatial context, improving recovery of fine-scale structures such as updraft and downdraft cores, shear lines, and small-scale vortices.  
- Supervisor and Thesis Advisor: [Prof. Sara Shamekh](https://sshamekh.com/) (NYU M²LInES, STORM Lab)

**Graduate Researcher**  
NYU Center for Data Science, New York, USA  
**Sep 2024 – Present**  
- Conducting research in **multimodal learning** with an emphasis on building and evaluating vision language systems for retrieval, captioning, and question answering.  
- Project Supervisor: [Prof. Mengye Ren](https://agenticlearning.ai/people/mengye-ren/) (Lab: [Agentic AI / CILVR](https://agenticlearning.ai))



**Research Intern**  
New York University (Grossman School of Medicine), New York, USA  
**Sep 2024 – Aug 2025**  
- Developed a masked autoencoder on **ultra-wideband (UWB) S-parameters** as the encoder for UWB-to-MRI reconstruction, then froze it and used its latent representations for conditioning.  
- Used the latent variables as conditioning signals for a diffusion model, enabling high-fidelity MRI brain reconstructions with strong anatomical consistency.  
- Project Supervisor: [Prof. Cem Deniz](https://med.nyu.edu/faculty/cem-m-deniz)

**MITACS Globalink Research Intern**  
Thompson Rivers University, Vancouver, Canada  
**Jun 2023 – Aug 2023**  
- Proposed an adaptive beta hill-climbing aided optimisation algorithm for feature selection on UCI and microarray datasets.  
- Integrated Grey Wolf Optimisation (GWO) for feature selection, balancing exploration and exploitation to improve subset quality.  
- Project Supervisor: Prof. Mohamed Tawhid

**Research Assistant**  
Torrens University Australia, Adelaide, Australia  
**Jun 2022 – Jun 2023**  
- Developed a late acceptance hill-climbing aided chaotic harmony search method for feature selection on Microarray and UCI benchmark datasets.  
- Implemented a novel chaotic-map-based initialisation strategy for metaheuristic optimisation algorithms, enhancing exploration capability and ensuring more comprehensive coverage of the feature space.  
- Project Supervisor: [Prof. Seyedali Mirjalili](https://scholar.google.com/citations?user=TJHmrREAAAAJ&hl=en)

**Undergraduate Research Assistant**  
Jadavpur University, Kolkata, India  
**Jun 2022 – Aug 2024**  
- Developed a colon-disorder classifier using an altruistic genetic-algorithm-based feature selection method on Wireless Capsule Endoscopy images.  
- Integrated DL feature extractors and applied a genetic algorithm to select an optimal subset for classification with improved robustness.  
- Project Supervisor: [Prof. Ram Sarkar](https://scholar.google.com/citations?hl=en&user=bDj0BUEAAAAJ)

</div>

<!-- Teaching Experience -->
<div class="about-section" data-section="teaching-experience" markdown="1">

## Teaching Experience {#teaching-experience}

**Graduate Course Assistant**  
NYU Courant Institute of Mathematical Sciences, New York University, New York, USA  
**Jan 2026 – Present**  
- *MATH-GA 3006: Data-Driven Climate Science* (Instructor: [Prof. Sara Shamekh](https://sshamekh.com/))  
- *CSCI-GA 2572-001: Deep Learning* (Instructors: [Prof. Yann LeCun](http://yann.lecun.com/) and [Prof. Alfredo Canziani](https://atcold.github.io/))  

**Undergraduate Tutor**  
NYU Courant Institute of Mathematical Sciences, New York University, New York, USA  
**Sep 2025 – Present**  
- *CSCI-UA 480-075: Deep Learning* (Instructor: [Prof. Alfredo Canziani](https://atcold.github.io/))  



</div>

<!-- Publications -->
<div class="about-section" data-section="publications" markdown="1">

## Publications {#publications}

1. **Naskar, A.**, Wong, N. Z., Shamekh, S.  
   [CuMoLoS-MAE: A Masked Autoencoder for Remote Sensing Data Reconstruction.](http://arxiv.org/abs/2508.14957)  
   NeurIPS Workshop on Tackling Climate Change with ML, 2025. arXiv:2508.14957

2. **Naskar, A.**, Wong, N. Z., Shamekh, S.  
   [Multivariate Estimation of Vertical Profiles to Better Understand the Shallow-to-Deep Transition of Convection in the Bankhead National Forest.](https://agu.confex.com/agu/agu25/meetingapp.cgi/Paper/1954999)  
   AGU Fall Meeting Abstracts, 2025.

3. Wong, N. Z., **Naskar, A.**, Shamekh, S.  
   [Investigating how Different Large-Scale Environmental Conditions impact the Shallow-to-Deep Transition of Convection.](https://agu.confex.com/agu/agu25/meetingapp.cgi/Paper/1934844)  
   AGU Fall Meeting Abstracts, 2025.

4. **Naskar, A.**, Ghosh, S., Kundu, M., Sarkar, R.  
   [Feature selection using guided population based genetic algorithm with modified crossover and parent selection.](https://linkinghub.elsevier.com/retrieve/pii/S1568494625001838)  
   *Applied Soft Computing*, 2025, 172:112872.

5. Pramanik, P., Pramanik, R., **Naskar, A.**, Mirjalili, S., Sarkar, R.  
   [U-WOA: an unsupervised whale optimization algorithm based deep feature selection method for cancer detection in breast ultrasound images.](https://linkinghub.elsevier.com/retrieve/pii/B9780323953658000208)  
   In: *Handbook of Whale Optimization Algorithm*. Elsevier, 2024, pp. 179–191.

6. **Naskar, A.**, Pramanik, R., Hossain, S. K. S., Mirjalili, S., Sarkar, R.  
   [Late acceptance hill climbing aided chaotic harmony search for feature selection: An empirical analysis on medical data.](https://linkinghub.elsevier.com/retrieve/pii/S0957417423002464)  
   *Expert Systems with Applications*, 2023, 221:119745.

</div>

<!-- Languages -->
<div class="about-section" data-section="languages" markdown="1">

## Languages {#languages}

**English**  
Professional fluency

**বাংলা | Bengali**  
Native fluency

**हिन्दी | Hindi**  
Working fluency

</div>

<!-- Skills -->
<div class="about-section" data-section="skills" markdown="1">

## Skills {#skills}

**Languages:** Python · C · JavaScript · SQL · Bash · Java  

**Frameworks:** NumPy · Pandas · Scikit-learn · TensorFlow · PyTorch · Keras · Django · Flask · Node.js  

**Tools:** Kubernetes · Docker · Git · PostgreSQL · MySQL · SQLite · LaTeX  

**Platforms:** Linux · AWS · GCP · Azure · Slurm  

**Soft Skills:** Leadership · Event Management · Critical Thinking · Scientific Writing · Problem Solving

</div>

<!-- Contributed Talks and Posters -->
<div class="about-section" data-section="contributed-talks-and-posters" markdown="1">

## Contributed Talks and Posters {#contributed-talks-and-posters}

- **NeurIPS 2025**  
  Poster: *CuMoLoS-MAE: A Masked Autoencoder for Remote Sensing Data Reconstruction*

- **AGU 2025**  
  Poster: *Multivariate Estimation of Vertical Profiles to Better Understand the Shallow-to-Deep Transition of Convection in the Bankhead National Forest*

</div>

<!-- Positions of Responsibility -->
<div class="about-section" data-section="positions-of-responsibility" markdown="1">

## Positions of Responsibility {#positions-of-responsibility}

- **Program Committee Member, EurIPS** (Workshop on Artificial Intelligence for Climate and Conservation) · **2025**  
- **Class Representative**, Department of Computer Science, New York University · **2024 – 2026**  
- **Student Engagement Ambassador**, University Development and Alumni Relations, New York University · **2025**  
- **Lead Organiser**, Algorythm’21 Freshers’ Event, Department of Computer Science and Engineering, Jadavpur University · **2021**

</div>

<!-- Awards -->
<div class="about-section" data-section="awards" markdown="1">

## Awards {#awards}

- **Swami Vivekananda Scholarship (SVMCM)** · **2024**  
  Recipient of a state government scholarship for securing a top rank in the state engineering entrance exam.

- **NYU 1831 Scholarship** · **2024**  
  Awarded merit-based funding during the master’s programme at New York University.

- **Kharagpur Data Science Hackathon (3rd place)** · **2023**  
  Secured third position in a national data science competition organised by IIT Kharagpur.

- **Smart India Hackathon** · **2022**  
  Selected among the top 5 competing teams nationally for the theme; developed an interactive “one nation one funding” information portal.

- **MITACS Globalink Research Internship** · **2021**  
  Selected for a competitive research internship programme for international undergraduates.

- **The Bengal Debate (1st place)** · **2016**  
  Achieved first position in the state debating society.

</div>

  </div> <!-- .about-content -->
</div> <!-- .about-layout -->

<script src="{{ site.url }}{{ site.baseurl }}/assets/js/about.js"></script>





