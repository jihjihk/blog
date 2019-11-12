---
title: The Black Box Bias
date: "2017-09-18T00:00:00.169Z"
template: "post"
draft: false
slug: "/writing/the-black-box-bias/"
category: "Politics of Code"
description: "Letting the data decide for us"
---

Machine learning is literally leaving the decision-making process to an algorithm and asking for only the results of a certain computation. This abstraction tool is becoming more accessible as it becomes even more abstracted from the machine into simple libraries like sci-kit learn, with which we can now focus more on applying than devising the algorithm.

One useful application of machine learning is Spotify's Discover Weekly, which trains on an individual's weekly music taste and then gives recommendations. The decision-making is relatively simple in this case; we can safely assume that the frequency of listening to a song is highly correlated with our liking for the music, although one week of abnormal listening behavior is likely to very easily throw off the recommendations. It's a relatively simple black box that does what we expect it to that trains on very relevant dataset--individual's playlist.

Can the same black box be used to identify terrorists to kill? Other machine learning models, however, are hard to predict and ever so data-hungry that the priority is often on getting a lot of data regardless of relevance. In the case of calculating a dispersion matrix based on phone signals, contact frequency, geolocation, and other unannotated data, identifying hot nodes thus nominating terrorists to kill is not as simple as predicting someone's music taste. As stated in Weber's paper, it is not easy to foresee terrorist attacks based on certain behavior, yet the model assumes certain metrics such as frequency of contact in a social network as a significant indicator of terrorist activity.

There are numerous levels of abstraction in the president's Terror Tuesday decision-making process: first from the unannotated mass data to the machine learning algorithms to software engineers to intelligence agency, then to final decision-making. Isn't it inevitable that a lot of false positives and false negatives will arise along this long and unclear abstraction pipeline? Aren't the consequences of these false signals a matter of life and death? But really, do they care?