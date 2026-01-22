---
title: About
layout: page
---

<div class="cv-band">
  <!-- TODO: replace this link with your own CV PDF link -->
  <a href="https://drive.google.com/file/d/REPLACE_WITH_YOUR_CV_PDF/view?usp=sharing" target="_blank" rel="noopener noreferrer" aria-label="Open CV PDF">
    <img class="drive-icon" src="{{ site.url }}{{ site.baseurl }}/assets/images/google-drive.png" alt="Google Drive" />
    <span class="cv-text">Download in PDF</span>
  </a>
</div>

<!-- About two-column layout: left nav + content -->
<div class="about-layout">
  <aside class="about-nav" aria-label="About sections">
    <nav>
      <ul>
        <li><a href="#short-bio">Short Bio</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#research-experience">Research Experience</a></li>
        <li><a href="#teaching-experience">Teaching Experience</a></li>
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

I am **Anurup Naskar**, an MS student in Computer Science (AI and ML specialism) at **New York University (Courant)**. My research sits at the intersection of **generative modelling** and **atmospheric observations**, with a focus on reconstructing and gap-filling remote-sensing fields under sparsity, low SNR, and non-Gaussian noise. Concretely, I work with **masked modelling** and **diffusion-based inpainting** to recover physically meaningful structures in time height observations that are critical for diagnosing convection.

<button id="expand-bio-btn" class="expand-btn" onclick="document.getElementById('bio-expanded').style.display='block'; this.style.display='none';">Expand</button>

<div id="bio-expanded" style="display: none; margin-top: 1rem;" markdown="1">

A central question motivating my work is: **what controls the transition from shallow to deep convection?** I aim to build ML reconstruction tools that make atmospheric observations more faithful to the underlying physics, so that they preserve gradients, shear, and vertical structure that often precede convective onset. These reconstruction products can then support predictors and diagnostics for improved forecasting and for informing numerical model parametrisations.

Growing up in **Kolkata**, a region frequently affected by cyclones during the onset and withdrawal phases of the Indian Monsoon, I saw first-hand how much vulnerable communities depend on reliable forecasts. That experience anchors my interest in building methods that are not only accurate, but also explicit about uncertainty and failure modes.

My first exposure to large-scale, data-intensive modelling came through optimisation and feature selection during the **MITACS Globalink** internship, where I developed metaheuristic approaches for identifying informative signals in high-dimensional datasets. This work clarified a recurring limitation: performance saturates when representations are weak or misaligned with domain structure. Since then, my research focus has shifted toward physically grounded representations and generative priors for scientific data.

At NYU, I joined **M²LInES** and began working with **Prof. Sara Shamekh** on learning-based reconstructions of convective processes at the **ARM Southern Great Plains** site. I proposed **CuMoLoS-MAE**, a curriculum-guided stochastic ensemble masked autoencoder for reconstructing remote-sensing atmospheric fields under low SNR, range folding, and discontinuities. In parallel, my thesis work explores diffusion-based inpainting for reconstructing masked and noisy atmospheric mixing ratio observations. I also conduct multimodal learning research with **Prof. Mengye Ren** (Agentic AI / CILVR Lab), and I have worked at **NYU Grossman** with **Prof. Cem Deniz** on a two-stage reconstruction pipeline for UWB-to-MRI, using a masked autoencoder encoder followed by diffusion-based generation.

</div>

</div>

<!-- Education -->
<div class="about-section" data-section="education" markdown="1">

## Education {#education}

**MS in Computer Science (AI and ML Specialism)**  
New York University (Courant), New York, USA  
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

**Research Assistant (CuMoLoS-MAE Project)**  
New York University, USA  
**Sep 2024 – Present**  
- Proposed **CuMoLoS-MAE**, a curriculum-guided Monte Carlo stochastic ensemble masked autoencoder for reconstructing remote-sensing atmospheric fields under low SNR, range folding, and discontinuities.  
- Trained a ViT-based decoder with a mask-ratio curriculum to reconstruct from progressively sparser context, improving recovery of fine-scale structures such as updraft and downdraft cores, shear lines, and small vortices.  
- Supervisor: [Prof. Sara Shamekh](https://sshamekh.com/) (NYU M²LInES)

**Research Assistant (Thesis)**  
New York University, USA  
**Sep 2024 – Present**  
- Developing a probabilistic **diffusion-based inpainting** technique to reconstruct masked and noisy atmospheric mixing ratio data from remote-sensing observations.  
- Combining a DDPM with a RePaint-style inpainting framework and a U-Net backbone for robust reconstruction under structured missingness.  
- Advisor: [Prof. Sara Shamekh](https://sshamekh.com/)

**Graduate Researcher**  
New York University, USA  
**Sep 2024 – Present**  
- Conducting research in **multimodal learning**, focusing on vision language systems for retrieval, captioning, and question answering.  
- Supervisor: [Prof. Mengye Ren](https://agenticlearning.ai/people/mengye-ren/) (Lab: [Agentic AI / CILVR](https://agenticlearning.ai))

**Research Intern**  
NYU Grossman School of Medicine, New York, USA  
**Jul 2025 – Present**  
- Developed a masked autoencoder on **ultra-wideband (UWB) S-parameters** as an encoder for UWB-to-MRI reconstruction, then froze it and used its latent representations for conditioning.  
- Used these latents as conditioning signals for a diffusion model, enabling high-fidelity MRI brain reconstructions with strong anatomical consistency.  
- Supervisor: [Prof. Cem Deniz](https://med.nyu.edu/faculty/cem-m-deniz)

**MITACS Globalink Research Intern**  
Thompson Rivers University, Vancouver, Canada  
**Jun 2023 – Aug 2023**  
- Proposed an adaptive beta hill-climbing aided optimisation algorithm for feature selection on UCI and microarray datasets.  
- Integrated Grey Wolf Optimisation for feature selection, balancing exploration and exploitation to improve subset quality.  
- Supervisor: Prof. Mohamed Tawhid

**Research Assistant**  
Torrens University Australia, Adelaide, Australia  
**Jun 2022 – Jun 2023**  
- Developed a late acceptance hill-climbing aided chaotic harmony search method for feature selection on microarray and UCI benchmark datasets.  
- Proposed a chaotic-map-based initialisation strategy for metaheuristic optimisation algorithms to enhance exploration and feature-space coverage.  
- Supervisor: [Prof. Seyedali Mirjalili](https://scholar.google.com/citations?user=TJHmrREAAAAJ&hl=en)

**Undergraduate Research Assistant**  
Jadavpur University, Kolkata, India  
**Jun 2022 – Aug 2024**  
- Developed a colon-disorder classifier using an altruistic genetic-algorithm-based feature selection method on Wireless Capsule Endoscopy images.  
- Integrated DL feature extractors and applied a genetic algorithm to select an optimal subset for classification with improved robustness.  
- Supervisor: [Prof. Ram Sarkar](https://scholar.google.com/citations?hl=en&user=bDj0BUEAAAAJ)

</div>

<!-- Teaching Experience -->
<div class="about-section" data-section="teaching-experience" markdown="1">

## Teaching Experience {#teaching-experience}

**Tutor**  
CSCI-UA 480-075 Deep Learning, New York University, USA  
**Sep 2025 – Present**  
- Delivering weekly tutorials and office hours covering backpropagation, optimisation, and CNNs.  
- Guiding students in implementing models and training pipelines in PyTorch, with emphasis on reproducibility and clear evaluation.  
- Instructor: [Prof. Alfredo Canziani](https://atcold.github.io/)

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
