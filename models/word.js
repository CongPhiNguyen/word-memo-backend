import mongoose from 'mongoose';
const wordSchema = new mongoose.Schema({
    word: String,
    meaning: String,
    pronun: String,
    sentence: String
})
export default mongoose.models.words || mongoose.model("word", wordSchema);