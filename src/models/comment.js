export default (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    commentId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    inviteId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      onDelete: 'CASCADE',
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      onDelete: 'CASCADE',
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }, {});
  Comment.associate = (models) => {
    Comment.belongsTo(models.Invite, {
      foreignKey: 'inviteId', as: 'invites', timestamps: false
    });
    Comment.belongsTo(models.User, {
      foreignKey: 'userId', as: 'users', timestamps: false
    });
  };
  return Comment;
};
