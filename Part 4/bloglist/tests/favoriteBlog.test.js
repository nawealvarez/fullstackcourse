const listHelper = require('../utils/list_helper').favoriteBlog

describe('favorite blog', () => {
    const listWithOneBlog = [
        {
          _id: '5a422aa71b54a676234d17f8',
          title: 'Go To Statement Considered Harmful',
          author: 'Edsger W. Dijkstra',
          url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
          likes: 5,
          __v: 0
        }
      ]

    const listWithMultpleBlogs = [
        {
          _id: "5a422aa71b54a676234d17f8",
          title: "Go To Statement Considered Harmful",
          author: "Edsger W. Dijkstra",
          url:
            "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
          likes: 5,
          __v: 0
        },
        {
          _id: "5a422aa71b54a676234d17f8",
          title: "Go To Statement Considered Harmful",
          author: "Edsger W. Dijkstra",
          url:
            "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
          likes: 2,
          __v: 0
        },
        {
          _id: "5a422aa71b54a676234d17f8",
          title: "Go To Statement Considered Harmful",
          author: "Edsger W. Dijkstra",
          url:
            "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
          likes: 10,
          __v: 0
        }
      ]
      test ('when list has only one blog equals the likes of that', () => {
          const result = listHelper(listWithOneBlog)
          expect(result).toEqual({
              title: listWithOneBlog[0].title,
              author: listWithOneBlog[0].author,
              likes: listWithOneBlog[0].likes
          })
      })

      test('when list has more than one blog equals the likes of that', () => {
        const result = listHelper(listWithMultpleBlogs)
        expect(result).toEqual({
            title: listWithMultpleBlogs[2].title,
            author: listWithMultpleBlogs[2].author,
            likes: listWithMultpleBlogs[2].likes
          })
      })
})