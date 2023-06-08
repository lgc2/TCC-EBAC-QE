            #language: pt

            Funcionalidade: Login na plataforma

            @automatizado
            Cenário: Fazer login
            Dado que acesse o site da EBAC-SHOP
            E posteriormente a página de login
            Quando eu inserir um usuário válido
            E a senha correta
            Então farei login com sucesso
            E serei redirecionado para a área logada da tela `minha-conta`

            @automatizado
            Esquema do Cenário: Tentar realizar login com dados inválidos
            Dado que acesse o site da EBAC-SHOP
            E posteriormente a página de login
            Quando eu inserir o usuário "<usuario>"
            E a senha "<senha>"
            Então me será apresentada a mensagem: "<mensagem>"

            Exemplos:
            | usuario             | senha                          | mensagem                                                                                 |
            | ttestslgc2@test.com | GD*peToHNJ1#c$sgk08EaYJQoiaoas | Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.       |
            | testslgc2@test.com  | senhaIncorreta123              | Erro: a senha fornecida para o e-mail testslgc2@test.com está incorreta. Perdeu a senha? |
            | ttestslgc2@test.com | senhaIncorreta123              | Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.       |

            @manual
            Cenário: Tentar logar com usuário inativo
            Dado que eu seja um usuário com conta inativa
            Quando eu acessar a página de Login
            E informar o usuário inativado "usuarioinativado@gmail.com"
            E informar a senha correta "senhaCorretaDoUsuarioInativo"
            E submeter
            Então o sistema me apresetará um alerta
            E eu não conseguirei logar

            @manual
            Cenário: Validar login travado por 15 minutos
            Dado que acesse o site da EBAC-SHOP
            E posteriormente a página de login
            Quando eu informar o usuário válido "usuarioativo@gmail.com"
            E submeter o formulário com senhas incorretas, por 3 vezes
            Então o sistema me apresetará um alerta
            E o formulário de login ficará travado por 15 minutos