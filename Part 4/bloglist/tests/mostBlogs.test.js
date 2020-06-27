const listHelper = require('../utils/list_helper').mostBlogs

describe('Authors with most blogs', () => {
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
          author: "John Mccarty",
          url:
            "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
          likes: 10,
          __v: 0
        }
      ]
      test ('when list has only one blog equals the likes of that', () => {
          const result = listHelper(listWithOneBlog)
          expect(result).toEqual({
              author: "Edsger W. Dijkstra",
              blogs: 1
          })
      })

      test('when list has more than one blog equals the likes of that', () => {
        const result = listHelper(listWithMultpleBlogs)
        expect(result).toEqual({
            author: "Edsger W. Dijkstra",
            blogs: 2
          })
      })
})