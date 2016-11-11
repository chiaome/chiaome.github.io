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

1.    *Integrating all functions into one single page via window components;*
2.    *Introducing Meta-search Engine;*
3.    *Using drag-and-drop mechanism;*
4.    *Improving the representation of Network Graph;*
5.    *Adding operable panel for each node.*


<img src='/img/scholareye/17.png'/>
<center><b>Fig. 1.</b>  System Overview</center>

### System description
In the section, I only describe the ***User Interface***. (If you want to know about more details in ***Data Layer***, please review <a>my last article</a>.)  
