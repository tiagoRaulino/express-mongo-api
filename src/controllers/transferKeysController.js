import transferKey from "../models/TransferKey.js";

class transferKeyController {

  static async listarTransferKeys (req, res) {
    try {
      const listaTransferKeys = await transferKey.find({});
      res.status(200).json(listaTransferKeys);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  };

  static async listarTransferKeyPorId (req, res) {
    try {
      const id = req.params.id;
      const transferKeyEncontrado = await transferKey.findById(id);
      res.status(200).json(transferKeyEncontrado);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição do transferKey` });
    }
  };

  static async cadastrarTransferKey (req, res) {
    try {
      const novoTransferKey = await transferKey.create(req.body);
      res.status(201).json({ message: "criado com sucesso", transferKey: novoTransferKey });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao cadastrar transferKey` });
    }
  }

  static async atualizarTransferKey (req, res) {
    try {
      const id = req.params.id;
      await transferKey.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "transferKey atualizado" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na atualização` });
    }
  };

  static async excluirTransferKey (req, res) {
    try {
      const id = req.params.id;
      await transferKey.findByIdAndDelete(id);
      res.status(200).json({ message: "transferKey excluído com sucesso" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na exclusão` });
    }
  };
};

export default transferKeyController;
