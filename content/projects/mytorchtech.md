---
title: mytorch.tech
template: "post"
draft: false
slug: "/projects/my-torch-tech/"
category: "Software"
tags:
  - "Mobile"
  - "Prototype"
description: "Prototyping a safety app that makes asking for help easy, built using Node.js"
socialImage: "/media/image-2.jpg"
---

## Problem

Many college campuses mandate students to take basic safety protocol training to help them understand what safety standards are expected, how to navigate different hazards, and how to ask for help when needed. We also receive these trainings during the first week orientation and First Year Dialogues, but due to certain environmental circumstances, we are not allowed to explicitly receive training on substance abuse.

This ambiguity in the admin's policies and lack of students' knowledge on how to handle these situations can hinder emergency situations from being prevented. Even when incidents happen in the presence of bystanders, they are often not prevented as early as they could be. This could be due to:
* delayed or lack of reporting due to fear of retaliation
not knowing when to intervene (eg. how many drinks are excessive?)
* lack of first aid knowledge
* not having means to call
* not knowing how to call the RA on duty
* unclear if it is “wrong enough” to call the police, especially when intoxicated
* lack of scalable and uniform solution across campuses

## Solution

To address these problems, we decided to build a web app that authenticates any NYU student to easily call public safety, residential assistants, or their friends within the website and without a phone. We wanted to differentiate between different levels of dangers and risky situations to lower the barrier of asking for help. We also enabled anonymous reporting to allow any bystander to report the incident without fearing retaliation. Having this as a web app that can easily change authentication details (eg. from NYU Abu Dhabi to Carnegie Mellon) allows it to extend across college campuses.

### Features

#### Emergency
Emergency is categorized as a high-risk situation that requires immediate help from the public safety. After the location from /home is submitted and initial help is requested via Twillio API text, the user is re-routed to /emergency which also contains a simple incident reporting form. This form is submitted via POST request to ensure as much detail is reserved and reported at the spot.

#### Danger
Danger is categorized as less severe yet potentially risky situation that the user or a bystander would like to de-escalate by asking for the RAs' or friends' help. When the user submits location data and is re-routed to /danger page, the user can specify whom they would like to call and what danger they are in.

#### Tips
This page includes basic first aid responses for different situations. I got this information from online so they may not be specific to local laws or reporting system. Regardless most details would be useful for first aid.

#### Settings
This page allows a user to specify which 3 friends they would like to contact when in danger. The form asks for both email and phone number in case a friend doesn't own a local phone number but still can be contacted via email.

![Home Page Screenshot](/media/mytorchscreen.png)

### Frontend

The front-end uses pug as a templating engine and Bootstrap and jQuery as auxiliary libraries. The key focus was on making each button as readable and accessible as possible while differentiating between risk of situations by color and text.

The initial landing page after login has one text field that gets the current location and passes it onto /emergency or /danger routes. This location data is received so that

### Backend

We used Express.js to create the server. User authentication API used Google email. Using the Twillio API, we pass the location data from the GET request and use to form the text body when sending texts to Public Safety, RAs or friends.

#### MongoDB Database
We have a configured MongoDB database that stores all users, users' friends contact information and incident reports. Whenever a first time user logs in to the app with their NYU credentials, a new account is created in our database, and they are prompted to input their 3 friends' contact information. This only happens at their first log in, although they can update phone numbers in /contacts page. The database also stores incident reports. It is interesting that a lot of our friends asked about who has access to these reports because often times they could be very sensitive information. Currently, it's just the admins of the heroku app that has access to the stored data, but the question of authority, access and obligation to report is something we will have to discuss and decide on.


## User Feedback
We tested the first prototype app with our classmates on campus. We briefly described what the app was and let them interact with it to see what was and wasn't intuitive. It was very helpful to conduct these tests with people who we never told about mytorch because we were able to learn some crucial lessons about how to improve on the project.

Some of the feedback:

* Lack of tagline makes the app ambiguous to first time users
* Too much text for the safety tips page
* Button texts (e.g. Public Safety) are not very clear or descriptive
* Form input validation is necessary for certain fields
* More step-by-step guide of first aid tips would be better
* Nav bar button doesn't work on mobile view
'Settings' is not the best word; perhaps My Contacts?
* Better explanation of the consequences of pressing each button
* What happens if public safety doesn't confirm receiving of the messages?
* Who has access to the incident reports?

Overall we learned how important it was to make the purpose of the app as clear as possible from the very first page. We were so used to working on the app that we missed how much information we omitted when editing. The same applied to other text descriptions or wordings that seemed obvious to us but were misinterpreted by first time users. So we understood that this round of improvements should not only included technical updates but also better phrasing of the text.

## Moving Forward
The more we work on this, the more there seems to do, but we are very happy with the overall progress. After having presented in the Mashups class, most of our classmates said that they would definitely use this app. We want to continue the conversation going with admin and student life office to get some funding (eg paying for API and hosting services) while opening up to the community to make improvements that we didn't think of or didn't know how to approach. For example, someone suggested that we should integrate with the Facebook messaging API to instantly message our friends on Facebook instead of trying to call them, since most of us don't have working phone numbers or know others' phone numbers. These new suggestions and advices were added to the Github project board so we can keep track of them and continue working on them.

There are some questions beyond technical issues that we still need to answer. For example, the question of who gets access to the incident report data is something we need to discuss and get agreements from the NYUAD community. We might need to include a user agreement box, for example, to make sure that everyone understands who gets access to what data on this app.

Another important decision to make is how we become liable when help is requested but it's not delivered. One way we thought of was having the Public Safety respond to the sent text message with a simple Yes or No and then we can notify the user about the status in real-time. Because Twilio doesn't provide local UAE numbers as server numbers, we have to configure a way to allow public safety, RAs or user's friends to send international texts to the number. This leads to another problem of having two incidents reported at the same time and not being able to discriminate between which incident Public Safety responded to. We thought we could include a URL that can be clicked on to confirm help being sent for a specific incident, but this doesn't account for cases in which Public Safety or RAs don't have smartphones. (In fact, the RA phone is the basic phone that only supports call and text.)

We will hopefully meet with university offices to see what they think about our progress and how they can help us move forward. We will also try to gauge the student body's interests and get help in any way they would like to contribute in.