# Week 20

# Design subscription-based sports website which can display scores, game status, history for any games

##

## Requirement Clarification

The website should have the following features:

- Real-time display of scores and game status for multiple sports
- Historical data for past games
- Personalized dashboard for each user with the option to select favourite sports and teams
- Filtering and sorting options to easily find any specific sport
- Subscription plans for different tiers of access and features
- Payment processing for subscriptions
- Integration with third-party data providers or custom API to collect and display data

## Capacity and Constraints

The website should be able to handle a large volume of traffic, especially during popular sports events. It should be designed while keeping in mind the need for scalability, minimum load time and performance optimization.

## System API

The website will need to integrate with third-party data providers or develop a custom API to collect and display data. The API should be designed to provide real-time and historical details on scores and game status.

## Database Design

Database should be designed to handle large amounts of data, should be consistent and reliable. So, a **relational database management system** (RDBMS) should be preferred like MySQL. Additionally, these databases are highly scalable and can handle large amounts of data.

While keeping scalability in mind, one can manage large amount of data by partitioning, horizontal specifically across multiple location to distribute the workload and improve query performance.

Following tables could be included in the database:

1. Teams table: This table stores information about each team, including the team name and location:
    1. id (unique identifier for the team)
    2. name (the name of the team)
    3. location (the city, state, or country)
2. Games table: This table stores information about each game, including the teams involved, the date and time of the game, and the location:
    1. id (unique identifier for the game)
    2. home\_team\_id (team id of the home team)
    3. away\_team\_id (team id of the away team)
    4. sport\_category (type of sport, eg: cricket, soccer, baseball)
    5. date (the date of the game)
    6. time (the time of the game)
    7. location (the city, state, or country)
3. Status table: This table stores the status for each game, including the scores for each team and the total score:
    1. id (unique identifier for the score entry)
    2. game\_id (the id of the game)
    3. status (the status of the game)
4. Users table: This table stores information about each user, including their username, email address, and password:
    1. id (unique identifier for the user)
    2. username (the username of the user)
    3. email (the email address of the user)
    4. password (the hashed password for the user)
    5. fav_team_ids(Ids of fav teams)
    6. fav_sports(list of sports)
5. Subscriptions table: This table stores information about each user's subscription, including the subscription level, start date, and end date:
    1. id (unique identifier for the subscription)
    2. user\_id (the id of the user with the subscription)
    3. level (the subscription level, e.g. Basic, Premium, etc.)
    4. start\_date (the start date of the subscription)
    5. end\_date (the end date of the subscription)

## Basic Algorithm or Data Structure to Solve Some Features

Some algorithms or data structures that can be used are:

1. Priority queue
2. Caching
3. Sharding
4. Load balancing

## High-level Block Diagram
In comments

[comment]: # (
+-------------------------------------------+
|                User Interface              |
+-------------------------------------------+
|             Web Browser or App             |
|                                            |
+-------------------------------------------+
                       |
                       |
                       |
                 HTTP Requests
                       |
                       |
    +------------------+--------------------+
    |                  |                    |
    |                  |                    |
+---v-------+  +-------v---------+  +---------v--------+
|   Load    |  |   Application   |  |      API         |
|  Balancer |  |    Server       |  |                  |
+-----------+  +-----------------+  +------------------+
                       |            |
                       |            |
                       |            |
        +--------------v------------v--------------+
        |                                          |
        |                                          |
    +---v------------+                +-----------v-----+
    |                |                |                 |
    |                |                |                 |
+---v------+ +-------v-------+ +-------v------+ +-------v------+
|   Cache  | |   Business    | |    Service   | |   Database   |
|          | |   Logic       | |   Integrator | |              |
+----------+ +---------------+ +--------------+ +--------------+                            
)