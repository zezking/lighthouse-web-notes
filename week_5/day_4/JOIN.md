## Notes on JOINING TYPE

```
1. FROM students LEFT OUTER JOIN cohorts ON cohorts.id = cohort_id;
2. FROM students RIGHT OUTER JOIN cohorts ON cohorts.id = cohort_id;
3. FROM students FULL OUTER JOIN cohorts ON cohorts.id = cohort_id;
```

The first query will return all students because students is to the LEFT of the word JOIN.
The second query will return all of the cohorts because cohorts is to the RIGHT of the word JOIN.
The third query will return all rows from both tables, even when there is no match.
