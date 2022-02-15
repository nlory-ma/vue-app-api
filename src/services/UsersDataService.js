import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 1000,
    headers: {'Content-Type': 'application/json'}
})

export async function getUsers () {
    const res = await instance.get('users')
    return res.data
}

export async function getAllPostsByUser(userID) {
    const res = await instance.get('posts?userId=' + userID )
    return res.data
}

export async function getAllCommentsByPost(postId) {
    const res = await instance.get('posts/' + postId +'/comments')
    return res.data
}