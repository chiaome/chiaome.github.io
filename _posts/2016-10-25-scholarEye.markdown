---
layout:     post
title:      "The design of ScholarEye"
subtitle:   "a tools of visual relevance analysis for academic infomation"
date:       2016-10-25
author:     "Zhao Chang"
header-img: "img/prototype/chiao-prototype.jpg"
tags:
    - visualization
    - visual analysis
    - system design
    - tools
---
### 1 Introduction
One month ago, we developed the prototype system of visual relevance analysis (***previous system***) to help the user discover potential and relevant academic informations. Although the ***previous system*** are available for basic function such as retrieving academic knowledge base, discovering related entities, it has some <a>limitation</a> that need to be improved. I decide to redesign the visual analysis system. In this article, I present my design ideas.

Compared to the ***previous system***, the new system, ***ScholarEye***, enhance the ability of interaction with users. As shown in ***Fig. 1***, there are mainly five changes in the new version:

1.    *Integrating all functions into a single analysis session;*
2.    *Introducing Meta-search Engine;*
3.    *Using drag-and-drop mechanism;*
4.    *Improving the representation of Network Graph;*
5.    *Adding operable panel for each node.*


<img src='/img/scholareye/17.png'/>
<center><b>Fig. 1.</b>  System Overview</center>

### 2 System description
***Fig. 2*** shows the architecture of the system. This system consists of three main components: (a) a data layer that provides the source of data; (b) a logic layer that aims to provide support for a set of visual operations; and (c) user interface that allow the user to analyze via drag-and-drop mechanism.

<a href="/img/scholareye/sys-arch.png" target="\_blank" title="Click to see the big picture ">
<img src='/img/scholareye/sys-arch.png'/>
</a>
<center><b>Fig. 2.</b> System Overview</center>

#### 2.1 Data model
In this system, ***Data layer*** includes tow parts: (a) academic knowledge base (AKB); (b) open-ended internet resource.

#### 2.1.1 AKB
We have developed an AKB in the ***previous system***. We plan to improve and perfect AKB based on the ***previous AKB***. Some strategies will be adopted:

1.    Adding the properties for entities via Wikipedia and Baidu baike;
2.    Entity alignment using machine learning;
3.    Relation extraction through joint reasoning;

#### 2.1.2 Open-ended internet resource
Considering that the scope of AKB, we plan to embed Google search engine in this system to extend data sources. When the user enters keywords in the Google search box, as shown in Fig. 3, the entities that the retrieved results contain can be automatically recognized and labeled using named entity recognition technology. The user can drag the name of identified entities to *split panel* where the user can get all entities stored in AKB with the same name. The process is shown in Fig. 3.1 and Fig. 3.2.

### 2.2 Logic layer
This module aims to provide support for a set of visual operations and includes two main parts: (a) Calculate and Analyse, (b) Meta-search engine.  

#### 2.2.1 Calculate and Analyse
The part is mainly charge of the dealing with the request of the ***operation panel*** for AKB and the response of AKB for the ***operation panel***.

#### 2.2.2 Meta-search engine
We plan to embed Google search engine in this system to extend data sources. In order to automatically mark named entities, we need insert javascript codes into the response of Google search. There are tow ways: (a)writing an Chrome extension; (b)building an Proxy Server. Currently, we are trying to insert javascript code through an Proxy Server.
