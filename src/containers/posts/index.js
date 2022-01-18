import React from 'react';
import { useQuery } from 'react-query';
import { getPosts } from './api/crud';

const PostsContainer = () => {
    const {isFetching, refetch, data } = useQuery('posts', () => getPosts());
    const posts = data?.data;

    return (
        <>
            {isFetching && <div>Loading...</div>}
            {posts?.map(({id, title}) => (<div key={id}>#{id} --- ${title}</div>))}
        </>
    );
}

export default PostsContainer;