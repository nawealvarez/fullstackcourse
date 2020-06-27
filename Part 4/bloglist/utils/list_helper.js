const dummy = (blogs) => {
    return 1
}

const totalLikes = blogs => {
    return blogs.reduce((total, blog) => {
        return total + blog.likes
    }, 0)
}

const favoriteBlog = blogs => {
    let maxLikes = 0
    let favBlogIndex = 0

    if (!blogs.length) return null

    for (let i = 0; i < blogs.length; i++) {
        if (blogs[i].likes > maxLikes) {
            maxLikes =blogs[i].likes
            favBlogIndex = i
        }
    }
    return {
        title: blogs[favBlogIndex].title,
        author: blogs[favBlogIndex].author,
        likes: blogs[favBlogIndex].likes
    }
}

const mostBlogs = blogs => {
    const authors =  {}
    let mostBlogsVal = 0
    let authorWithMostBlogs = null

    if (!blogs.length) return null

    blogs.forEach(blog => {
        if (authors.hasOwnProperty(blog.author)) {
            authors[blog.author] ++
        } else {
            authors[blog.author] = 1
        }
    })

    for (author of Object.keys(authors)) {
        if (authors[author] > mostBlogsVal) {
            authorWithMostBlogs = author
            mostBlogsVal = authors[author]
        }
    }

    return {
        author: authorWithMostBlogs,
        blogs: mostBlogsVal
    }
}

module.exports = {
    dummy, 
    totalLikes,
    favoriteBlog,
    mostBlogs
}