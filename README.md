# Simulador de Sistema de Arquivos

Implementem em equipe um sistema de arquivos em memória com suporte a diretórios, arquivos, navegação e busca.

> 📦 **Template de trabalho em grupo do CodeForge.** Clique em **Use this template** → **Create a new repository** para criar o repositório do seu grupo.

## 🚀 Como rodar

```bash
node tests/filesystem.test.js   # rodar os testes locais
```

```js
const { FileSystem } = require("./src/filesystem");
const fs = new FileSystem();
fs.mkdir("/docs");
fs.touch("/docs/readme.txt", "Olá mundo");
console.log(fs.cat("/docs/readme.txt")); // "Olá mundo"
```

## 📋 Distribuição de métodos por membro

| Seção | Métodos | Responsável |
|-------|---------|-------------|
| 1 — Estrutura base | `mkdir`, `touch` | Membro 1 |
| 2 — Navegação | `pwd`, `cd`, `ls` | Membro 2 |
| 3 — Leitura e escrita | `cat`, `write` | Membro 3 |
| 4 — Remoção | `rm`, `rmdir` | Membro 4 |
| 5 — Cópia, movimentação e busca | `cp`, `mv`, `find` | Membro 5 |

> Atualize a tabela com os nomes dos membros do grupo.

## 📋 Requisitos

- **Estrutura base** — `mkdir(path)` cria diretórios aninhados; `touch(path, content)` cria arquivos
- **Navegação** — `cd(path)` suporta paths absolutos, relativos, `.` e `..`; `pwd()` retorna o caminho atual; `ls(path)` lista conteúdo
- **Leitura e escrita** — `cat(path)` retorna o conteúdo; `write(path, content)` sobrescreve ou cria
- **Remoção** — `rm(path)` remove arquivo; `rmdir(path)` remove diretório vazio (lança `Error` se não vazio)
- **Cópia, movimentação e busca** — `cp(src, dst)`; `mv(src, dst)`; `find(pattern, path)` busca recursiva
- Lançar `Error` com mensagem clara para caminhos inexistentes ou operações inválidas

## 👥 Trabalho em equipe (obrigatório)

- O repositório deve pertencer a **um** dos membros do grupo. Os **demais membros entram como colaboradores** em `Settings → Collaborators → Add people`.
- Cada membro trabalha em sua **própria branch** e abre **Pull Request** para a `main`.
- O CodeForge mede as **contribuições individuais** de cada membro direto do histórico do GitHub.

## 🧱 Stack

- Node.js (CommonJS)
- Sem dependências externas
