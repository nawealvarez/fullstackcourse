const listHelper = require('../utils/list_helper').totalLikes

describe('total likes', () => {
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

    const listMoreThanOneBlog = [
        {
          _id: '5a422aa71b54a676234d17f8',
          title: 'Go To Statement Considered Harmful',
          author: 'Edsger W. Dijkstra',
          url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
          likes: 5,
          __v: 0
        },
        {
            _id: '5a422aa71b54a676234d17f9',
            title: 'Go Run Kid',
            author: 'Edsger Waltman witman',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_Run_Kid.html',
            likes: 15,
            __v: 0
          }
      ]
  
    test('when list has only one blog equals the likes of that', () => {
      const result = listHelper(listWithOneBlog)
      expect(result).toBe(5)
    })

    test('when list has more than one blog equals the likes of that', () => {
        const result = listHelper(listMoreThanOneBlog)
        expect(result).toBe(20)
      })
  })