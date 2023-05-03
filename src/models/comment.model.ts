import * as mongoose from 'mongoose'

const Comment = mongoose.model('Comment', new mongoose.Schema({
  username: {
    type: String
  },
  content: {
    type: String,
    required: true
  }
}))

export default Comment
