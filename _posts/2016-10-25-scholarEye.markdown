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

&nbsp;&nbsp;&nbsp;&nbsp; Compared to the ***previous system***, the new system, ***ScholarEye***, enhance the ability of interaction with users. As shown in ***Fig. 1***, there are mainly five changes in the new version:

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

### 2.3 User interface
This system interface mainly is divided in five main panels, as shown in Fig.  (a) menu, (b) Google search, (c) split, (d) filter, and (e) operation panels.


#### 2.3.1 Menu
The ***menu*** panel (inspired by the Mac OS X dock) provide access to such functions as  opening other application panels, saving current analysis status and restoring analysis status. There are two sections to the ***menu*** panel - the left-hand which deals with applications, and the right-hand side which is where you will find minimised windows. To use an item in the ***menu*** panel, click its icon. If you want to open ***Google search*** panel, click the Google icon (the icon with  letter "G"). When an application is open, the ***menu*** panel displays an illuminated dash beneath the application's icon.

#### 2.3.1 Google search
Already mentioned earlier, ***Google search*** panel aims to embed Google search engine in this system to extend data sources. As shown in Fig. ,when the panel is started, it displays Google search interface. The user can enter keywords in the search box to search in the whole Internet. When the results are generated, the named entities in the webpage will be automatically marked by  setting an background  color. Each entity is given a drag-and-drop property, which allow the user to drag entities to the ***split*** panel.

#### 2.3.2 Split
The ***split*** panel (inspired by TextTile)  displays the entities with the same name. The user can drag-and-drop an entity from the ***filter***, ***operation***, or ***Google search*** panel onto the ***split*** panel where the different entities stored in **AKB** with the same name will be exhibited , as shown in **Fig.**.

#### 2.3.3 Filter
The ***filter*** panel provides access for users to retrieve **AKB**. This panel can accept not only the keywords that the user enters manually but also the entities that are dragged from the ***operation***, ***split*** and ***Google search*** panel. As shown in **Fig.** the results are divided into three categories: **related scholars**, **related papers** and **related organizations**.

#### 2.3.4 Operation
The purpose of the ***operation*** panel is to display and analyze the relations between entities. The user can drag-and-drop entities from the ***filter*** and ***split*** panel onto the ***operation*** panel which provides a series of operations, as shown in **Fig.** to query, analyze and arrange entities.

### System Demo
