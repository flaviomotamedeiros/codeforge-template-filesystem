"use strict";

/**
 * Simulador de Sistema de Arquivos em memória.
 * Cada membro do grupo fica responsável por uma seção de métodos.
 * Leia o README para ver a distribuição e os requisitos.
 */

class FileNode {
  constructor(name, type, content = "") {
    this.name = name;
    this.type = type; // "file" | "dir"
    this.content = type === "file" ? content : null;
    this.children = type === "dir" ? {} : null;
  }
}

class FileSystem {
  constructor() {
    this._root = new FileNode("/", "dir");
    this._cwd = "/";
  }

  // ─── Seção 1: Estrutura base ─────────────────────────────────────────────

  /**
   * Cria o diretório no caminho indicado (incluindo pais que não existam).
   * Não faz nada se o diretório já existir.
   * Lança Error se o caminho pertencer a um arquivo existente.
   * @param {string} path
   */
  mkdir(path) {
    throw new Error("Não implementado");
  }

  /**
   * Cria um arquivo vazio (ou com conteúdo) no caminho indicado.
   * Cria diretórios pais se necessário.
   * Lança Error se já existir um diretório nesse caminho.
   * @param {string} path
   * @param {string} [content=""]
   */
  touch(path, content = "") {
    throw new Error("Não implementado");
  }

  // ─── Seção 2: Navegação ──────────────────────────────────────────────────

  /**
   * Retorna o caminho do diretório atual.
   * @returns {string}
   */
  pwd() {
    throw new Error("Não implementado");
  }

  /**
   * Muda o diretório atual.
   * Suporta: paths absolutos, relativos, "." e "..".
   * Lança Error se o destino não existir ou não for diretório.
   * @param {string} path
   */
  cd(path) {
    throw new Error("Não implementado");
  }

  /**
   * Lista o conteúdo de um diretório.
   * @param {string} [path="."] — padrão é o diretório atual
   * @returns {string[]} nomes dos filhos (arquivos e diretórios)
   */
  ls(path = ".") {
    throw new Error("Não implementado");
  }

  // ─── Seção 3: Leitura e escrita ──────────────────────────────────────────

  /**
   * Retorna o conteúdo de um arquivo.
   * Lança Error se o caminho não existir ou for um diretório.
   * @param {string} path
   * @returns {string}
   */
  cat(path) {
    throw new Error("Não implementado");
  }

  /**
   * Escreve (ou sobrescreve) o conteúdo de um arquivo.
   * Cria o arquivo se não existir.
   * Lança Error se o caminho for um diretório.
   * @param {string} path
   * @param {string} content
   */
  write(path, content) {
    throw new Error("Não implementado");
  }

  // ─── Seção 4: Remoção ────────────────────────────────────────────────────

  /**
   * Remove um arquivo.
   * Lança Error se o caminho não existir ou for um diretório.
   * @param {string} path
   */
  rm(path) {
    throw new Error("Não implementado");
  }

  /**
   * Remove um diretório vazio.
   * Lança Error se não existir, não for diretório, ou não estiver vazio.
   * @param {string} path
   */
  rmdir(path) {
    throw new Error("Não implementado");
  }

  // ─── Seção 5: Cópia, movimentação e busca ────────────────────────────────

  /**
   * Copia um arquivo de src para dst.
   * Lança Error se src não existir ou for um diretório.
   * @param {string} src
   * @param {string} dst
   */
  cp(src, dst) {
    throw new Error("Não implementado");
  }

  /**
   * Move (ou renomeia) um arquivo ou diretório de src para dst.
   * Lança Error se src não existir.
   * @param {string} src
   * @param {string} dst
   */
  mv(src, dst) {
    throw new Error("Não implementado");
  }

  /**
   * Busca recursivamente a partir de path todos os nós cujo nome contém pattern.
   * @param {string} pattern
   * @param {string} [path="/"]
   * @returns {string[]} lista de caminhos absolutos encontrados
   */
  find(pattern, path = "/") {
    throw new Error("Não implementado");
  }
}

module.exports = { FileSystem, FileNode };
