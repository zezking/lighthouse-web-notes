## SQL

Structured Query Language

### Why do we need databse

- size
- ease of updating
- accuracy
- security
- who's accessing and editing the data and who gets to access and control the data
- redundancy
- importance

### Relational Database Introduction

- Remove repetitive data
- use uniqiue identifier to draw links between tables
- as reference between different tables
- give a table a unique ID

  - #### Entity Relationp Diagram

    The hardest part is to figure out which data goes to which table so you can link each table afterwards

    - Entity
      - represents a person, place or thing that you want to track in a database
        - For example, student will be the container that will include all the students so the entity in this case will just be studentss
    - Attribute

      - Describes what the entity is

        - for example, student first names and last names will be attribute because it tells you more about the students

      - This will become coloum in the tables

    - Primary Key
      - must be unique
    - An attribute or group of attributes that uniqeuly identifies an instance of the entity
      - like the twitter handles in the Relational Databse introduction example. No users can have the same twitter handles or usernames
      - like student ID to identity if students have similiar names
    - Relationship
      - describes how one or more entities interact with each other
      - a verb is often to used to describe the relationship
    - Cardinality
      - The count of instances that are allowed or are necessary between entity relationships
        - students are allowed to have multiple phone numbers
      - It does have min and max
        - you can not exceed/less than the max and min
      - use Crow's Foot Notation
    - Business Rule of ERD
      - create a one to many relationships
        - we need to use compository primary keys
      - a group of unique identifiers to identify students
      - create seperate entities that only applicable to that specific entity so we can uniquely seperate information
        - example use Undergarde GPA or Graduate GPA to seperate Graduate or Undergraduate students
      - use a bridge tables that create a many to many relationships between two entities. The bridge tables has one to many relationship between each entity (one from the bridge table to many of the entity on the sides)

### SQL

- use CREATE TABLE chartTitle (entity dataType, entity2 dataType) to initialize a table

- use INSERT INTO chartTitle VALUES (value, value, value)
  - value data type must match the declared data type
- SELECT \* FROM chartTitle ORDER BY entity(size);
