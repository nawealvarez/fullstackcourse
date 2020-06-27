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

module.exports = {
    dummy, 
    totalLikes,
    favoriteBlog
}