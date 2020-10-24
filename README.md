# Schema Stitching Example - Type Extensions

This is a simple example of GraphQL schema stitching, using type extensions.

There is an `authors` service and a `books` service. Both have an in memory database of their respective data type.

Using type extensions, the `books` service extends the `Author` type to resolve a list of that author's books.

### Usage

- Install all dependencies using `yarn install`.
- From the root directory, start all 3 services using `yarn dev`.
- Navigate to the stitching gateway UI: http://localhost:4000
- Try this query to see the schema stitching in action:

```
query {
  allAuthors {
    id
    full_name
    dob
    books {
      id
      title
      genre
    }
  }
}
```
