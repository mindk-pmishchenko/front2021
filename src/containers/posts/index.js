import React, {useState} from 'react';
import { useQuery } from 'react-query';
import { getPosts } from './api/crud';

import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const PostsContainer = () => {
    const {isFetching, refetch, data } = useQuery('posts', () => getPosts());
    const posts = data?.data;

    const [modalText, setModalText] = useState('');
    const [open, setOpen] = useState(false);

    const openModal = (body) => () => {
        setModalText(body);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    return (
        <>
            {isFetching && <div>Loading...</div>}
            {posts?.map(({id, title, body}) => (<div key={id}>#{id} --- ${title}<Button onClick={openModal(body)}>see details</Button></div>))}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Post body
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {modalText}
                    </Typography>
                </Box>
            </Modal>
        </>
    );
}

export default PostsContainer;