const User = require('./User');
const Post = require('./Post');
const Vote = require('./Vote');
const Comment = require('./Comments');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

Post.belongsToMany(User, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'post_id',
});

User.belongsToMany(Post, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'user_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});



module.exports = { User, Post, Vote, Comment };
