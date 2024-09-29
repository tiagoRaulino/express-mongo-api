import mongoose from "mongoose";

const transferRegSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  classroom: { type: Number, required: true },
  keyPasser: { type: Number, required: true },
  keyReceptor: { type: Number, required: true },
  timeStamp: { type: String }
}, { versionKey: false });

const transferKey = mongoose.model("transferKey", transferRegSchema);

export default transferKey;
