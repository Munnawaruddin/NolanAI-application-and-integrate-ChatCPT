const ScriptSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    title: String,
    content: String,
    createdAt: { type: Date, default: Date.now },
  });
  
  export default mongoose.models.Script || mongoose.model('Script', ScriptSchema);