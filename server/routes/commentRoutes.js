const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment.controllers');

router.post('/blogs/:blogId/comments', commentController.createComment);

router.get('/blogs/:blogId/comments', commentController.getComments);

router.delete('/comments/:commentId', commentController.deleteComment);

module.exports = router;
