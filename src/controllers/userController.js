import User from '../models/User.js';

class UserController {
  
  // List all users
  static async listarUsuarios(req, res) {
    try {
      const listaUsuarios = await User.find({});
      res.status(200).json(listaUsuarios);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  }

  // Get a user by ID
  static async listarUsuarioPorId(req, res) {
    try {
      const id = req.params.id;
      const usuarioEncontrado = await User.findById(id);
      res.status(200).json(usuarioEncontrado);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição do usuário` });
    }
  }

  // Create a new user
  static async cadastrarUsuario(req, res) {
    try {
      const novoUsuario = await User.create(req.body);
      res.status(201).json({ message: "Usuário criado com sucesso", user: novoUsuario });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao cadastrar usuário` });
    }
  }

  // Update a user
  static async atualizarUsuario(req, res) {
    try {
      const id = req.params.id;
      await User.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Usuário atualizado" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na atualização do usuário` });
    }
  }

  // Delete a user
  static async excluirUsuario(req, res) {
    try {
      const id = req.params.id;
      await User.findByIdAndDelete(id);
      res.status(200).json({ message: "Usuário excluído com sucesso" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na exclusão do usuário` });
    }
  }
};

export default UserController;
