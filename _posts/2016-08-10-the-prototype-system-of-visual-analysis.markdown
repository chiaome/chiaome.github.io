---
layout:     post
title:      "The prototype system of visual relevance analysis"
subtitle:   "visual relevance analysis system for academic infomation"
date:       2016-08-10
author:     "Zhao Chang"
header-img: "img/prototype/chiao-prototype.jpg"
tags:
    - visualization
    - visual analysis
    - system design
---

### 1 Introduction
Recently, our group are working on visual relevance analysis to discover related academic information. It is important for researches to discover related academic information when they are acquiring knowledge about a specific field, which can help them to find new ideas for research. Several platforms are available for discovering related academic information such as Google Scholar, Springer. However, it is not intuitive to represent related academic information and none of these popular platform employed any semantics based information for searching knowledge. In the article, we proposed a visual relevance analysis system based on a Semantics-based information modeling. Our works mainly focus on:

1.    *Building an academic knowledge base (AKB) for academic information;*
2.    *Developing Information search system for AKB;*
3.    *Researching the method of the demonstration system of knowledge-based entity relationship.*

### 2 Building Academic knowledge Base
We employ the ontological approach to build the AKB.

#### 2.1 Ontology Description of AKB
Creation of ontology for the academic domain we have defined three top classes listed below.

Publications: Publications class categories into three different subclasses: Journals, Conferences, Dissertations. Publications details include "Title", "Authors", "Abstract", "keywords" etc.

Scholars: Includes set of all author's information. Author's information includes general details of authors like, "Name", "Email address", "Affiliation" etc.

Organizations: Organizations contain all affiliations of publications' authors. Organizations details include "Name", "Location", "Description" etc.

#### 2.2 Relations in AKB
We define four relations which include *has-Publication*, *written-By*, *works-for-Organization*, *has-Employee*, *comes-from-Organization*, *publish-publication* in our AKB. As shown in Fig. 1, depicts the relationship between classes. The circle in the figure represents the individual of the class and arcs are the relationship among classes.
<img src='/img/prototype/chiao-ontology.jpg'/>
<center><b>Fig. 1.</b> Relation in Classes</center>

#### 2.3 Ontology Entities
This section describes how to create entity for the AKB ontology.

*    ***For Publications:*** We crawled 586,596 webpages from online Chinese academic databases such CNKI, WanFangData. We can extract the publication's information (e.g. title, authors, abstract, keywords, organizations, etc.) from those webpages to create entities for publication's class.

*    ***For Scholars:*** We can obtain authors' basic information (e.g. name, affiliation) from publications and use author's information to create entities for scholar's class.

*    ***For Organizations:*** Similarly to ***Scholars***, we can extract Organizations' basic information (e.g. name) from publications to generate entities for organization's class.

#### 2.4 Building Relationships Between Entities
It is one of the most important steps for realizing visual relevance analysis to build relationships between entities. Already mentioned earlier, our AKB consists three main classes and six relationships among them. Like extracting entities, we also can extract relationships from the publication's information. Each entity is assigning a globally unique ***ID***. We establish relationships through the properties of publications informations such as authors, organizations. **Fig. 2.** shows the detail.

<a href="/img/prototype/chiao-entities.jpg" target="\_blank" title="Click to see the big picture "><img src='/img/prototype/chiao-entities.jpg'/></a>
<center><b>Fig. 2.</b> Building Relationships Between Entities</center>


### 3 SYSTEM DESCRIPTION

In this section, I describe overview of our visual analysis model. ***Fig. 3.*** shows the architecture of the system. This system consists of three main components.

<a href="/img/prototype/chiao-sys-prototype.jpg" target="\_blank" title="Click to see the big picture ">
<img src='/img/prototype/chiao-sys-prototype.jpg'/>
</a>
<center><b>Fig. 3.</b> System Overview</center>

#### 3.1 Academic knowledge base (AKB)

AKB provide the ontological representation of scientific research in the field of academy. These information include publications, Scholars and organizations related to the publications and relationships among them are stored in AKB. Details description about AKB present in <a href="#building-academic-knowledge-base"  title="section 2">Section 2</a>.

#### 3.2 Calculate and Analyze (CAA)

This module describes the logic of supporting visual relevance analysis related to a given query, which is created by modeling the information stored in AKB. CAA's details explain in the Section 3.3.


#### 3.3 User interface
The user interface provides an interactive GUI to allow the user to discover related academic information. It consists of five main parts, as shown in ***Fig. 4***, (a) Query interface, (b) Faceted navigation, (c) knowledge card, (d) Related information, (e) Relationships presentation.
<a href="/img/prototype/chiao-ui.jpg" target="\_blank" title="Click to see the big picture ">
<img src='/img/prototype/chiao-ui.jpg'/>
</a>
<a href="/img/prototype/chiao-relationships.jpg" target="\_blank" title="Click to see the big picture ">
<img src='/img/prototype/chiao-relationships.jpg'/>
</a>
<center><b>Fig. 4.</b> User interface</center>


#### 3.3.1 Query interface

The ***Query interface*** allows the user to generate queries by inputing keywords and selecting search scope. The  ***Query interface*** contains four sections: *search scopes*, *search fields*, *input box* and *sort  menu*. The *search scopes* is used to select search type such as Journals, Conferences, Dissertations and all of them. The *search fields* provides some fields (e.g.title, authors, abstract, organizations, etc.) where the keywords will match. The *sort menu* allows the user to sort the results by some rules. Currently, this system can provide two ways of sorting, (1) relevance, (2) sensibility.

#### 3.3.2 Faceted navigation

The ***Faceted navigation***  can not only show statistical distributions of the retrieved results but also let the user narrow down the results  through interactive filter.  When the user retrieves knowledge base by keywords, this system will compute the distribution of  retrieved results on structured data, which can make the user get a whole picture of the results. In order to look into the results distributed in some fields, I add a checkbox on the front of each aggregation result. The user can select one or more checkbox to filter the retrieved results.

#### 3.3.3 knowledge card

The purpose of adding a knowledge card is to provide a factual response to a query showing a different aspects related to  a "single conceptual entity ".  The concept of ***knowledge card*** stems from Google search, which can help the user to discovery more deeper information.  In this system, the ***knowledge card*** contains some basic informations. For instance, a ***knowledge card*** for "INSTITUTE OF INFORMATION ENGINEERING, CAS" contains its location, level, establishment time, description, chief and research directions.

#### 3.3.4 related information

The ***related information*** presents related entities associated with the search result in a tag cloud. Once the result is generated, the system will produce a list of related entities. There are two steps. First is to collect the  related entities of the first 100 search results. Second is to count the frequency of each related entity and single out related entities that have high frequency.

#### 3.3.5 relationships presentation

The ***relationships presentation*** aims to intuitively display the relationships between related entities, which will help the user discover new related information quickly and easily.   This system uses Force-directed graph to visualize knowledge graph.  Taking one entity as the core of the graph, other related entities will be automatically calculated and presented. When the mouse hover on one node, the ***knowledge card*** will display specified information related the entity. The user can access to another entity relationships graph through clicking the link on the ***knowledge card***. By using this method, the user can realize relevance analysis.


### References

1.<a id="ref1">[End-to-end - Wikipedia, the free encyclopedia](http://en.wikipedia.org/wiki/End-to-end)</a>

2.<a id="ref2">[end-to-end - definition of end-to-end by The Free Dictionary](http://www.thefreedictionary.com/end-to-end)</a>

3.<a id="ref3">[How User Scenarios Help To Improve Your UX - The Usabilla Blog](http://blog.usabilla.com/how-user-scenarios-help-to-improve-your-ux/)</a>

4.<a id="ref4">[How to Create User Stories, Scenarios, and Cases](https://www.newfangled.com/how-to-tell-the-users-story/)</a>

5.<a id="ref5">[Designing end-to-end user experiences. | 90 Percent Of Everything](http://www.90percentofeverything.com/2008/11/11/designing-end-to-end-user-experiences/)</a>
