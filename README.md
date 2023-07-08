# Recipe-List
A Recipe List API with Nodej JS + Express

Pretende-se criar uma aplicação que funcione como um livro de receita, com as devidas estilizações e seguindo os
seguintes parâmetros:

As receitas devem ter:
    Titulo
    Autor
    Ingredientes
    Forma de preparo
    
<h4> Funcionalidades: </h4>
    <br> 1. Listar todas as receitas
    <br> 2. Adicionar uma nova receita
    <br> 3. Pesquisar por uma receita
    <br> 4. Editar uma receita
    <br> 5. Eliminar receita
    <br> 6. Adicionar uma receita a lista dos favoritos
    <br> 7. Listar as receitas marcadas como favoritas

<!-- 

UPDATE: 05 / 07 / 2023 | 11:17 am |- André Fonseca Miguel
> Adicionado:
    » Routa do /addAutor
    » Routa do /addReceita
    » Routa do /listarReceita
    » Routa do /listarAutor
    » Routa do /pesquisarReceita
    » Routa do /editarReceita
> Modificado:
    » Posições das routas exitentes, deixando na ordem POST - GET - PUT - DELETE

-->

<!-- 

UPDATE: 05 / 07 / 2023 | 00:38 am |- Afonso da Silva Vicente
> Adicionado:
    » Conection
    » server
    » Routa  /addFavoritos
    » Routa  /Favoritos
    » Routa  /apagarReceita/:id_receita
*/     

UPDATE: 06 / 07 / 2023 | 01:52 pm |- André Fonseca Miguel
> Modificado:
    » Routa /ListarReceitas agora chama nome do autor e oculta as IDs
    » Comentário no README para os updates. Usando <! -> e não mais /*  */


UPDATE: 08 / 07 / 2023 | 6:18 pm |- Afonso da Silva Vicente
> Adicionado:
    » .env 
    » gitignore
    - Neste arquivo coloquei as variaveis de ambiente do nosso sistema para torná-lo mais seguro
-->


Built By: Afonso da Silva & André Miguel